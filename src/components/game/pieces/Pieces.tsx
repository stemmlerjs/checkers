
import { Result } from "../../../shared/logic/Result";
import { Square } from "../square/Square";
import { Piece } from "./Piece";

type Table = { [index: string]: Piece | undefined };

/**
 * @type Structurer
 */

export class Pieces {
  private table: Table = {};

  private constructor (table: Table) {
    this.table = table;
  }

  public static createWithInitialPositions (): Pieces {
    let table: Table = {};

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        
        const isLightPieceRow = j === 0 || j <= 2;
        const isDarkPieceRow = j >= 5;
        const isDarkSquare = Square.getSquareColor(i, j) === 'black';

        const shouldPlacePiece = (isLightPieceRow || isDarkPieceRow) && isDarkSquare;
        

        if (!shouldPlacePiece) {
          table[`${i}:${j}`] = undefined;
        } else {
          table[`${i}:${j}`] = new Piece({
            color: isLightPieceRow ? 'white' : 'red',
            position: [i, j],
            type: 'initial'
          });
        }
      }
    }

    return new Pieces(table)
  }

  public hasPieceAtPosition (x: number, y: number): boolean {
    return this.table[`${x}:${y}`] !== undefined;
  }
  
  public getPieceAtPosition (x: number, y: number): Result<Piece> {
    if (!this.hasPieceAtPosition(x, y)) {
      return Result.fail<Piece>('No piece at position');
    }

    return Result.ok<Piece>(this.table[`${x}:${y}`])
  }
}