
import { GameEventCoordinator } from "../game/GameEventCoordinator";
import { PieceDraggedEvent } from "../game/GameEvents";
import { Position } from "./Position";

type PieceColor = 'light' | 'dark';
type PieceType = 'initial' | 'king';

type PieceProps = {
  color: PieceColor;
  position: Position;
  type: PieceType;
}

export class Piece {
  private props: PieceProps;
  private coordinator: GameEventCoordinator;

  public static PIECE_TYPES = ['initial', 'king']

  constructor (props: PieceProps, coordinator: GameEventCoordinator) {
    this.props = props;
    this.coordinator = coordinator;
  }

  getColor () : PieceColor {
    return this.props.color;
  }

  getPieceType (): PieceType {
    return this.props.type;
  }

  handleDrag () {
    this.coordinator.emit(new PieceDraggedEvent(this));
  }

}