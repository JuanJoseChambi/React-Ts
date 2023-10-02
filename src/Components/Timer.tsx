import { useEffect, useRef, useState } from "react"

type TimerArgs = {
    milisegundos: number,
    // segundos?: number ? = opcional
}

// function Timer(prop : TimerArgs) {
    // const {milisegundos} = prop
function Timer( { milisegundos } : TimerArgs) {

    const [segundos, setSegundos] = useState(0)
    const ref = useRef<number>()

    useEffect(() => {
        ref.current && clearInterval(ref.current)        
        ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos);

    }, [milisegundos])
    
  return (
    <div>
        <h4>Time: <small>{segundos}</small></h4>
    </div>
  )
}

export default Timer