import { Board, Keyboard, WindowEnd } from '../../components';
import { useState } from 'react';

export const Game = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const modifyEnd = (isEnd: boolean) => {
    setIsEnd(isEnd);
  }

  const modifyWin = (isWin: boolean) => {
    setIsWin(isWin);
  }

  if (isEnd) {
    return (
      <WindowEnd isWin={isWin} />
    )
  }

  return (
    <>
      <Board />
      <Keyboard modifyIsEnd={modifyEnd} modifyIsWin={modifyWin} />
    </>
  )
}