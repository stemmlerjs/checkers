
import { Result } from "../../../shared/logic/Result";
import { Board } from "./Board"
import { Pieces } from "../pieces/Pieces";
import { Square } from "../square/Square";
import { EventObserver } from "../../../shared/infra/observer/EventObserver";

describe('board', () => {
  
  let board: Board;
  let squares: Square[][];
  let maybeSquare: Result<Square>;
  let eventObserver = new EventObserver();

  beforeEach(() => {
    board = new Board(new Pieces(), eventObserver);
    squares = board.getSquares();
  })

  it ('is a 64 square board', () => {
    expect(squares.length).toEqual(8);
    expect(squares[0].length).toEqual(8);
    expect(squares[7].length).toEqual(8);
  });

  it ('can retrieve a square by x,y position', () => {
    maybeSquare = board.getSquareByPosition(0, 0);
    expect(maybeSquare.getValue().getIndex()).toEqual(0);
  });

  it ('colors white and black squares properly', () => {
    maybeSquare = board.getSquareByPosition(0, 0);
    expect(maybeSquare.getValue().getColor()).toEqual('red');

    maybeSquare = board.getSquareByPosition(2, 3);
    expect(maybeSquare.getValue().getColor()).toEqual('black');
  });

  it ('places the white pieces on the correct squares', () => {
    let maybePiece = board.getPieceAtSquare(1, 0);
    expect(maybePiece.getValue().getColor()).toEqual('white');
  });

  it ('places the dark pieces on the correct squares', () => {
    let maybePiece = board.getPieceAtSquare(0, 5);
    expect(maybePiece.getValue().getColor()).toEqual('red');
  })

  it ('safely notifies when a piece was not found at a position', () => {
    let maybePiece = board.getPieceAtSquare(0, 0);
    expect(maybePiece.isFailure).toEqual(true);
  });

})