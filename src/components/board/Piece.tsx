
type PieceColor = 'light' | 'dark';

type PieceType = 'initial' | 'king';

type PieceProps = {
  color: PieceColor;
  position: [number, number];
  type: PieceType;
}

export class Piece {
  private props: PieceProps;

  constructor (props: PieceProps) {
    this.props = props;
  }

  getColor () : PieceColor {
    return this.props.color;
  }

  getPieceType (): PieceType {
    return this.props.type;
  }

}