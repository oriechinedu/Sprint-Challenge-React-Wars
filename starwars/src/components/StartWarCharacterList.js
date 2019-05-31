import React from 'react'
import StarWarCharacter from './StarWarCharacter'

export default function starWarCharacterList({ starWarCharacters }) {
  return (
    <ul>
      {starWarCharacters.map((char, i) => (
        <StarWarCharacter
          character={char}
          key={`${char.name}${i}`}
           />
      ))}
    </ul>
  )
}