import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';

/**
  Este es un store que va a manejar el estado global de la aplicación.
  En el se van a agrupar todos los slices que van a manejar el estado de la aplicación.
  Utilizamos configureStore para crear el store y le pasamos los reducers.
*/

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

/**
  Los tipos que exportamos son para utilizarlos en los métodos de Redux Toolkit, como useDispatch y useSelector.
  RootState es el tipo del estado global de la aplicación.
  AppDispatch es el tipo de la función dispatch.
*/

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;