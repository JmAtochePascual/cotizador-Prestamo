// Importar componentes
import { useEffect, useState } from "react"
import { calcularTotal, formatearCantidad } from "./helpers";
import Header from "./components/Header"
import Rango from "./components/Rango"
import Button from "./components/Button";
import SelectPlazo from "./components/SelectPlazo";
import Resultado from "./components/Resultado";


function App() {
  // Estados
  const [cantidad, setCantidad] = useState(10000);
  const [plazo, setPlazo] = useState(6);
  const [totalPagar, setTotalPagar] = useState(0);
  const [pago, setPago] = useState(0);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  // Calcular total a pagar
  useEffect(() => {
    setTotalPagar(calcularTotal(cantidad, plazo));
  }, [cantidad, plazo]);

  // Calcular pago mensual
  useEffect(() => {
    const nuevoPago = totalPagar / plazo;
    setPago(nuevoPago);
  }, [totalPagar, plazo]);

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

  // Cambiar plazo
  const handleChangePlazo = (event) => {
    setPlazo(Number(event.target.value))
  }

  return (
    <div className="w-11/12 max-w-xl mx-auto p-8 rounded-md shadow-lg bg-white">

      <Header />

      <div className="mb-2 flex justify-between items-center">
        <Button
          operador="-"
          fn={disminuirCantidad}
        />

        <Button
          operador="+"
          fn={aumentarCantidad}
        />
      </div>

      <Rango
        cantidad={cantidad}
        setCantidad={handleChangeCantidad}
      />

      <p className="mb-8 text-center text-5xl font-extrabold text-indigo-600">{formatearCantidad(cantidad)}</p>

      <SelectPlazo
        valor={plazo}
        fn={handleChangePlazo}
      />

      <Resultado
        plazo={plazo}
        totalPagar={totalPagar}
        pago={pago}
      />

    </div>
  )
}

export default App
