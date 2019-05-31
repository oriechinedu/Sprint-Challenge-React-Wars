import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

export default function table({ data}) {
  console.log(data)
  const titleData = Object.keys(data[0]);
  return (
    <table>
      <TableHead titleData={titleData}/>
      <TableBody data={data} />
    </table>
  )
}