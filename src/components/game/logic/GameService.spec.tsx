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

  it('knows that white goes next', () => {
    game.movePiece('R1', 1, 4);
    turn = game.getCurrentTurn();

    expect(turn.getColor()).toEqual('white');
    expect(turn.getTurnNumber()).toEqual(2);
  });
  
})