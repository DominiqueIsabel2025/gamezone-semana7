function ProductCard({ producto, onAgregar }) {
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

      {/* Ejecuta la función recibida desde App cuando se presiona el botón */}
      <button onClick={() => onAgregar(producto)}>
        Agregar al carrito
      </button>
    </article>
  )
}

export default ProductCard