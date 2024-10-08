import React from "react"

const Details = ({gender, status}) =>{
    return(
        <div>
            <p>{gender}</p>
            <p>{status}</p>
        </div>
    )
}

export default Details