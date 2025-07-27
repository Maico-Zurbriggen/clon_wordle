import { Header, ExampleWord, ExplanationColors } from "../../components"
import './Help.css'

export const Help = () => {
  return (
    <>
      <Header title='Cómo jugar'/>
      <div className="help">
        <p>Tienes que adivinar la palabra oculta en 6 intentos y el color de las letras cambia para mostrar lo cerca que estás.</p>
        <p>Para comenzar el juego, simplemente ingrese cualquier palabra, por ejemplo:</p>
        <ExampleWord />
        <ExplanationColors />
        <p>Y debemos adivinar la palabra con estás ayudas en los 6 intentos.</p>
      </div>
    </>
  )
}