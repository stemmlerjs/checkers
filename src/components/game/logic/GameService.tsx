
import { board } from "..";
import { Piece } from "../pieces/Piece";
import { Pieces } from "../pieces/Pieces";
import { Turn } from "./Turn";

type MovePieceResult = 'Success' | 'InvalidPieceId' | 'PieceCaptured' | 'InvalidMovement'

/**
 * @type Controller, Service Provider
 * @description Receives drag and drop events and 
 * pushes the game state forward from it.
 */

export class GameService {
  
  private currentTurn: Turn;
  private pieces: Pieces;

  constructor (pieces: Pieces) {
    this.pieces = pieces;
    this.currentTurn = new Turn('red');
  }

  public getCurrentTurn (): Turn {
    return this.currentTurn;
  }

  public movePiece (pieceId: string, x: number, y: number): MovePieceResult {
    let piece: Piece;
    let maybePiece = this.pieces.findPieceById(pieceId);

    if (maybePiece.isFailure) {
      return 'InvalidPieceId'
    }

    piece = maybePiece.getValue(); 

    if (piece.isCaptured()) {
      return 'PieceCaptured'
    }
    
    // // Determine if movement is valid
    // const canMove = piece.canMoveTo(x, y) && !board.hasPieceAtSquare(x, y);

    // // Move piece
    // if (canMove) {
    //   board.movePiece(piece, x, y);
    // }

    // New turn
    this.completeTurn();

    // If valid, return OK result
    return 'Success'
  }

  private completeTurn (): void {
    this.currentTurn = this.currentTurn.next();
  }

  public isGameOver (): boolean {
    // TODO: 
    const hasRedPieces = true;
    const hasBlackPieces = true;

    // @ts-ignore
    return hasRedPieces === false || hasBlackPieces === false;
  }
}