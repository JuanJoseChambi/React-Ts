import { useReducer } from "react"
const initialState = {
  contador : 0
}

type ActionType = 
  | {type: "incrementar"}
  | {type : "decrementar"}
  | {type : "custom", payload:number}

function contadorReducer (state: typeof initialState, action:ActionType) {
  switch (action.type) {
    case "incrementar":
      return {
        ...state, 
        contador:state.contador + 1
      }
    case "decrementar":
      return {
        ...state,
        contador : state.contador - 1
      }
    case "custom" : 
      return {
      ...state,
      contador: state.contador = action.payload
    }
    default:
      return state
  }

} 

function ContadorRed() {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState)

  return (
    <div>
        <h3>Contador: {contadorState.contador}</h3>
        <button onClick={() => dispatch({type:"incrementar"})} className="btn btn-outline-primary">+1</button>
        <button onClick={() => dispatch({type:"decrementar"})} className="btn btn-outline-primary">-1</button>
        <button onClick={() => dispatch({type:"custom", payload: 100})} className="btn btn-outline-danger">100</button>
    </div>
  )
}

export default ContadorRed