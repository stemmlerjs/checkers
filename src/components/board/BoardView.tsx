
import { observer } from "mobx-react";
import { Board } from "./Board";
import "./BoardView.css";
import { PieceView } from "./PieceView";
import { SquareView } from "./SquareView";

export const BoardView = observer(({ board }: { board: Board }) => {
  let squares = board.getSquares();

  return (
    <section className="board">
      {squares.map((column, x) => (
        <div className="row">
          {column.map((square, y) => (
            <SquareView square={square}>
              {board.hasPieceAtSquare(x, y) && (
                <PieceView piece={board.getPieceAtSquare(x, y).getValue()} />
              )}
            </SquareView>
          ))}
        </div>
      ))}
    </section>
  );
});
