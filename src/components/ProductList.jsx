import ProductCard from './ProductCard'

function ProductList({ productos, carrito, onAgregar }) {

  return (
    <section className="container py-4" aria-labelledby="titulo-productos">

      <h2
        id="titulo-productos"
        className="text-center mb-4"
      >
        Productos
      </h2>

      <div className="row g-4">

        {productos.map((producto) => (

          <ProductCard
            key={producto.id}
            producto={producto}
            carrito={carrito}
            onAgregar={onAgregar}
          />

        ))}

      </div>

    </section>
  )
}

export default ProductList