import { Result } from "../../../shared/logic/Result";
import { Square } from "../square/Square";
import { Piece } from "./Piece";

type Table = { [index: string]: Piece | undefined | string };

/**
 * @type Structurer
 */

export class Pieces {
  private table: Table = {};

  private constructor(table: Table) {
    this.table = table;
  }

  public static createWithInitialPositions(): Pieces {
    let table: Table = {};
    let redPieceIndex = 1;
    let whitePieceIndex = 1;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const isWhitePieceRow = j === 0 || j <= 2;
        const isDarkPieceRow = j >= 5;
        const isDarkSquare = Square.getSquareColor(i, j) === "black";

        const shouldPlacePiece =
          (isWhitePieceRow || isDarkPieceRow) && isDarkSquare;

        let position = `${i}:${j}`;

        if (!shouldPlacePiece) {
          table[position] = undefined;
        } else {
          let piece = new Piece({
            index: isWhitePieceRow ? whitePieceIndex : redPieceIndex,
            color: isWhitePieceRow ? "white" : "red",
            position: [i, j],
            type: "initial",
          });

          table[position] = piece;
          table[piece.getId()] = position;

          if (isWhitePieceRow) whitePieceIndex++;
          if (isDarkPieceRow) redPieceIndex++
        }
      }
    }

    return new Pieces(table);
  }

  public hasPieceAtPosition(x: number, y: number): boolean {
    return this.table[`${x}:${y}`] !== undefined;
  }

  public getPieceAtPosition(x: number, y: number): Result<Piece> {
    if (!this.hasPieceAtPosition(x, y)) {
      return Result.fail<Piece>("No piece at position");
    }

    return Result.ok<Piece>(this.table[`${x}:${y}`] as Piece);
  }

  public findPieceById(pieceId: string): Result<Piece> {
    const maybePiecePosition = this.table[pieceId];

    if (!maybePiecePosition) {
      return Result.fail<Piece>(`Invalid piece id ${pieceId}`);
    }

    const piece = this.table[maybePiecePosition as string] as Piece;

    return Result.ok<Piece>(piece); 
  }
}
