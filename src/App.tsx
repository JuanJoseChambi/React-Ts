import './App.css'
import ContadorRed from './Components/ContadorRed'
import Counter from './Components/Counter'
import Formulario from './Components/Formulario'
import FormularioDos from './Components/FormularioDos'
import TimerPadre from './Components/TimerPadre'
import Usuario from './Components/Usuario'

function App() {

  return (
    <>
        <h1>React + TypeScript</h1> <hr />
        <h1>UseState</h1>
        <Counter/>

        <Usuario/>

        <h2>useEffect - useRef</h2><hr />
        <TimerPadre/>

        <h2>UseReduceer</h2> <hr />
        <ContadorRed/>

        <h2>Custom Hooks</h2><hr />
        <Formulario/>
        <br />
        <br />
        <FormularioDos/>
    </>
  )
}

export default App
