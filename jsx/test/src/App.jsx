import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'


function App() {

  const [ currentArtistInfo, setCurrentArtistInfo  ] = useState(null);

  const randomArtistInfo = async() => {

     try{
      const urlResponse = await fetch("https://randomuser.me/api/")

      if(!urlResponse.ok) {
        throw new Error ("Se jodió")
      }
      const artistInfo = await urlResponse.json();
      console.log("Fetched data:", artistInfo)
      setCurrentArtistInfo (artistInfo.results[0])
     } catch (error) {
      console.log("Error fetching data:", error)
     }
  
  }

  useEffect(() => {
    randomArtistInfo()
  }, []);

  return (
    <div>

      <h1>Artista/personaje Favorito</h1>
      {currentArtistInfo ? (
        <>

        <img src = {currentArtistInfo.picture.large} alt = "Artist Picture" />

        <p>
          Nombre: {currentArtistInfo.name.title} {currentArtistInfo.name.first} {currentArtistInfo.name.last}<br />
          Género: {currentArtistInfo.gender}<br />
          Pais de origen: {currentArtistInfo.location.country}<br />
        </p>

      </>
    ) : (
    
      <p>La data del artista está en ejecución</p>
    )}
    <button onClick ={randomArtistInfo  }> Click acá para ver otro artista </button>
    </div>
  );
}

export default App;


/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/
