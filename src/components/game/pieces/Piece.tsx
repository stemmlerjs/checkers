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
}
