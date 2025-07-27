import { arrayExampleWord } from '../../constants';
import './ExampleWord.css'

export const ExampleWord = () => {
  return (
    <div className="example-word">
      {
        arrayExampleWord.map((letter, index) => (
          <div key={letter} className={`example-word-letter ${index === 0 || index == 4 ? 'example-word-letter--correct' : ''} ${index == 2 ? 'example-word-letter--present' : ''}`}>
            {letter}
          </div>
        ))
      }
    </div>
  )
}