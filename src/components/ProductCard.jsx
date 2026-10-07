function ProductCard({ producto, carrito, onAgregar }) {

  // Comprueba si el producto ya se encuentra en el carrito
  const enCarrito = carrito.some(
    (item) => item.id === producto.id
  )

  return (
    <article className="col-12 col-md-6 col-lg-3">

      <div className="card h-100 shadow-sm">

        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top product-image"
        />

        <div className="card-body d-flex flex-column">

          <h2 className="card-title h5">
            {producto.nombre}
          </h2>

          <p className="card-text">
            {producto.descripcion}
          </p>

          <p className="text-muted text-decoration-line-through mb-1">
            Precio normal: $
            {producto.precioNormal.toLocaleString('es-CL')}
          </p>

          <p className="text-danger fw-bold fs-5">
            Oferta: $
            {producto.precioOferta.toLocaleString('es-CL')}
          </p>

          <button
            type="button"
            className={`btn mt-auto ${
              enCarrito
                ? 'btn-success'
                : 'btn-primary'
            }`}
            onClick={() => onAgregar(producto)}
            disabled={enCarrito}
          >
            {enCarrito
              ? '✓ En el carrito'
              : 'Agregar al carrito'}
          </button>

        </div>

      </div>

    </article>
  )
}

export default ProductCard