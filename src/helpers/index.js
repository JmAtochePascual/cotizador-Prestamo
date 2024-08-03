// Formatear cantidad a moneda USD
const formatearCantidad = (cantidad) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(cantidad);
}

export {
  formatearCantidad
}