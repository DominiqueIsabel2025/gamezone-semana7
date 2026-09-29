import CartTotal from './CartTotal'

function ShoppingCart({ carrito, onEliminar }) {
  // Muestra la cantidad de productos actualmente agregados al carrito
  return (
    <section className="shopping-cart">
      <h2>🛒 Carrito ({carrito.length})</h2>

      {/* Renderizado condicional: muestra un mensaje si el carrito está vacío */}
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {carrito.map((producto) => (
              <article className="cart-item" key={producto.cartId}>
                <div>
                  <h3>{producto.nombre}</h3>

                  <p>
                    ${producto.precioOferta.toLocaleString('es-CL')}
                  </p>
                </div>

                {/* Elimina el producto seleccionado del carrito */}
                <button
                  onClick={() => onEliminar(producto.cartId)}
                >
                  Eliminar
                </button>
              </article>
            ))}
          </div>

          <CartTotal carrito={carrito} />
        </>
      )}
    </section>
  )
}

export default ShoppingCart