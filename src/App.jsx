// Importar componentes
import { useState } from "react"
import Header from "./components/Header"
import Rango from "./components/Rango"


function App() {
  // Estados
  const [cantidad, setCantidad] = useState(10000);

  // Cambiar estado de cantidad
  const handleChangeCantidad = (event) => {
    setCantidad(Number(event.target.value))
  }

  return (
    <div className="w-11/12 max-w-xl mx-auto p-8 rounded-md shadow-lg bg-white">
      <Header />

      <Rango
        cantidad={cantidad}
        setCantidad={handleChangeCantidad}
      />

    </div>
  )
}

export default App
