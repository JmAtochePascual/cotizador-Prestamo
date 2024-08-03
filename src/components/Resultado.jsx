import React from 'react'
import { formatearCantidad } from '../helpers'

function Resultado({ plazo, totalPagar, pago }) {
  // Redondear pago
  pago = Math.round(pago * 100) / 100;

  return (
    <div className="w-full p-8 rounded-md shadow-md bg-gray-200">
      <p className="mb-2 text-center font-bold text-xl text-gray-600">{plazo} Meses</p>
      <p className="mb-2 text-center font-bold text-xl text-gray-600">{formatearCantidad(totalPagar)} Total a pagar</p>
      <p className="mb-2 text-center font-bold text-xl text-gray-600">{pago} Mensuales</p>
    </div>
  )
}

export default Resultado