// Importar componentes
import { useState } from "react"
import Header from "./components/Header"
import Rango from "./components/Rango"
import Button from "./components/Button";
import { formatearCantidad } from "./helpers";


function App() {
  // Estados
  const [cantidad, setCantidad] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  // Cambiar estado de cantidad
  const handleChangeCantidad = (event) => {
    setCantidad(Number(event.target.value))
  }

  // Aumentar cantidad
  const aumentarCantidad = () => {
    const nuevaCantidad = cantidad + STEP;

    if (nuevaCantidad > MAX) {
      alert("No se puede superar el límite de 20000");
      return;
    }

    setCantidad(nuevaCantidad);
  }

  // Disminuir cantidad
  const disminuirCantidad = () => {
    const nuevaCantidad = cantidad - STEP;

    if (nuevaCantidad < MIN) {
      alert("No se puede ser menor a 0");
      return;
    }

    setCantidad(nuevaCantidad);
  }

  return (
    <div className="w-11/12 max-w-xl mx-auto p-8 rounded-md shadow-lg bg-white">
      <Header />


      <div className="mb-2 flex justify-between items-center">
        <Button
          operador="+"
          fn={aumentarCantidad}
        />

        <Button
          operador="-"
          fn={disminuirCantidad}
        />
      </div>

      <Rango
        cantidad={cantidad}
        setCantidad={handleChangeCantidad}
      />

      <p className="text-center text-5xl font-extrabold text-indigo-600">{formatearCantidad(cantidad)}</p>

    </div>
  )
}

export default App
