import useForm from "../Hooks/useForm";

interface FormData {
    email:string,
    nombre: string,
    edad:number
}

function FormularioDos() {
 
   const {nombre, email, edad, formulario, handlerFormulario} = useForm<FormData>({
    email:"",
    nombre:"",
    edad:0
   })

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control"
            value={email}
            onChange={handlerFormulario} />
        </div>
        <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" name="nombre" className="form-control" 
            value={nombre}
            onChange={handlerFormulario}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="number" name="edad" className="form-control" 
            value={edad}
            onChange={handlerFormulario}/>
        </div>

        <pre>{JSON.stringify(formulario)}</pre>

    </form>
  )
}

export default FormularioDos






// import { ChangeEvent, useState } from "react"


// function Formulario() {

//     const [formulario, setFormulario] = useState({
//         email: "",
//         nombre:""
//     })

//     // function handlerFormulario (e : ChangeEvent<HTMLInputElement>) {
//     //     console.log(e.target.name);
//     //     console.log(e.target.value);        
//     // }
//     function handlerFormulario ({target} : ChangeEvent<HTMLInputElement>) {
//         const {name, value} = target;
//         // console.log(name, value);              
//         setFormulario({
//             ...formulario,
//             [name]:value
//         }) 
//     }

//   return (
//     <form autoComplete="off">
//         <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input type="email" name="email" className="form-control"
//             onChange={handlerFormulario} />
//         </div>
//         <div className="mb-3">
//             <label className="form-label">Nombre</label>
//             <input type="text" name="nombre" className="form-control" 
//             onChange={handlerFormulario}/>
//         </div>

//         <pre>{JSON.stringify(formulario)}</pre>

//     </form>
//   )
// }

// export default Formulario