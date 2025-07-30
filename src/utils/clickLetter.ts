import { setCurrentAttempt, setCurrentLetter, setWordAttempt } from '../store/gameSlice';
import { wordsAcepted } from "../constants";
import type { AppDispatch } from '../store';

let updateWordAttempt: string = '';

export const clickLetter = ({ key, dispatch, currentAttempt, currentLetter, currentWord, wordAttempt, modifyIsEnd, modifyIsWin }: { key: string, dispatch: AppDispatch, currentAttempt: number, currentLetter: number, currentWord: string, wordAttempt: string, modifyIsEnd: (isEnd: boolean) => void, modifyIsWin: (isWin: boolean) => void }) => {
  if (key === "Enter") {
    if (!wordsAcepted.includes(wordAttempt)) {
      return;
    }
    if (currentLetter !== currentWord.length) return;
    if (currentAttempt === 5) modifyIsEnd(true);

    dispatch(setCurrentAttempt(currentAttempt + 1));
    dispatch(setCurrentLetter(0));

    // Crear un mapa para contar las ocurrencias de cada letra en la palabra a adivinar
    const targetWordMap = new Map<string, number>();
    currentWord.split("").forEach((letter) => {
      targetWordMap.set(letter, (targetWordMap.get(letter) || 0) + 1);
    });

    // Obtener todas las celdas del intento actual
    const currentCells: HTMLElement[] = [];
    for (let i = 0; i < currentWord.length; i++) {
      const cell = document.querySelector(`#cell-${currentAttempt}-${i}`);
      if (cell instanceof HTMLElement && cell.textContent) {
        currentCells.push(cell);
      }
    }

    // Primero marcar todas las letras correctas
    currentCells.forEach((cell, index) => {
      if (cell.textContent === currentWord[index]) {
        cell.classList.add("cell--correct");
        // Reducir el contador de la letra en el mapa
        const letter = cell.textContent;
        if (letter) {
          targetWordMap.set(letter, (targetWordMap.get(letter) || 0) - 1);
        }
      }
    });

    // Luego marcar las letras presentes o incorrectas
    currentCells.forEach((cell, index) => {
      if (cell.textContent !== currentWord[index]) {
        // Si no es correcta
        const letter = cell.textContent || "";
        const currentKey: HTMLButtonElement | null = document.querySelector(
          `#${letter}`
        );

        // Verificar si la letra está en la palabra y aún hay ocurrencias disponibles
        if (targetWordMap.has(letter) && (targetWordMap.get(letter) || 0) > 0) {
          cell.classList.add("cell--present");
          // Reducir el contador de la letra en el mapa
          targetWordMap.set(letter, (targetWordMap.get(letter) || 0) - 1);
        } else {
          cell.classList.add("cell--incorrect");
          // Solo marcar la tecla como incorrecta si la letra no aparece en la palabra
          if (!currentWord.includes(letter) && currentKey) {
            currentKey.classList.add("cell-keyboard--incorrect");
            currentKey.disabled = true;
          }
        }
      }
    });

    if (wordAttempt === currentWord) {
      modifyIsWin(true);
      modifyIsEnd(true);
    }

    updateWordAttempt = "";
    dispatch(setWordAttempt(updateWordAttempt));
  } else if (key === "⌫") {
    if (!currentLetter) return;
    const currentCell = document.querySelector(
      `#cell-${currentAttempt}-${currentLetter - 1}`
    );
    updateWordAttempt = wordAttempt.slice(0, -1);
    if (currentCell) currentCell.textContent = "";
    dispatch(setCurrentLetter(currentLetter - 1));
    dispatch(setWordAttempt(updateWordAttempt));
  } else {
    if (currentLetter === currentWord.length) return;
    const currentCell = document.querySelector(
      `#cell-${currentAttempt}-${currentLetter}`
    );
    updateWordAttempt += key;
    if (currentCell) currentCell.textContent = key;
    dispatch(setCurrentLetter(currentLetter + 1));
    dispatch(setWordAttempt(updateWordAttempt));
  }
};
