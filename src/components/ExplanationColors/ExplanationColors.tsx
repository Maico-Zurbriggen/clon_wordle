import './ExplanationColors.css'

export const ExplanationColors = () => {
  return (
    <div className="explanation-colors">
      <div className="explanation-colors-child">
        <div className="explanation-colors-letter">E</div>
        <p>,</p>
        <div className="explanation-colors-letter">I</div>
        <p>no está en la palabra objetivo en absoluto.</p>
      </div>
      <div className="explanation-colors-child">
        <div className="explanation-colors-letter explanation-colors-letter--present">D</div>
        <p>está en la palabra pero en el lugar equivocado.</p>
      </div>
      <div className="explanation-colors-child">
        <div className="explanation-colors-letter explanation-colors-letter--correct">M</div>
        <p>,</p>
        <div className="explanation-colors-letter explanation-colors-letter--correct">O</div>
        <p>está en la palabra y en el lugar correcto.</p>
      </div>
    </div>
  )
}