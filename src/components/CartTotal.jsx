function CartTotal({ carrito }) {
  // Calcula el precio total sumando el precio de oferta de cada producto
  const total = carrito.reduce(
    (acumulado, producto) => acumulado + producto.precioOferta,
    0
  )

  return (
    <div className="cart-total">
      <h3>
        Total: ${total.toLocaleString('es-CL')}
      </h3>
    </div>
  )
}

export default CartTotal