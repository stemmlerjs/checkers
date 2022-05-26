
import { Piece } from "./Piece";
import darkPiece from './assets/dark-piece.svg'
import lightPiece from './assets/light-piece.svg'
import { useDrag } from "react-dnd";
import { useEffect } from "react";

type PieceViewProps = { piece: Piece, onPieceDragged: (piece: Piece) => void }

/**
 * @type View
 */

export const PieceView = ({ piece, onPieceDragged }: PieceViewProps ) => {
  let pieceColor = piece.getColor();
  let pieceIcon = pieceColor === 'white' ? lightPiece : darkPiece;

  const [{isDragging}, drag] = useDrag(() => ({
    type: piece.getPieceType(),
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    if (isDragging) {
      onPieceDragged(piece);
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