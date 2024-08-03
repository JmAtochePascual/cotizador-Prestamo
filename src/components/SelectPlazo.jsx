import React from 'react'

function SelectPlazo({ valor, fn }) {
  return (
    <select
      value={valor}
      onChange={fn}
      className="w-full mb-8 p-2 text-center font-bold border rounded-md outline-none border-gray-300 text-gray-500 bg-white">
      <option value="6">6</option>
      <option value="12">12</option>
      <option value="24">24</option>
    </select>
  )
}

export default SelectPlazo