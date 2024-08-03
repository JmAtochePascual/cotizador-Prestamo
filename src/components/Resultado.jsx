import React from 'react'
import { formatearCantidad } from '../helpers'

function Resultado({ plazo, totalPagar, pago }) {
  // Redondear pago
  pago = Math.round(pago * 100) / 100;

  return (
    <div className="w-full p-8 rounded-md bg-indigo-600">
      <p className="mb-2 text-center font-bold text-xl text-white">{plazo} Meses</p>
      <p className="mb-2 text-center font-bold text-xl text-white">{formatearCantidad(totalPagar)} Total a pagar</p>
      <p className="mb-2 text-center font-bold text-xl text-white">{pago} Mensuales</p>
    </div>
  )
}

export default Resultado