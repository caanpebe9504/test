import React from "react"


function Title(props){

    console.log(props)

    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
    
}

export default Title;
