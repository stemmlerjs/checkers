
import { Piece } from "../../../components/game/pieces/Piece";
import { Square } from "../../../components/game/square/Square";

export interface GameEvent {
  name: GameEventName;
}

export type GameEventName = 
  'PieceDragged' |
  'PieceDropped' | 
  'PieceMoved' |
  'PieceJumped' |
  'PiecePromoted'

export class PieceDraggedEvent implements GameEvent {
  public name: GameEventName = 'PieceDragged';
  public piece: Piece;

  constructor (piece: Piece) {
    this.piece = piece;
  }
}

export class PieceDroppedEvent implements GameEvent {
  public name: GameEventName = 'PieceDropped';
  public square: Square;

  constructor (square: Square) {
    this.square = square;
  }
}