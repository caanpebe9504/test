import react from "react"
import Nombre from "../nombre/nombre"
import Imagen from "../imagen/imagen"

const Hijo = (props) => {

    return (
        <div>
            <Nombre nombre = {props.nombre} />
            <Imagen imagen = {props.imagen}/>
        </div>
    )
}

export default Hijo