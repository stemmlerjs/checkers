import { Board } from "../board/Board";
import { Piece, Position } from "../pieces/Piece";
import { Move, Movement } from "./GameCommands";
import { PieceDraggedEvent, PieceDroppedEvent } from "./GameEvents";
import { MoveService } from "./MoveService";
import { Turn } from "./Turn";

type MovePieceResult = 'Success' | 'InvalidPieceId' | 'PieceCaptured' | 'InvalidMovement'

type GetAvailableMovesResult = {
  type: 'Success' | 'InvalidPieceId' | 'PieceCaptured';
  data?: Movement[]
}

export class Game {
  private currentTurn: Turn;
  private board: Board;
  private moveService: MoveService = new MoveService();

  constructor (board: Board) {
    this.board = board;
    this.currentTurn = new Turn('red');
  }

  public getCurrentTurn (): Turn {
    return this.currentTurn;
  }

  public getAvailableMovesForPiece (pieceId: string): GetAvailableMovesResult {
    let moves: Movement[] = [];
    let pieces = this.board.getPieces();
    let piece: Piece;
    let maybePiece = pieces.findPieceById(pieceId);

    if (maybePiece.isFailure) {
      return { type: 'InvalidPieceId' }
    }

    piece = maybePiece.getValue(); 

    if (piece.isCaptured()) {
      return { type: 'PieceCaptured' }
    }

    piece
      .getDiagonals()
      .forEach((diagonal) => {
        const isSquareTaken = this.board.hasPieceAtSquare(diagonal[0], diagonal[1])
        const isEnemyPiece = isSquareTaken && this.board.getPieceAtSquare(diagonal[0], diagonal[1]).getValue().getColor() !== piece.getColor();
        const canJumpEnemyPiece = isEnemyPiece 

        if (canJumpEnemyPiece) {
          // If it has a piece AND the piece is an enemy piece AND there is space to 
          // jump it, then that's the only move we're allowed to make
          // moves = [new Jump(piece.getPosition(), )]
          // break;
        }

        moves.push(new Move(piece.getPosition(), diagonal));

      })
    
    return { type: 'Success', data: moves }
  }

  public movePiece (pieceId: string, targetPosition: Position): MovePieceResult {
    let board = this.board;
    let pieces = this.board.getPieces();
    let piece: Piece;
    let maybePiece = pieces.findPieceById(pieceId);

    if (maybePiece.isFailure) {
      return 'InvalidPieceId'
    }

    piece = maybePiece.getValue(); 

    if (piece.isCaptured()) {
      return 'PieceCaptured'
    }

    // First, determine if the player MUST jump a piece that has been presented
    // last turn. (Perhaps have a jump flag set at the end of the turn - set jump state). If the 
    // player MUST jump a piece, then, they don't have the option to move any other
    // pieces. They MUST be moving the piece that completes the jump.

    // If they're NOT jumping a piece, continue ahead with the standard move.
    
    // // Determine if movement is valid
    const canMove = this.moveService.canMovePiece(board, piece, targetPosition);

    if (!canMove) {
      return 'InvalidMovement';
    }

    // // Move piece
    // board.movePiece(piece, x, y);

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

  handlePieceDragged (e: PieceDraggedEvent) {

  }

  handlePieceDropped(e: PieceDroppedEvent) {
    
  }
}
