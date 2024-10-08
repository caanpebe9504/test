import React from "react"
import "./App.css"
import CharacterCard from "./components/CharacterCard"

const App = () =>{

    const artists = [
        {
            title: "Test1",
            imageUrl: "https://picsum.photos/id/237/200/300",
            gender: "Male",
            status: "Alive"
        },
        {
            title: "Test2",
            imageUrl: "https://picsum.photos/id/300/200/300",
            gender: "Male",
            status: "Alive"
        },
        {
            title: "Test3",
            imageUrl: "https://picsum.photos/id/500/200/300",
            gender: "Male",
            status: "Alive"
        }
    ]

    return (
        <div>
            {artists.map((artist,index) => (
                <CharacterCard 
                    key={index}
                    title={artist.title}
                    imageUrl = {artist.imageUrl}
                    gender={artist.gender}
                    status={artist.status}
                />
            ))}
        </div>
    )
}   

export default App