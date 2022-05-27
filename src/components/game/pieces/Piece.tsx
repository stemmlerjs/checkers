
export type Position = [number, number];
export type PieceColor = "white" | "red";
export type PieceType = "initial" | "king";

type PieceProps = {
  index: number;
  color: PieceColor;
  position: Position;
  type: PieceType;
  isCaptured?: boolean;
};

/**
 * @type Information holder
 */

export class Piece {
  private props: PieceProps;

  public static PIECE_TYPES = ["initial", "king"];

  constructor(props: PieceProps) {
    this.props = props;
    this.props.isCaptured = this.props.isCaptured
      ? this.props.isCaptured
      : false;
  }

  public setCaptured (): void {
    this.props.isCaptured = true;
  }

  isCaptured(): boolean {
    return this.props.isCaptured as boolean;
  }

  getColor(): PieceColor {
    return this.props.color;
  }

  getPieceType(): PieceType {
    return this.props.type;
  }

  getId(): string {
    let id =
      this.getColor() === "red"
        ? "R" + this.props.index
        : "W" + this.props.index;
    return id;
  }

  getPosition (): Position {
    return this.props.position;
  }

  getDiagonals (): Position[] {
    const initial = this.getPosition();
    const x = initial[0];
    const y = initial[1];

    let diagonals: Position[] = [];
    
    if (this.getColor() === 'red') {
      diagonals = [
        [x - 1, y - 1],
        [x + 1, y - 1]
      ]
    }

    if (this.getColor() === 'white') {
      diagonals = [
        [x - 1, y + 1],
        [x + 1, y + 1]
      ]
    }

    if (this.getPieceType() === 'king') {
      diagonals = [
        [x - 1, y + 1],
        [x + 1, y + 1],
        [x - 1, y - 1],
        [x + 1, y - 1]
      ]
    }

    return diagonals.filter((position) => {
      return position[0] >= 0 && position[0] < 8 && position[1] >= 0 && position[1] < 8
    })
  }
  
}
