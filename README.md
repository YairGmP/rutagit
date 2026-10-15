# RutaGit

Guía rápida de control de versiones con Git, GitHub y despliegue continuo.

Proyecto desarrollado para la asignatura **Desarrollo Web Integral**, Unidad 2
(Control de versiones), de la Universidad Tecnológica de la Riviera Maya.

## Descripción

Sitio web de una página principal con cuatro secciones:

- **Inicio**: portada del sitio.
- **Comandos**: comandos de Git agrupados por etapa de trabajo.
- **Flujo de trabajo**: los cinco pasos del flujo con ramas y Pull Request.
- **Recursos**: documentación oficial de consulta.

## Tecnologías

- HTML5
- CSS3 con variables personalizadas
- JavaScript sin dependencias externas

El sitio no utiliza gestores de paquetes ni proceso de compilación. El
contenido de las secciones se genera en el navegador a partir del archivo
`assets/js/data.js`.

## Estructura

```
rutagit/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        ├── data.js
        └── app.js
```

## Ejecución local

Abrir el archivo `index.html` directamente en el navegador.

## Despliegue

El repositorio está conectado a Vercel. Cada cambio que se sube a la rama
`main` genera un despliegue automático en producción, y cada rama con Pull
Request genera una URL de vista previa.

## Autor

Yair Gamaliel Guzmán Pérez - Matrícula 2302133 - Grupo TI-91
