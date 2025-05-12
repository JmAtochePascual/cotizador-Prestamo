import { useEffect, useState } from "react";
import { calcularTotal } from "../helpers";

const usePlazo = () => {
  const [cantidad, setCantidad] = useState(10000);
  const [plazo, setPlazo] = useState(6);
  const [totalPagar, setTotalPagar] = useState(0);
  const [pago, setPago] = useState(0);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  useEffect(() => {
    setTotalPagar(calcularTotal(cantidad, plazo));
  }, [cantidad, plazo]);

  useEffect(() => {
    const nuevoPago = totalPagar / plazo;
    setPago(nuevoPago);
  }, [totalPagar, plazo]);

  const aumentarCantidad = () => {
    const nuevaCantidad = cantidad + STEP;

    if (nuevaCantidad > MAX) {
      alert(`No se puede superar el límite de ${MAX}`);
      return;
    }

    setCantidad(nuevaCantidad);
  };

  const disminuirCantidad = () => {
    const nuevaCantidad = cantidad - STEP;

    if (nuevaCantidad < MIN) {
      alert(`No se puede ser menor a ${MIN}`);
      return;
    }

    setCantidad(nuevaCantidad);
  };

  return {
    cantidad,
    setCantidad,
    plazo,
    setPlazo,
    totalPagar,
    setTotalPagar,
    pago,
    setPago,
    aumentarCantidad,
    disminuirCantidad,
  };
};

export default usePlazo