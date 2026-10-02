function ProductCard({ producto, carrito, onAgregar }) {

  // Comprueba si el producto ya se encuentra en el carrito
  const enCarrito = carrito.some(
    (item) => item.id === producto.id
  )

  // Muestra la información del producto y permite agregarlo al carrito
  return (

    <article className="product-card">

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="product-image"
      />

      <h2>{producto.nombre}</h2>

      <p>{producto.descripcion}</p>

      <p className="price-normal">
        Precio normal: ${producto.precioNormal.toLocaleString('es-CL')}
      </p>

      <p className="price-offer">
        Oferta: ${producto.precioOferta.toLocaleString('es-CL')}
      </p>

      {/* El botón cambia según si el producto ya está en el carrito */}
      <button
        onClick={() => onAgregar(producto)}
        disabled={enCarrito}
      >
        {enCarrito ? '✓ En el carrito' : 'Agregar al carrito'}
      </button>

    </article>
  )
}

export default ProductCard