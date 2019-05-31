import React from 'react'
import './Pagination.css'

export default function pagination({ handlePagination, hasPrev, hasNext }) {
  return (
   <div className="pagination">
    <button data-type="previous" onClick={handlePagination} disabled={!hasPrev}>Prev</button>
    <button data-type="next" onClick={handlePagination} disabled={!hasNext}>Next</button>
   </div>
  )
}