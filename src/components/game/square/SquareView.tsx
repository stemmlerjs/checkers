import { useState } from "react";
import { useDrop } from "react-dnd";
import { Piece } from "../pieces/Piece";
import { Square } from "./Square";

type SquareViewProps = {
  square: Square;
  onPieceDropped: (square: Square) => void;
  children?: any;
};

/**
 * @type View
 */

export const SquareView = ({
  square,
  onPieceDropped,
  children,
}: SquareViewProps) => {
  const x = square.getXPosition();
  const y = square.getYPosition();

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: Piece.PIECE_TYPES,
      hover: (props, monitor) => {

      },
      drop: () => {
        console.log("dropped", square);
        onPieceDropped(square);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [x, y]
  );

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
      }}
      className={`square color-${square.getColor()} ${
        square.isDroppable() ? "droppable" : ""
      }`}
    >
      {children ? children : ""}
    </div>
  );
};
