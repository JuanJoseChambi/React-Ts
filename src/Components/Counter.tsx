import { useState } from "react"

function Counter() {
    const [couter, setCouter] = useState(0)

    function incrementar ( numero : number  = 1) {
        setCouter(couter + numero)
        // console.log(e);
        
    }

  return (
    <div className="mg-5">
        <h3>Counter</h3>
        <span>Valor : {couter}</span>
        <br />
        <button onClick={() => incrementar()} className="btn btn-outline-primary mt-2">+1</button>
        <button onClick={() => incrementar(2)} className="btn btn-outline-primary mt-2">+2</button>
        <button onClick={() => setCouter(0)} className="btn btn-outline-danger mt-2">Reset</button>
    </div>
  )
}

export default Counter