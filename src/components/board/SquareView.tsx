
import { useDrop } from "react-dnd";
import { Piece } from "./Piece";
import { Square } from "./Square";

export const SquareView = ({
  square,
  children,
}: {
  square: Square;
  children?: any;
}) => {
  const x = square.getXPosition();
  const y = square.getYPosition();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: Piece.PIECE_TYPES,
    drop: () => {
      // Hook up to event listener
      console.log('time to drop at ', x, y)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [x, y])

  return (
    <div 
      ref={drop}
      style={{
        position: 'relative'
      }}
      className={`square color-${square.getColor()}`}>
      {children ? children : ""}
    </div>
  );
  
}
