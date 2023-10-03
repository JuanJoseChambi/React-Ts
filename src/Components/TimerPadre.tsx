import { useState } from "react"
import Timer from "./Timer"

function TimerPadre() {
    const [milisegundos, setMilisegundos] = useState(1000)

  return (
    <div>
        <span>El tiempo avanza cada {milisegundos} milisegundos = {milisegundos === 1000 ? 1 :(milisegundos === 2000 ? 2 : 3)} segundos</span>
        <br />
        <button onClick={() => setMilisegundos(1000)} className="btn btn-outline-success ">1 segundo</button>
        <button onClick={() => setMilisegundos(2000)} className="btn btn-outline-success ">2 segundos</button>
        <button onClick={() => setMilisegundos(3000)} className="btn btn-outline-success ">3 segundos</button>
        <Timer milisegundos={milisegundos}/>
    </div>
  )
}

export default TimerPadre