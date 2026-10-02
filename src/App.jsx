import { useEffect, useState } from 'react'

import './App.css'

import ProductList from './components/ProductList'

import ShoppingCart from './components/ShoppingCart'

function App() {

  // Estado que almacena los productos del catálogo
  const [productos, setProductos] = useState([])

  // Estado que almacena los productos agregados al carrito
  const [carrito, setCarrito] = useState([])

  // Estado que controla la carga inicial de los productos
  const [cargando, setCargando] = useState(true)

  // Carga los productos desde el archivo JSON al iniciar la aplicación
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/productos.json`) 
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos)
        setCargando(false)
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error)
        setCargando(false)
      })
  }, [])

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

        {cargando ? (
          <p className="loading-message">
            Cargando productos...
          </p>
        ) : (
          <ProductList
  productos={productos}
  carrito={carrito}
  onAgregar={agregarAlCarrito}
/>
        )}

        <ShoppingCart
          carrito={carrito}
          onEliminar={eliminarDelCarrito}
        />

      </main>

    </div>
  )
}

export default App



