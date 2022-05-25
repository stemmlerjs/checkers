import { EventObserver } from "../../shared/infra/observer/EventObserver";
import {
  GameEvent,
  PieceDraggedEvent,
  PieceDroppedEvent,
} from "../game/logic/GameEvents";
import { makeAutoObservable, makeObservable, observable } from "mobx";

export class Console {
  private messages: string[];

  constructor(observer: EventObserver) {
    makeAutoObservable(this);
    this.messages = ["Welcome! Red goes first."];
    this.registerToEvents(observer);
  }

  private registerToEvents(observer: EventObserver): void {
    observer.observeEvent(
      "PieceDropped",
      this.handlePieceDropped.bind(this)
    );
    observer.observeEvent(
      "PieceDragged",
      this.handlePieceDragged.bind(this)
    );
  }

  private handlePieceDropped(event: GameEvent) {
    let e = event as PieceDroppedEvent;
    this.appendMessage(
      `${e.piece.getColor()} piece was dropped at ${e.square.getXPosition()}, ${e.square.getYPosition()}`
    );
  }

  private handlePieceDragged(event: GameEvent) {
    let e = event as PieceDraggedEvent;
    this.appendMessage(`${e.piece.getColor()} is being dragged`);
  }

  private appendMessage(message: string): void {
    this.messages.push(message);
    console.log(this.messages);
  }

  public getMessages() {
    return this.messages;
  }
}
