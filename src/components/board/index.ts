
import { Board } from "./Board";
import { Pieces } from "./Pieces";

const pieces = Pieces.createWithInitialPositions();
const board = new Board (pieces);

export {
  board
}