import { arrayNumberOfLetters } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { setWordLength, setCurrentWord, setCurrentAttempt, setCurrentLetter, setWordAttempt } from '../../store/gameSlice';
import type { RootState, AppDispatch } from '../../store';
import { fetchWord } from '../../utils';
import './WordLengthSelector.css'

export const WordLengthSelector = () => {
  const dispatch = useDispatch<AppDispatch>();

  const wordLength = useSelector((state: RootState) => state.game.wordLength);

  const handleSetLength = async (number: number) => {
    dispatch(setWordLength(number));
    localStorage.setItem('wordLength', number.toString());
    dispatch(setCurrentWord(await fetchWord()));
    dispatch(setCurrentAttempt(0));
    dispatch(setCurrentLetter(0));
    dispatch(setWordAttempt(''));
  }

  return (
    <div className='word-length-selector'>
      <h2 className='word-length-selector-title'>Número de letras</h2>
      <div className='word-length-selector-buttons'>
        {
          arrayNumberOfLetters.map((number) => (
            <button key={number} className={`word-length-selector-button ${number === wordLength ? 'word-length-selector-button--selected' : ''}`} onClick={() => {
              handleSetLength(number);
            }}>{number}</button>
          ))
        }
      </div>
    </div>
  )
}