# ⚡️ Cotizador de Prestamo

Este proyecto implementa un simulador de préstamos donde los usuarios pueden ajustar la cantidad y el plazo para calcular el total a pagar y el pago mensual. Utiliza React y Vite para la estructura y funcionalidad de la aplicación.

## Contenido 🎯

1. 📝[Caracteristicas](#caracteristicas)
2. 🛠️[Tecnologías y Herramientas](#tecnologías-y-herramientas)
3. 🚀[Estructura del Proyecto](#estructura-del-proyecto)
4. 🧑‍💻[Uso](#uso)
5. 🏗️[Contribución](#contribución)
6. ✨[Licencia](#licencia)
7. 🙈[Imagen de Referencia](#imagen-de-referencia)
8. 🌐[Ver Proyecto](#ver-proyecto-en-la-web)

## Caracteristicas

- **Ajuste de cantidad:** Los usuarios pueden incrementar o decrementar la cantidad del préstamo.
- **Ajuste de plazo:** Los usuarios pueden seleccionar el plazo en meses.
- **Cálculo automático:** El total a pagar y el pago mensual se calculan automáticamente basado en la cantidad y el - plazo seleccionados.
- **Interfaz responsiva:** Compatible con dispositivos móviles y desktop.

## Tecnologías y Herramientas

- **React:** Librería de JavaScript para construir interfaces de usuario.
- **Vite:** Herramienta para desarrollo y compilación rápida.
- **Tailwind CSS:** Framework CSS para estilos rápidos y responsivos.

## Estructura del Proyecto

- **src/:** Carpeta con el código fuente.
- **components/:** Componentes de React utilizados en el proyecto.
  - **Header.jsx:** Componente del encabezado.
  - **Rango.jsx:** Componente del control de rango para la cantidad.
  - **Button.jsx:** Componente de botón para incrementar y decrementar cantidad.
  - **SelectPlazo.jsx:** Componente para seleccionar el plazo.
  - **Resultado.jsx:** Componente para mostrar el resultado del cálculo.
- **helpers/:** Funciones auxiliares para cálculos.
  - **calcularTotal.js:** Función para calcular el total a pagar.
  - **formatearCantidad.js:** Función para formatear la cantidad.
- **App.jsx:** Componente principal de la aplicación.
- **main.jsx:** Punto de entrada de la aplicación.
- **index.html:** Página principal.
- **vite.config.js:** Configuración de Vite.

## Uso

Para ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio.
2. Instala las dependencias con npm install.
3. Inicia el servidor de desarrollo con `npm run dev`

## Contribución

Si estás interesado en contribuir al proyecto, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama para tu característica (git checkout -b mi-nueva-característica).
Compromete tus cambios (git commit -am 'Añadir alguna característica').
Empuja la rama (git push origin mi-nueva-característica).
Abre un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.

## Imagen de Referencia

![](https://i.postimg.cc/pdHDyhDV/Cotizador-Prestamo-React.png)

## Ver Proyecto en la WEB

Puedes ver el proyecto en funcionamiento [aquí](https://jmatochepascual.github.io/cotizador-Prestamo/).

Todos los derechos reservados Cotizador Prestamo 2024 ©.
