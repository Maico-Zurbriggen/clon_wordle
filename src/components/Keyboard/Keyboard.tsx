import { arrayKeyboard } from '../../constants'
import './Keyboard.css';

export const Keyboard = () => {
  return (
    <div className='keyboard'>
      {
        arrayKeyboard.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="keyboard-row">
            {
              row.map((key) => (
                <button key={key} className={`cell-keyboard ${key === 'Enter' || key === '⌫' ? 'cell-keyboard--special' : ''}`}>
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