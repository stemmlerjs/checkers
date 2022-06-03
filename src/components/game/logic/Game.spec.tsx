
import { EventObserver } from "../../../shared/infra/observer/EventObserver";
import { Board } from "../board/Board";
import { Pieces } from "../pieces/Pieces";
import { Game } from "./Game";
import { Turn } from "./Turn";

describe('initial game behavior', () => {

  let game: Game;
  let pieces: Pieces;
  let turn: Turn;
  let board: Board;

  beforeEach(() => {
    pieces = Pieces.createWithInitialPositions();
    board = new Board(pieces, new EventObserver());
    game = new Game(board);
  });

  describe('turns', () => {
    it('knows that red goes first', () => {
      turn = game.getCurrentTurn();
      expect(turn.getColor()).toEqual('red');
      expect(turn.getTurnNumber()).toEqual(1);
    });
  
    it('knows that white goes after red', () => {
      game.movePiece('R1', [1, 4]);
  
      turn = game.getCurrentTurn();
  
      expect(turn.getColor()).toEqual('white');
      expect(turn.getTurnNumber()).toEqual(2);
    });
  });

  describe('directionality', () => {
    it('knows that we cannot move a piece horizontally', () => {
      let movePieceResult = game.movePiece('R1', [1, 5]);
      expect(movePieceResult).toEqual('InvalidMovement');
    });

    it('knows that we cannot move a piece vertically', () => {
      let movePieceResult = game.movePiece('R1', [0, 4]);
      expect(movePieceResult).toEqual('InvalidMovement');
    });

    it ('knows that white pieces can move downward', () => {
      let movePieceResult = game.movePiece('W3', [0, 3]);
      expect(movePieceResult).toEqual('Success');
    })
  
    it ('knows that red pieces can move upward', () => {
      let movePieceResult = game.movePiece('R1', [1, 4]);
      expect(movePieceResult).toEqual('Success');
    });
  })

  describe('moves', () => {
    it ('knows an initial front corner piece has one move', () => {
      let response = game.getAvailableMovesForPiece('R1');
      expect(response.type).toEqual('Success');
      expect(response.data?.length).toEqual(1);
      expect(response.data?.[0].getTo()).toEqual([1,4])
    })

    it ('knows an initial front middle piece has two moves', () => {
      let response = game.getAvailableMovesForPiece('R4');
      let moves = response.data;
  
      expect(response.type).toEqual('Success');
      expect(moves?.length).toEqual(2);
      expect(moves?.[0].getTo()).toEqual([1,4]);
      expect(moves?.[1].getTo()).toEqual([3,4]);
    });

    it ('knows that we cant move a piece on top of another piece', () => {
      let response = game.getAvailableMovesForPiece('W7');
      let moves = response.data;
  
      expect(response.type).toEqual('Success');
      expect(moves?.length).toEqual(0);
    });
  
    it('knows that we cant move a piece off the grid', () => {
      let response = game.getAvailableMovesForPiece('R12');
      let moves = response.data;
  
      expect(response.type).toEqual('Success');
      expect(moves?.length).toEqual(0);
  
      response = game.getAvailableMovesForPiece('R1');
      moves = response.data;
  
      expect(response.type).toEqual('Success');
      expect(moves?.length).toEqual(1);
    });
  })
});

describe('jumping pieces', () => {

  // Relies on game state for testing
  it('knows that you must multi jump if presented', () => {

  });

  // Relies on a game state for testing
  it('knows that a jumped piece is removed from the board and decrements the count', () => {

  });

  // Relies on game state for testing
  it('knows that you can multi jump off of the walls', () => {

  });
  
});


describe('promoting pieces', () => {

  // Relies on a game state for testing
  it('knows that a piece which advances to the end gets promoted', () => {

  });

  it ('knows that promoted pieces can move upwards and downwards', () => {

  })

});


describe('a completed game', () => {

  it ('knows when the game is over', () => {

  });

  it('does not allow players to make any further moves', () => {

  });

  it('can be restarted', () => {

  });

})