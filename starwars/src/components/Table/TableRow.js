import React from 'react'


export default function tableRow({ rowData }) {
  const data = Object.values(rowData)
  return (
    <tr>
      {data.map(value =>(<td key={value}>{value}</td>))} 
    </tr>
  )
}