
import { Pieces } from "../pieces/Pieces";
import { GameService } from "./GameService"
import { Turn } from "./Turn";

describe('game', () => {

  let game: GameService;
  let pieces: Pieces;
  let turn: Turn;

  beforeEach(() => {
    pieces = Pieces.createWithInitialPositions();
    game = new GameService(pieces);
  })

  it('knows that red goes first', () => {
    turn = game.getCurrentTurn();
    expect(turn.getColor()).toEqual('red');
    expect(turn.getTurnNumber()).toEqual(1);
  });

  it('knows that white goes after red', () => {
    game.movePiece('R1', 1, 4);

    turn = game.getCurrentTurn();

    expect(turn.getColor()).toEqual('white');
    expect(turn.getTurnNumber()).toEqual(2);
  });

  it('knows that we can only move a piece vertically', () => {

  });

  it('knows that we cant move a piece off the grid', () => {

  });

  it('knows that we cannot move a piece horizontal or vertically', () => {

  });

  it ('knows that we cant move a piece on top of another piece', () => {

  })

  it ('knows that white pieces move downward and cannot move upward', () => {

  })

  it ('knows that red pieces move upward and cannot move downward', () => {

  });

  it ('knows when the game is over', () => {

  })

  it('knows that a red|white piece which advances to the end gets promoted', () => {

  })

  it('knows that a jumped piece is removed from the board and decrements the count', () => {

  })

  it('knows that you must jump a piece if at the start of the next move, it is presented', () => {

  })

  it('knows that you must multi jump if presented', () => {

  })

  it('knows that you can multi jump off of the walls', () => {

  })

  it('can restart the game', () => {

  })

})