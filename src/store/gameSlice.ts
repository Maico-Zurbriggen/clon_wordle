import { createSlice } from '@reduxjs/toolkit';
import { fetchWord } from '../utils';
import type { PayloadAction } from '@reduxjs/toolkit';

/*
  En este archivo creamos el slice para el juego, es una pieza de estado que va a manejar ciertas características del juego,
  como la longitud de la palabra a adivinar, el número de intentos, etc.
  Define valores iniciales para el estado del juego y los reducers para modificar el estado del juego.
*/

interface GameState {
  wordLength: number;
  currentAttempt: number;
  currentLetter: number;
  currentWord: string;
  wordAttempt: string;
}

const initialState: GameState = {
  wordLength: Number(localStorage.getItem('wordLength')) || 5,
  currentAttempt: 0,
  currentLetter: 0,
  currentWord: await fetchWord(),
  wordAttempt: ''
}

export const gameSlice = createSlice({ //Creamos el slice, con su nombre, estado inicial y sus reducers.
  name: 'game',
  initialState,
  reducers: {
    setWordLength: (state, action: PayloadAction<number> /**Utilizamos PayloadAction para indicar que la acción recibe un payload de tipo number */) => {
      state.wordLength = action.payload;
    },
    setCurrentAttempt: (state, action: PayloadAction<number>) => {
      state.currentAttempt = action.payload;
    },
    setCurrentLetter: (state, action: PayloadAction<number>) => {
      state.currentLetter = action.payload;
    },
    setCurrentWord: (state, action: PayloadAction<string>) => {
      state.currentWord = action.payload;
    },
    setWordAttempt: (state, action: PayloadAction<string>) => {
      state.wordAttempt = action.payload;
    }
  },
});

export const { setWordLength, setCurrentAttempt, setCurrentLetter, setCurrentWord, setWordAttempt } = gameSlice.actions; //Exportamos las acciones para poderlas utilizar en otros componentes.
export default gameSlice.reducer; //Exportamos el reducer para poderlo utilizar en el store.
