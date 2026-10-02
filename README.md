# 🎮 GameZone — Semana 8

Proyecto eCommerce desarrollado para la asignatura **Desarrollo Frontend I (PFY2201)**.

La actividad consiste en continuar el eCommerce de semanas anteriores utilizando **React**, componentes funcionales, `useState`, `useEffect`, props y renderizado condicional.

## 🛠️ Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- Git
- GitHub
- GitHub Pages

## ⚛️ Funcionalidades implementadas

- Catálogo de productos cargado dinámicamente mediante `useEffect` y `fetch`.
- Productos almacenados en un archivo `productos.json`.
- Estado del catálogo mediante `useState`.
- Carrito de compras mediante `useState`.
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Contador de productos en el carrito.
- Cálculo del total de la compra.
- Renderizado condicional del carrito.
- Cambio del botón entre **"Agregar al carrito"** y **"✓ En el carrito"** según el estado.
- Mensaje cuando el carrito está vacío.
- Componentes funcionales y reutilizables.

## 📁 Estructura del proyecto

```text
src/
├── components/
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── ShoppingCart.jsx
│   └── CartTotal.jsx
├── data/
│   └── productos.js
├── App.jsx
├── App.css
└── index.css

public/
└── data/
    └── productos.json
