import { GameEventCoordinator } from "../game/GameEventCoordinator";
import { GameEvent, PieceDraggedEvent, PieceDroppedEvent } from "../game/GameEvents";
import { makeAutoObservable, makeObservable, observable } from "mobx";

export class Console {
  private messages: string[];

  constructor (coordinator: GameEventCoordinator) {
    makeAutoObservable(this);
    this.messages = ['Welcome! Red goes first.']
    this.registerToEvents (coordinator);
  }

  private registerToEvents (coordinator: GameEventCoordinator): void {
    coordinator.observeEvent('PieceDropped', this.handlePieceDropped.bind(this));
    coordinator.observeEvent('PieceDragged', this.handlePieceDragged.bind(this));
  }

  private handlePieceDropped (event: GameEvent) {
    let e = event as PieceDroppedEvent;
    this.appendMessage(`${e.piece.getColor()} piece was dropped at ${e.dropPosition}`);
  }

  private handlePieceDragged (event: GameEvent) {
    let e = event as PieceDraggedEvent;
    this.appendMessage(`${e.piece.getColor()} is being dragged`);
  }

  private appendMessage (message: string): void {
    this.messages.push(message);
    console.log(this.messages)
  }

  public getMessages () {
    return this.messages;
  }
  
}