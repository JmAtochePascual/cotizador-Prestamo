import React from 'react'

function Rango({ cantidad, setCantidad }) {
  return (
    <input
      min="0"
      max="20000"
      step="100"
      value={cantidad}
      onChange={setCantidad}
      className="w-full mb-10 accent-lime-500 bg-gray-200"
      type="range" />

  )
}

export default Rango