import React from 'react'
import Table from './Table/Table'
import StarWarCharacter from './StarWarCharacter'

export default function starWarCharacterList({ data }) {
  // return (
  //   <Table data={data} />
  // )

  return (
    <ul>
       {data.map((char, i) => (
         <StarWarCharacter character={char}  key={`${char.name} ${i}`}/>
       ))}
    </ul>
  )
}