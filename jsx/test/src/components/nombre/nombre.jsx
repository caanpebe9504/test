import react from "react"

const Nombre = (props) => {
console.log(props)
    return (
        <div>
            <h1>{props.nombre}</h1>
        </div>
    )
}

export default Nombre

