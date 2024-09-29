
import './App.css'
import React from 'react'
import Title from "./components/title"


function App() {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div>
      {/* Titulo de el artista/personaje */}
      <Titulo
        title={}
      />
      {/* Imagen de el artista/personaje */}
      <Image
        url={} 
      />
      {/* Detalles de el artista/personaje */}
      <Details
        genre={} 
        status={} 
      />
    </div>
  );
}

export default App;