import './App.css'
import React, { useState, useEffect } from "react"

import Hijo from "./components/hijo/hijo"
 
function App(){

  const [nombre, setNombre] = useState("")
  const [imagen, setImagen] = useState("")

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/10"

    fetch(url)
    .then(response => response.json())
    .then((data) => {
      setNombre(data.name)
      setImagen(data.image)
    })

  }, [])
  
  return (
    <div>
      <h1>Hola mundo</h1>
      < Hijo nombre = {nombre} imagen = {imagen} />
    </div>
    
  )
  
}

export default App
