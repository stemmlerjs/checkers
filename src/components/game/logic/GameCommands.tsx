
import { Piece, Position } from "../pieces/Piece";

export abstract class Movement {
  private from: Position;
  private to: Position;

  constructor (from: Position, to: Position) {
    this.from = from;
    this.to = to
  }

  getFrom (): Position {
    return this.from;
  }

  getTo(): Position {
    return this.to;
  }
}

export class Move extends Movement {
  
}

export class Jump extends Movement {
  private capturing: Piece;
  constructor (from: Position, to: Position, capturing: Piece) {
    super(from, to);
    this.capturing = capturing;
  }

  getCapturingPiece (): Piece {
    return this.capturing;
  }
}
