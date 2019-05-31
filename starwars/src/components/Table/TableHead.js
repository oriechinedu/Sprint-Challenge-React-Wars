import React from 'react'


export default function tableHead({ titleData }) {
  return (
    <tr>
      {titleData.map(title =>(<th key={title}>{title}</th>))} 
    </tr>
  )
}