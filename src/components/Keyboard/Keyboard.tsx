import { arrayKeyboard, wordsAcepted } from '../../constants'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import { setCurrentAttempt, setCurrentLetter, setWordAttempt } from '../../store/gameSlice';
import './Keyboard.css';

let updateWordAttempt: string = ''

export const Keyboard = ({ modifyIsEnd, modifyIsWin }: { modifyIsEnd: (isEnd: boolean) => void, modifyIsWin: (isWin: boolean) => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentAttempt, currentLetter, currentWord, wordAttempt } = useSelector((state: RootState) => state.game);

  const handleClickKey = (key: string) => {
    if (key === 'Enter') {
      console.log(wordAttempt);
      console.log(wordsAcepted.includes(wordAttempt));
      if (!wordsAcepted.includes(wordAttempt)) {
        return;
      }
      if (currentLetter !== currentWord.length) return;
      if (currentAttempt === 5) modifyIsEnd(true);

      dispatch(setCurrentAttempt(currentAttempt + 1));
      dispatch(setCurrentLetter(0));

      currentWord.split('').forEach((letter, index) => {
        const currentCell: HTMLElement | null = document.querySelector(`#cell-${currentAttempt}-${index}`)
        const currentKey: HTMLButtonElement | null = document.querySelector(`#${currentCell?.textContent}`)

        if (currentCell && currentCell.textContent) {
          if (currentCell.textContent === letter) {
            currentCell.classList.add('cell--correct');
          } else if (currentWord.includes(currentCell.textContent)) {
            currentCell.classList.add('cell--present');
          } else {
            currentCell.classList.add('cell--incorrect');
            if (currentKey) {
              currentKey.classList.add('cell-keyboard--incorrect');
              currentKey.disabled = true;
            }
          }
        }
      })

      if (wordAttempt === currentWord) {
        modifyIsWin(true);
        modifyIsEnd(true);
      }

      updateWordAttempt = '';
      dispatch(setWordAttempt(updateWordAttempt));
    } else if (key === '⌫') {
      if (!currentLetter) return;
      const currentCell = document.querySelector(`#cell-${currentAttempt}-${currentLetter - 1}`)
      updateWordAttempt = wordAttempt.slice(0, -1);
      if (currentCell) currentCell.textContent = '';
      dispatch(setCurrentLetter(currentLetter - 1));
      dispatch(setWordAttempt(updateWordAttempt));
    } else {
      if (currentLetter === currentWord.length) return;
      const currentCell = document.querySelector(`#cell-${currentAttempt}-${currentLetter}`)
      updateWordAttempt += key;
      if (currentCell) currentCell.textContent = key;
      dispatch(setCurrentLetter(currentLetter + 1));
      dispatch(setWordAttempt(updateWordAttempt));
    }
  }

  return (
    <div className='keyboard'>
      {
        arrayKeyboard.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="keyboard-row">
            {
              row.map((key) => (
                <button key={key} className={`cell-keyboard ${key === 'Enter' || key === '⌫' ? 'cell-keyboard--special' : ''}`} onClick={() => handleClickKey(key)} id={key}>
                  {key}
                </button>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}