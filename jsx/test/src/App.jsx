import React from "react"
import "./App.css"
import Title from "./Components/Title"
import Image from "./Components/Image"
import Details from "./Components/Details"

const App = () =>(

    <div>
        <Title title="Test"/>
        <Image url="https://picsum.photos/id/237/200/300"/>
        <Details gender="masc" status="alive" />
    </div>
)

export default App
