import { GameEvent, GameEventName } from "./GameEvents";

type Observer = (event: GameEvent) => void

export class GameEventCoordinator {
  private observers: { [eventName: string]: Observer[] };

  constructor () {
    this.observers = {};
  }

  public observeEvent (eventName: GameEventName, observer: Observer) {
    if (!this.observers.hasOwnProperty(eventName)) {
      this.observers[eventName] = [];
    }

    this.observers[eventName].push(observer);
  }

  public emit (event: GameEvent): void {
    const observers = this.observers[event.name];
    if (observers === undefined) return;

    for (let observer of observers) {
      observer(event);
    }
  }
}
