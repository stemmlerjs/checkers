
import { makeAutoObservable } from "mobx";
import { EventObserver } from "../../../shared/infra/observer/EventObserver";
import { Result } from "../../../shared/logic/Result";
import { PieceDraggedEvent, PieceDroppedEvent } from "../logic/GameEvents";
import { Piece } from "../pieces/Piece";
import { Pieces } from "../pieces/Pieces";
import { Square } from "../square/Square";

/**
 * @type Controller
 * @pattern Facade
 */

export class Board {
  private squares: Square[][];
  private pieces: Pieces;
  private observer: EventObserver;

  constructor(pieces: Pieces, observer: EventObserver) {
    this.squares = this.setupSquares();
    this.pieces = pieces;
    this.observer = observer;

    makeAutoObservable(this);
  }

  private setupSquares(): Square[][] {
    let index = 0;

    let squares: Square[][] = [[]];

    for (let i = 0; i < 8; i++) {
      squares[i] = [];

      for (var j: number = 0; j < 8; j++) {
        squares[i][j] = new Square(i, j, index);
        index++;
      }
    }

    return squares;
  }

  public getSquareByPosition (x: number, y: number): Result<Square> {
    const outOfBounds = x < 0 || x > this.squares.length 
      || y < 0 || y > this.squares[0].length;
    
    if (outOfBounds) {
      return Result.fail<Square>('Out of bounds');
    }
    
    return Result.ok<Square>(this.squares[x][y]);
  }

  public getSquares (): Square[][] {
    return this.squares;
  }

  public printBoard (): void {
    for (let i = 0; i < this.squares.length; i++) {
      for (let j = 0; j < this.squares[i].length; j++) {
        console.log(i, j, this.squares[i][j])
      }
    }
  }

  public getPieces (): Pieces {
    return this.pieces;
  }

  public hasPieceAtSquare (x: number, y: number): boolean {
    // Note: This is pretty much just passing params.
    return this.pieces.hasPieceAtPosition(x, y);
  }

  public getPieceAtSquare (x: number, y: number): Result<Piece> {
    return this.pieces.getPieceAtPosition(x, y);
  }

  public handlePieceDragged (piece: Piece) {
    this.observer.emit(new PieceDraggedEvent(piece));
  }

  public handlePieceDropped (square: Square) {
    this.observer.emit(new PieceDroppedEvent(square));
  }
}
