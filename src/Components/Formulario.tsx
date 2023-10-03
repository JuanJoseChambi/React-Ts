import useForm from "../Hooks/useForm"

interface FormData {
    email:string,
    nombre: string,
    edad:number
}

function Formulario() {

    const {formulario, handlerFormulario} = useForm<FormData>({
        email:"Juan Jose@gmail.com",
        nombre:"Juan JoseChambi",
        edad: 0
    })

    const {email, nombre, edad} = formulario;

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control"
            value={email}
            onChange={handlerFormulario}
            />
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

export default Formulario