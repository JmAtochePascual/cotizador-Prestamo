
export function Button({ operador, operacion }) {

  return (
    <button className="h-10 w-10 flex justify-center items-center font-bold rounded-full text-white bg-lime-500 hover:outline-none hover:ring-offset-2 hover:ring-lime-500 hover:ring-2"
      onClick={operacion}>
      {operador}
    </button>
  )
}