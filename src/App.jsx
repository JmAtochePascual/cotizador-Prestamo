import { Button, Header, Rango, Resultado, SelectPlazo } from "./components";
import { formatearCantidad } from "./helpers";
import usePlazo from "./hooks/usePlazo";

function App() {
  const {
    plazo,
    setPlazo,
    cantidad,
    setCantidad,
    pago,
    totalPagar,
    aumentarCantidad,
    disminuirCantidad,
  } = usePlazo();

  return (
    <>
      <Header />

      <div className="mb-2 flex justify-between items-center">
        <Button
          operador="-"
          operacion={disminuirCantidad}
        />

        <Button
          operador="+"
          operacion={aumentarCantidad}
        />
      </div>

      <Rango
        cantidad={cantidad}
        setCantidad={setCantidad}
      />

      <p className="mb-8 text-center text-5xl font-extrabold text-indigo-600">{formatearCantidad(cantidad)}</p>

      <SelectPlazo
        plazo={plazo}
        setPlazo={setPlazo}
      />

      <Resultado
        plazo={plazo}
        totalPagar={totalPagar}
        pago={pago}
      />
    </>
  )
}

export default App
