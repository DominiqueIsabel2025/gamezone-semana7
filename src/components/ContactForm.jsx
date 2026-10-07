import { useState } from 'react'

function ContactForm() {

  // Estado que almacena los datos del formulario
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })

  // Estado que almacena los mensajes de error
  const [errores, setErrores] = useState({})

  // Estado para mostrar el mensaje de envío exitoso
  const [enviado, setEnviado] = useState(false)

  // Actualiza los campos del formulario
  const manejarCambio = (evento) => {

    const { name, value } = evento.target

    setFormulario((formularioActual) => ({
      ...formularioActual,
      [name]: value
    }))

    // Oculta el mensaje de éxito si el usuario vuelve a modificar el formulario
    setEnviado(false)

    // Elimina el error del campo que se está corrigiendo
    setErrores((erroresActuales) => ({
      ...erroresActuales,
      [name]: ''
    }))
  }

  // Valida los datos antes de enviar
  const validarFormulario = () => {

    const nuevosErrores = {}

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.'
    }

    if (!formulario.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)
    ) {
      nuevosErrores.correo = 'Ingresa un correo válido.'
    }

    if (!formulario.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es obligatorio.'
    }

    return nuevosErrores
  }

  // Procesa el envío del formulario
  const manejarEnvio = (evento) => {

    evento.preventDefault()

    const nuevosErrores = validarFormulario()

    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length === 0) {

      setEnviado(true)

      setFormulario({
        nombre: '',
        correo: '',
        mensaje: ''
      })
    }
  }

  return (
    <section
      id="contacto"
      className="container py-5"
      aria-labelledby="titulo-contacto"
    >

      <div className="row justify-content-center">

        <div className="col-12 col-md-10 col-lg-8">

          <div className="card shadow-sm">

            <div className="card-body p-4 p-md-5">

              <h2
                id="titulo-contacto"
                className="text-center mb-4"
              >
                Contacto
              </h2>

              <p className="text-center text-muted mb-4">
                ¿Tienes alguna consulta? Escríbenos y te responderemos.
              </p>

              {enviado && (
                <div
                  className="alert alert-success"
                  role="alert"
                >
                  ¡Mensaje enviado correctamente!
                </div>
              )}

              <form onSubmit={manejarEnvio} noValidate>

                <div className="mb-3">

                  <label
                    htmlFor="nombre"
                    className="form-label"
                  >
                    Nombre
                  </label>

                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className={`form-control ${
                      errores.nombre ? 'is-invalid' : ''
                    }`}
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    placeholder="Ingresa tu nombre"
                  />

                  {errores.nombre && (
                    <div className="invalid-feedback">
                      {errores.nombre}
                    </div>
                  )}

                </div>

                <div className="mb-3">

                  <label
                    htmlFor="correo"
                    className="form-label"
                  >
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    className={`form-control ${
                      errores.correo ? 'is-invalid' : ''
                    }`}
                    value={formulario.correo}
                    onChange={manejarCambio}
                    placeholder="ejemplo@correo.com"
                  />

                  {errores.correo && (
                    <div className="invalid-feedback">
                      {errores.correo}
                    </div>
                  )}

                </div>

                <div className="mb-4">

                  <label
                    htmlFor="mensaje"
                    className="form-label"
                  >
                    Mensaje
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className={`form-control ${
                      errores.mensaje ? 'is-invalid' : ''
                    }`}
                    value={formulario.mensaje}
                    onChange={manejarCambio}
                    placeholder="Escribe tu mensaje"
                    rows="5"
                  ></textarea>

                  {errores.mensaje && (
                    <div className="invalid-feedback">
                      {errores.mensaje}
                    </div>
                  )}

                </div>

                <div className="d-grid">

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Enviar mensaje
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ContactForm