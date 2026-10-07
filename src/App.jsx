import { useEffect, useState } from 'react'

import './App.css'

import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import ContactForm from './components/ContactForm'

function App() {

  // Estado que almacena los productos del catálogo
  const [productos, setProductos] = useState([])

  // Estado que almacena los productos agregados al carrito
  const [carrito, setCarrito] = useState([])

  // Estado que controla la carga inicial de los productos
  const [cargando, setCargando] = useState(true)

  // Estado que controla la categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos')

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

  // Filtra los productos según la categoría seleccionada
  const productosFiltrados =
    categoriaSeleccionada === 'Todos'
      ? productos
      : productos.filter(
          (producto) =>
            producto.categoria === categoriaSeleccionada
        )

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
      carritoActual.filter(
        (producto) => producto.cartId !== cartId
      )
    )
  }

  return (
    <div className="app">

      {/* Barra de navegación */}
      <Navbar />

      {/* Encabezado principal */}
      <header className="header" id="inicio">

        <h1>🎮 GameZone</h1>

        <p>
          Tu tienda de videojuegos y accesorios
        </p>

      </header>

      <main className="main-content">

        {/* Filtro de categorías */}
        <section
          className="container mb-4"
          aria-labelledby="titulo-categorias"
        >

          <h2
            id="titulo-categorias"
            className="text-center mb-3"
          >
            Categorías
          </h2>

          <div className="d-flex justify-content-center gap-2 flex-wrap">

            <button
              type="button"
              className={`btn ${
                categoriaSeleccionada === 'Todos'
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              }`}
              onClick={() =>
                setCategoriaSeleccionada('Todos')
              }
            >
              Todos
            </button>

            <button
              type="button"
              className={`btn ${
                categoriaSeleccionada === 'Videojuegos'
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              }`}
              onClick={() =>
                setCategoriaSeleccionada('Videojuegos')
              }
            >
              Videojuegos
            </button>

            <button
              type="button"
              className={`btn ${
                categoriaSeleccionada === 'Accesorios'
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              }`}
              onClick={() =>
                setCategoriaSeleccionada('Accesorios')
              }
            >
              Accesorios
            </button>

          </div>

        </section>

        {/* Catálogo de productos */}
        <section id="productos">

          {cargando ? (
            <p className="loading-message text-center">
              Cargando productos...
            </p>
          ) : (
            <ProductList
              productos={productosFiltrados}
              carrito={carrito}
              onAgregar={agregarAlCarrito}
            />
          )}

        </section>

        {/* Carrito de compras */}
        <section id="carrito">

          <ShoppingCart
            carrito={carrito}
            onEliminar={eliminarDelCarrito}
          />

        </section>

      </main>

      {/* Formulario de contacto */}
      <ContactForm />

      {/* Pie de página */}
      <footer className="bg-dark text-white text-center py-4 mt-5">

        <p className="mb-0">
          © 2026 GameZone - Tienda de videojuegos y accesorios
        </p>

      </footer>

    </div>
  )
}

export default App