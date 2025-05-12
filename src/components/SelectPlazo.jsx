
export function SelectPlazo({ plazo, setPlazo }) {

  const handleChangePlazo = (event) => {
    setPlazo(Number(event.target.value));
  };

  return (
    <select
      value={plazo}
      onChange={handleChangePlazo}
      className="w-full mb-8 p-2 text-center font-bold border rounded-md outline-none border-gray-300 text-gray-500 bg-white">
      <option value="6">6</option>
      <option value="12">12</option>
      <option value="24">24</option>
    </select>
  )
}