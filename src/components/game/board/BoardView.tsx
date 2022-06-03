
import { observer } from "mobx-react-lite";
import { Board } from "./Board";
import "./BoardView.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SquareView } from "../square/SquareView";
import { PieceView } from "../pieces/PieceView";

export const BoardView = observer(({ board }: { board: Board }) => {
  let squares = board.getSquares();

  return (
    <DndProvider backend={HTML5Backend}>
      <section className="board">
        {squares.map((column, x) => (
          <div key={x} className="row">
            {column.map((square, y) => (
              <SquareView
                key={y}
                square={square}
                onPieceDropped={(s) => board.handlePieceDropped(s)}
              >
                {board.hasPieceAtSquare(x, y) && (
                  <PieceView
                    piece={board.getPieceAtSquare(x, y).getValue()}
                    onPieceDragged={(p) => board.handlePieceDragged(p)}
                  />
                )}
              </SquareView>
            ))}
          </div>
        ))}
      </section>
    </DndProvider>
  );
});
