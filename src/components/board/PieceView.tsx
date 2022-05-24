
import { Piece } from "./Piece";
import darkPiece from './assets/dark-piece.svg'
import lightPiece from './assets/light-piece.svg'
import { useDrag } from "react-dnd";
import { useEffect } from "react";

export const PieceView = ({ piece }: { piece: Piece }) => {
  let pieceColor = piece.getColor();
  let pieceIcon = pieceColor === 'light' ? lightPiece : darkPiece;

  const [{isDragging}, drag] = useDrag(() => ({
    type: piece.getPieceType(),
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    if (isDragging) {
      piece.handleDrag();
    }
  }, [isDragging])

  return (
    <div 
      className="piece"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}>
      <img src={pieceIcon}/>
    </div>
  )
}