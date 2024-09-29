
import './App.css'
import React from 'react'
import Title from "./components/title"


async function App() {

  const url = "https://randomuser.me/api/"

  const fetchResult = await fetch(url)
  const dataFetched = await fetchResult.json()

  return (
    
    <div>
      {/* Titulo de el artista/personaje */}
      <Titulo
        title={dataFetched.results[0].name.title}
      />
    </div>
  )
}

export default App;
