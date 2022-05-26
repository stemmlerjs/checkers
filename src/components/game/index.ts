

import { eventObserver } from "../../shared/infra/observer";
import { Board } from "./board/Board";
import { GameService } from "./logic/GameService";
import { Pieces } from "./pieces/Pieces";

const pieces = Pieces.createWithInitialPositions();
const board = new Board (pieces, eventObserver);

console.log(pieces);

// Start game
new GameService(pieces);

export {
  board
}

