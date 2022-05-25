

import { eventObserver } from "../../shared/infra/observer";
import { Board } from "./board/Board";
import { Pieces } from "./pieces/Pieces";

const pieces = Pieces.createWithInitialPositions();
const board = new Board (pieces, eventObserver);

export {
  board
}