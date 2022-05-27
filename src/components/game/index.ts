

import { eventObserver } from "../../shared/infra/observer";
import { Board } from "./board/Board";
import { GameController } from "./logic/GameController";
import { Pieces } from "./pieces/Pieces";

const pieces = Pieces.createWithInitialPositions();
const board = new Board (pieces, eventObserver);

// Start game
new GameController(board);

export {
  board
}

