import { GameService } from "./GameService"

describe('game', () => {

  let game: GameService;

  beforeEach(() => {
    game = new GameService();
  })

  it('knows that red goes first', () => {
    let turn = game.getCurrentTurn();
    expect(turn.getColor()).toEqual('red');
  });

  it('knows that white goes next', () => {
    game.movePiece('R1', 1, 4);
  });
})