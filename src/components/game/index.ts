

import { eventObserver } from "../../shared/infra/observer";
import { Board } from "./board/Board";
import { Game } from "./logic/Game";
import { GameController } from "./logic/GameController";
import { Pieces } from "./pieces/Pieces";

const pieces = new Pieces();
const board = new Board (pieces, eventObserver);
const game = new Game(board);

// Start game
new GameController(game, eventObserver);

export {
  board
}
