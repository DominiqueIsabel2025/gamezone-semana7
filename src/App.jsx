import { useState } from 'react'
import './App.css'
import productos from './data/productos'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

function App() {
  // Estado que almacena los productos agregados al carrito
  const [carrito, setCarrito] = useState([])

  // Agrega un producto al carrito y genera un identificador único
  const agregarAlCarrito = (producto) => {
    const productoCarrito = {
      ...producto,
      cartId: Date.now() + Math.random()
    }

    setCarrito((carritoActual) => [
      ...carritoActual,
      productoCarrito
    ])
  }

  // Elimina del carrito el producto seleccionado
  const eliminarDelCarrito = (cartId) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((producto) => producto.cartId !== cartId)
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🎮 GameZone</h1>
        <p>Tu tienda de videojuegos y accesorios</p>
      </header>

      <main className="main-content">
        <ProductList
          productos={productos}
          onAgregar={agregarAlCarrito}
        />

        <ShoppingCart
          carrito={carrito}
          onEliminar={eliminarDelCarrito}
        />
      </main>
    </div>
  )
}

export default App