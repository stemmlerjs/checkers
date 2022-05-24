
import { Piece } from "./Piece";
import darkPiece from './assets/dark-piece.svg'
import lightPiece from './assets/light-piece.svg'

export const PieceView = ({ piece }: { piece: Piece}) => {
  let pieceColor = piece.getColor();
  let pieceIcon = pieceColor === 'light' ? lightPiece : darkPiece;

  return (
    <div className="piece">
      <img src={pieceIcon}/>
    </div>
  )
}