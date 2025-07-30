import './Board.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

export const Board = () => {
  const wordLength = useSelector((state: RootState) => state.game.wordLength);

  const board: string[][] = Array.from({ length: 6 }, () =>
    Array.from({ length: wordLength }, () => '')
  );

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div className="cell" key={cellIndex} id={`cell-${rowIndex}-${cellIndex}`}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}