import { arrayKeyboard } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { clickLetter } from "../../utils";
import { useEffect } from "react";
import "./Keyboard.css";

export const Keyboard = ({
  modifyIsEnd,
  modifyIsWin,
}: {
  modifyIsEnd: (isEnd: boolean) => void;
  modifyIsWin: (isWin: boolean) => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentAttempt, currentLetter, currentWord, wordAttempt } =
    useSelector((state: RootState) => state.game);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      let tecla: string = event.key;
      const currentKey: HTMLButtonElement | null = document.querySelector(`#${tecla}`);

      if (tecla && tecla.toLowerCase() === "enter") {
        tecla = "Enter";
      }

      if (tecla && tecla.toLowerCase() === "backspace") {
        tecla = "⌫";
      }

      if (currentKey && currentKey.disabled) return;

      clickLetter({
        key: tecla,
        dispatch,
        currentAttempt,
        currentLetter,
        currentWord,
        wordAttempt,
        modifyIsEnd,
        modifyIsWin,
      })
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentAttempt, currentLetter, currentWord, wordAttempt]);

  return (
    <div className="keyboard">
      {arrayKeyboard.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className={`cell-keyboard ${
                key === "Enter" || key === "⌫" ? "cell-keyboard--special" : ""
              }`}
              onClick={() =>
                clickLetter({
                  key,
                  dispatch,
                  currentAttempt,
                  currentLetter,
                  currentWord,
                  wordAttempt,
                  modifyIsEnd,
                  modifyIsWin,
                })
              }
              id={key}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
