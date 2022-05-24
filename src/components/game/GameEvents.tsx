import { Piece } from "../board/Piece";
import { Position } from "../board/Position";

export interface GameEvent {
  name: GameEventName;
}

export type GameEventName = 
  'PieceDragged' |
  'PieceDropped' | 
  'PieceMoved' |
  'PieceJumped'

export class PieceDraggedEvent implements GameEvent {
  public name: GameEventName = 'PieceDragged';
  public piece: Piece;

  constructor (piece: Piece) {
    this.piece = piece;
  }
}

export class PieceDroppedEvent implements GameEvent {
  public name: GameEventName = 'PieceDropped';
  public piece: Piece;
  public dropPosition: Position;

  constructor (piece: Piece, dropPosition: Position) {
    this.piece = piece;
    this.dropPosition = dropPosition;
  }
}