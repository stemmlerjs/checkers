
type Position = [number, number]
type PieceColor = "light" | "dark";
type PieceType = "initial" | "king";

type PieceProps = {
  color: PieceColor;
  position: Position;
  type: PieceType;
};

/**
 * @type Information holder
 */

export class Piece {
  private props: PieceProps;

  public static PIECE_TYPES = ["initial", "king"];

  constructor(props: PieceProps) {
    this.props = props;
  }

  getColor(): PieceColor {
    return this.props.color;
  }

  getPieceType(): PieceType {
    return this.props.type;
  }

}
