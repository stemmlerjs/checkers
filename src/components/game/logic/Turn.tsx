import { PieceColor } from "../pieces/Piece";

export class Turn {
  private color: PieceColor;
  private turnNumber: number;

  constructor(color: PieceColor, turnNumber?: number) {
    this.color = color;
    this.turnNumber = turnNumber ? turnNumber : 1;
  }

  getColor(): PieceColor {
    return this.color;
  }

  getTurnNumber(): number {
    return this.turnNumber;
  }

  next(): Turn {
    return new Turn(
      this.color === "red" ? "white" : "red",
      this.turnNumber + 1
    );
  }
}
