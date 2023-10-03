import { ChangeEvent, useState } from "react";

// La T significa que este es de Tipo Generico, osea que sea adapta a lo que se le pase por type de otras funciones
export default function useForm <T> (initState : T) {
    const [formulario, setFormulario] = useState(initState)

    function handlerFormulario ({target} : ChangeEvent<HTMLInputElement>) {
        const {name, value} = target;
        setFormulario({
            ...formulario,
            [name]:value
        }) 
    }

    return {
        formulario,
        handlerFormulario,
        ...formulario //esto nos permite exportar por individual email, nombre y edad siendo una opcion para obtenerlo al destructurarlo
        
    }

}