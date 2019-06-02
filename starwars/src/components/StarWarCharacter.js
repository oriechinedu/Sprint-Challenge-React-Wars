import React from 'react'
import './StarWars.css'

export default function starWar({ character}) {
  const style = { color: character.eye_color}
  return (
    <li className="character"
    >
      <details>
        <summary style={style}>{character.name}</summary>
         <p><strong>Eye Color: </strong> {character.eye_color}</p>
         <p><strong>Gender:</strong> {character.gender}</p>
         <p><strong>Height:</strong> {character.height}</p>
         <p><strong>Hair Color:</strong> {character.hair_color}</p>
         <p><strong>Homeworld:</strong> {character.homeworld}</p>
      </details>

    </li>
  )
}

