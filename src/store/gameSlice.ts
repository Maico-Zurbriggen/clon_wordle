import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

/*
  En este archivo creamos el slice para el juego, es una pieza de estado que va a manejar ciertas características del juego,
  como la longitud de la palabra a adivinar, el número de intentos, etc.
  Define valores iniciales para el estado del juego y los reducers para modificar el estado del juego.
*/

interface GameState {
  wordLength: number;
}

const initialState: GameState = {
  wordLength: Number(localStorage.getItem('wordLength')) || 5,
}

export const gameSlice = createSlice({ //Creamos el slice, con su nombre, estado inicial y sus reducers.
  name: 'game',
  initialState,
  reducers: {
    setWordLength: (state, action: PayloadAction<number> /**Utilizamos PayloadAction para indicar que la acción recibe un payload de tipo number */) => {
      state.wordLength = action.payload;
    },
  },
});

export const { setWordLength } = gameSlice.actions; //Exportamos las acciones para poderlas utilizar en otros componentes.
export default gameSlice.reducer; //Exportamos el reducer para poderlo utilizar en el store.