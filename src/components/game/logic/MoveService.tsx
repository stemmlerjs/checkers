import { Board } from "../board/Board";
import { Piece, Position } from "../pieces/Piece";
import { Game } from "./Game";

type Directionality =
  | "Upwards"
  | "Downwards"
  | "Sideways"
  | "Stationary"
  | "Vertically";
type CanMovePieceResult =
  | "InvalidDirectionality"
  | "PositionOutOfBounds"
  | "PositionObstrucuted";

/**
 * @type Service
 * @description Computes logic related to valid movements on the board
 */

export class MoveService {
  private computeDirectionality(
    start: Position,
    target: Position
  ): Directionality {
    const startX = start[0];
    const targetX = target[0];

    const startY = start[1];
    const targetY = target[1];

    if (startY === targetY && startX === targetX) {
      return "Stationary";
    }

    if (startY === targetY && startX !== targetX) {
      return "Sideways";
    }

    if (startX === targetX && startY !== targetY) {
      return "Vertically";
    }

    if (startY > targetY) {
      return "Upwards";
    }

    if (startY < targetY) {
      return "Downwards";
    }

    return "Upwards";
  }

  private isDirectionalityValid(
    piece: Piece,
    directionality: Directionality
  ): boolean {
    // TODO: When you see a lot of if statements, remember that they can be refactored to
    // polymorphism, usually -> Abstract Factory Pattern = one generic class + many
    if (directionality === "Stationary") return false;

    if (directionality === "Sideways") return false;

    if (directionality === "Vertically") return false;

    if (piece.getPieceType() === "king") return true;

    if (directionality === "Upwards") {
      if (piece.getColor() === "red") return true;
    }

    if (directionality === "Downwards") {
      if (piece.getColor() === "white") return true;
    }

    return false;
  }

  public canMovePiece(
    game: Game,
    piece: Piece,
    targetPosition: Position
  ): boolean {

    const directionality = this.computeDirectionality(
      piece.getPosition(),
      targetPosition
    );

    const isDirectionalityValid = this.isDirectionalityValid(
      piece,
      directionality
    );

    const isOneOfAcceptableMoves = !!game
      .getAvailableMovesForPiece(piece)
      .data?.find(
        (pos) =>
          pos.getTo()[0] === targetPosition[0] &&
          pos.getTo()[1] === targetPosition[1]
      );
    
    // Can't move a piece if directionality is invalid -> Invalid
    // Can't move a piece to a position outside of the bounds -> Invalid
    // Can't move a piece if there's another piece there -> Invalid
    // Can't move piece if there's a valid jump I have to make

    return isDirectionalityValid && isOneOfAcceptableMoves;
  }
}

// 2, 5
