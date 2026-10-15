/* Datos del sitio RutaGit */

var CATEGORIAS = [
  {
    id: 'configuracion',
    titulo: 'Configuración inicial',
    descripcion:
      'Datos de identidad que Git guarda en cada commit. Se configuran una sola vez por equipo.',
    comandos: [
      { cmd: 'git config --global user.name "Nombre"', desc: 'Define el autor de los commits.' },
      { cmd: 'git config --global user.email "correo"', desc: 'Define el correo del autor.' },
      { cmd: 'git config --list', desc: 'Muestra la configuración activa.' }
    ]
  },
  {
    id: 'repositorio',
    titulo: 'Repositorio local',
    descripcion:
      'Comandos que crean el repositorio y registran los cambios en el historial del proyecto.',
    comandos: [
      { cmd: 'git init', desc: 'Inicializa un repositorio en la carpeta actual.' },
      { cmd: 'git status', desc: 'Muestra los archivos modificados y preparados.' },
      { cmd: 'git add .', desc: 'Prepara todos los cambios para el siguiente commit.' },
      { cmd: 'git commit -m "mensaje"', desc: 'Guarda los cambios preparados en el historial.' },
      { cmd: 'git log --oneline', desc: 'Lista el historial de commits en formato corto.' }
    ]
  },
  {
    id: 'ramas',
    titulo: 'Ramas',
    descripcion:
      'Las ramas permiten trabajar en una función nueva sin tocar la versión publicada del sitio.',
    comandos: [
      { cmd: 'git branch', desc: 'Lista las ramas del repositorio.' },
      { cmd: 'git checkout -b nueva-rama', desc: 'Crea una rama y cambia a ella.' },
      { cmd: 'git switch main', desc: 'Regresa a la rama principal.' },
      { cmd: 'git merge nueva-rama', desc: 'Fusiona los cambios de una rama en la actual.' }
    ]
  },
  {
    id: 'remoto',
    titulo: 'Repositorio remoto',
    descripcion:
      'Sincronizan el repositorio local con GitHub, que funciona como respaldo y punto de colaboración.',
    comandos: [
      { cmd: 'git remote add origin URL', desc: 'Enlaza el repositorio local con el remoto.' },
      { cmd: 'git push -u origin main', desc: 'Sube la rama principal por primera vez.' },
      { cmd: 'git push', desc: 'Sube los commits nuevos al remoto.' },
      { cmd: 'git pull', desc: 'Descarga y fusiona los cambios del remoto.' },
      { cmd: 'git clone URL', desc: 'Copia un repositorio remoto a la máquina local.' }
    ]
  }
]

var PASOS_FLUJO = [
  {
    numero: '01',
    titulo: 'Rama principal estable',
    texto:
      'La rama main guarda la versión publicada del sitio. Nunca se trabaja directamente sobre ella cuando el cambio es grande. Revisado por Yair Guzmán.'
  },
  {
    numero: '02',
    titulo: 'Rama de trabajo',
    texto:
      'Cada cambio nuevo se desarrolla en una rama aparte con un nombre que describe la tarea, por ejemplo seccion-recursos.'
  },
  {
    numero: '03',
    titulo: 'Pull Request',
    texto:
      'Al terminar se abre un Pull Request en GitHub. Ahí se revisan las diferencias antes de integrarlas a main.'
  },
  {
    numero: '04',
    titulo: 'Vista previa automática',
    texto:
      'La plataforma de despliegue genera una URL de vista previa para la rama, de modo que el cambio se prueba antes de publicarlo.'
  },
  {
    numero: '05',
    titulo: 'Fusión y despliegue',
    texto:
      'Cuando el Pull Request se fusiona con main, el despliegue continuo publica la nueva versión en producción sin intervención manual.'
  }
]

var RECURSOS = [
  {
    titulo: 'Documentación oficial de Git',
    texto: 'Libro Pro Git en español, referencia completa del sistema de control de versiones.',
    url: 'https://git-scm.com/book/es/v2'
  },
  {
    titulo: 'Documentación de GitHub',
    texto: 'Guías sobre repositorios, ramas, Pull Requests y flujos de colaboración.',
    url: 'https://docs.github.com/es'
  },
  {
    titulo: 'Documentación de Vercel',
    texto: 'Manual de la plataforma de despliegue continuo utilizada en esta práctica.',
    url: 'https://vercel.com/docs'
  }
]
