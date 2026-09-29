import ProductCard from './ProductCard'

function ProductList({ productos, onAgregar }) {
  // Recorre la lista de productos y crea una tarjeta para cada uno
  return (
    <section className="product-list">
      <h2>Productos</h2>

      <div className="products-grid">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onAgregar={onAgregar}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList