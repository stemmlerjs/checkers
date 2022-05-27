
import { EventObserver } from "../../../shared/infra/observer/EventObserver";
import { Game } from "./Game";
import { GameEvent, PieceDraggedEvent, PieceDroppedEvent } from "./GameEvents";

/**
 * @type Controller
 * @description Receives drag and drop events and 
 * pushes the game state forward from it.
 */

export class GameController {
  
  private game: Game;
  private eventObsever: EventObserver;

  constructor (game: Game, eventObsever: EventObserver) {
    this.game = game;
    this.eventObsever = eventObsever;
    this.setupSubscriptions();
  }

  private setupSubscriptions () {
    this.eventObsever.observeEvent('PieceDragged', this.onPieceDragged.bind(this));
    this.eventObsever.observeEvent('PieceDropped', this.onPieceDropped.bind(this));
  }

  private onPieceDragged (event: GameEvent) {
    this.game.handlePieceDragged(event as PieceDraggedEvent);
  }

  private onPieceDropped (event: GameEvent) {
    this.game.handlePieceDropped(event as PieceDroppedEvent)
  } 
}