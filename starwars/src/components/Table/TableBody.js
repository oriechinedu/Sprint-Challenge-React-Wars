import React from 'react'
import TableRow from './TableRow'

export default function tableBody({ data}) {
  return (
    <tbody>
      {data.map(character => (
        <TableRow rowData={character}  key={character}/>
      ))}
    </tbody>
  )
}