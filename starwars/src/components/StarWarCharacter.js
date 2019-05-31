import React from 'react'
import './StarWars.css'

export default function starWar({ character }) {
  return (
    <li className="character">
      {character.name}
    </li>
  )
}