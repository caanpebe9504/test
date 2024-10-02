import react from "react"

const Imagen = (props) => {

    return (
        <div>
            <img src={props.imagen} alt="Imagen personaje" />
        </div>
    )
}

export default Imagen