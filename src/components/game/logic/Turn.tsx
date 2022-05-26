
import { PieceColor } from "../pieces/Piece";

export class Turn {
  private color: PieceColor;

  constructor (color: PieceColor) {
    this.color = color;
  }

  getColor (): PieceColor {
    return this.color;
  }
}