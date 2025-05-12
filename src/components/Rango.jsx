
export function Rango({ cantidad, setCantidad }) {

  const handleChangeCantidad = (event) => {
    setCantidad(Number(event.target.value))
  };

  return (
    <input
      min="0"
      max="20000"
      step="100"
      value={cantidad}
      onChange={handleChangeCantidad}
      className="w-full mb-10 accent-lime-500 bg-gray-200"
      type="range" />
  );
}