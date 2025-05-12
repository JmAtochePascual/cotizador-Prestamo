# Cotizador de Prestamo

Este proyecto implementa un simulador de préstamos donde los usuarios pueden ajustar la cantidad y el plazo para calcular el total a pagar y el pago mensual. Utiliza React y Vite para la estructura y funcionalidad de la aplicación.

## Caracteristicas

- **Ajuste de cantidad:** Los usuarios pueden incrementar o decrementar la cantidad del préstamo.
- **Ajuste de plazo:** Los usuarios pueden seleccionar el plazo en meses.
- **Cálculo automático:** El total a pagar y el pago mensual se calculan automáticamente basado en la cantidad y el - plazo seleccionados.
- **Interfaz responsiva:** Compatible con dispositivos móviles y desktop.

## Tecnologías

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

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

## Instalación

> Para trabajar con este proyecto, necesitarás tener instalado:
>
> - **Node.js** (versión 14 o superior)

## Uso

Para visualizar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

```
git clone https://github.com/JMatochePascual/cotizador-Prestamo.git
```

2. Navega al directorio del proyecto:

```
cd cotizador-Prestamo
```

3. Instala las dependencias necesarias:

```
npm install
```

4. Inicia el servidor en modo desarrollo:

```
npm run dev
```

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos en orden:

1. Haz un fork del repositorio

2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature-name
   ```
3. Realiza y confirma tus cambios:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Sube los cambios a tu repositorio:
   ```bash
   git push origin feature-name
   ```
5. Abre un Pull Request desde tu repositorio hacia el proyecto principal

## Licencia

Este proyecto se encuentra disponible bajo la licencia MIT. Puedes consultar los términos completos [aquí](https://opensource.org/licenses/MIT).

Desarrollado con 💚 por JMCode | © 2025 - Transformando ideas en soluciones digitales.
