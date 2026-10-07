# 🎮 GameZone - EFT Frontend I

Proyecto eCommerce desarrollado para la asignatura **Desarrollo Frontend I (PFY2201)** de Duoc UC.

Este proyecto corresponde a la Evaluación Final Transversal (EFT) y consiste en el desarrollo de una tienda online de videojuegos y accesorios utilizando HTML5, CSS3, JavaScript, Bootstrap 5 y React.

## 📌 Descripción

GameZone es una tienda online que permite visualizar productos de videojuegos y accesorios, filtrarlos por categoría, agregarlos a un carrito de compras y enviar consultas mediante un formulario de contacto con validación.

El proyecto utiliza componentes React reutilizables, manejo de estado mediante `useState`, efectos mediante `useEffect`, props y carga dinámica de productos desde un archivo JSON.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Bootstrap 5
- Git
- GitHub
- GitHub Pages

## ✨ Funcionalidades

### 🛍️ Catálogo de productos

- Carga dinámica de productos mediante `fetch`.
- Productos almacenados en `public/data/productos.json`.
- Visualización de:
  - Nombre
  - Imagen
  - Descripción
  - Precio normal
  - Precio de oferta
- Tarjetas desarrolladas utilizando componentes de Bootstrap 5.

### 🔎 Filtro por categoría

El catálogo permite filtrar los productos mediante las siguientes categorías:

- Todos
- Videojuegos
- Accesorios

El filtro se implementa mediante `useState` y actualiza dinámicamente la lista de productos.

### 🛒 Carrito de compras

- Agregar productos al carrito.
- Evitar agregar nuevamente un producto que ya se encuentra en el carrito.
- Mostrar cantidad de productos.
- Eliminar productos.
- Calcular el total de la compra.
- Mostrar un mensaje cuando el carrito está vacío.

### 📩 Formulario de contacto

El formulario incluye:

- Nombre.
- Correo electrónico.
- Mensaje.
- Validación de campos obligatorios.
- Validación del formato del correo electrónico.
- Mensajes de error.
- Mensaje de confirmación cuando el formulario se completa correctamente.

### 📱 Diseño responsive

El sitio está optimizado para diferentes tamaños de pantalla:

- 📱 Móvil: 1 producto por fila.
- 📲 Tablet: 2 productos por fila.
- 💻 Escritorio: 4 productos por fila.

También se utiliza el Navbar responsive de Bootstrap 5 con menú hamburguesa para dispositivos pequeños.

## ⚛️ React

El proyecto está organizado mediante componentes funcionales reutilizables.

### Componentes principales

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── ShoppingCart.jsx
│   ├── CartTotal.jsx
│   └── ContactForm.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx