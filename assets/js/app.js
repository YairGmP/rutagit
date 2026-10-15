/* Lógica de la interfaz de RutaGit */

function renderComandos() {
  var contenedor = document.querySelector('#lista-comandos')
  if (!contenedor) return

  var html = CATEGORIAS.map(function (categoria) {
    var filas = categoria.comandos
      .map(function (item) {
        return (
          '<li class="comando">' +
          '<code>' +
          item.cmd +
          '</code>' +
          '<span>' +
          item.desc +
          '</span>' +
          '</li>'
        )
      })
      .join('')

    return (
      '<article class="card" id="' +
      categoria.id +
      '">' +
      '<h3>' +
      categoria.titulo +
      '</h3>' +
      '<p class="card-desc">' +
      categoria.descripcion +
      '</p>' +
      '<ul class="comando-lista">' +
      filas +
      '</ul>' +
      '</article>'
    )
  }).join('')

  contenedor.innerHTML = html
}

function renderFlujo() {
  var contenedor = document.querySelector('#lista-flujo')
  if (!contenedor) return

  contenedor.innerHTML = PASOS_FLUJO.map(function (paso) {
    return (
      '<li class="paso">' +
      '<span class="paso-num">' +
      paso.numero +
      '</span>' +
      '<div class="paso-cuerpo">' +
      '<h3>' +
      paso.titulo +
      '</h3>' +
      '<p>' +
      paso.texto +
      '</p>' +
      '</div>' +
      '</li>'
    )
  }).join('')
}

function renderRecursos() {
  var contenedor = document.querySelector('#lista-recursos')
  if (!contenedor) return

  contenedor.innerHTML = RECURSOS.map(function (recurso) {
    return (
      '<article class="card">' +
      '<h3>' +
      recurso.titulo +
      '</h3>' +
      '<p class="card-desc">' +
      recurso.texto +
      '</p>' +
      '<a class="link" href="' +
      recurso.url +
      '" target="_blank" rel="noopener">Abrir documentación</a>' +
      '</article>'
    )
  }).join('')
}

function activarMenu() {
  var enlaces = document.querySelectorAll('.nav-links a')
  var secciones = []

  for (var i = 0; i < enlaces.length; i++) {
    var destino = document.querySelector(enlaces[i].getAttribute('href'))
    if (destino) secciones.push(destino)
  }

  var observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return
        enlaces.forEach(function (enlace) {
          var activo = enlace.getAttribute('href') === '#' + entrada.target.id
          enlace.classList.toggle('activo', activo)
        })
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )

  secciones.forEach(function (seccion) {
    observador.observe(seccion)
  })
}

function ponerAnio() {
  var destino = document.querySelector('#anio')
  if (destino) destino.textContent = new Date().getFullYear()
}

document.addEventListener('DOMContentLoaded', function () {
  renderComandos()
  renderFlujo()
  renderRecursos()
  activarMenu()
  ponerAnio()
})
