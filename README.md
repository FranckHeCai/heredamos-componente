# Descripción

Este proyecto incluye un componente para la prueba técnica de Heredados como Becario de desarrollo web. El componente está construido con React, estilizado completamente con Tailwind CSS y utiliza Zustand para el manejo global del estado de los pasos.

## Características principales

- **Visualización de pasos:** Muestra el estado de cada fase (actual, pendiente) de forma visual y clara.
- **Estilizado con Tailwind:** Todos los estilos del componente utilizan clases utilitarias de Tailwind CSS.
- **Estado global con Zustand:** El estado del paso actual y los estados de cada fase se almacenan y gestionan con Zustand, permitiendo acceso global y persistencia si se requiere.

## Ejemplo de uso

```tsx
import StepFlow from "./components/StepFlow";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <StepFlow />
    </div>
  );
}
```

## Instalación de dependencias

Se utilizan los paquetes de Tailwind CSS y Zustand por lo tanto habrá que instalarlos:

```bash
npm install
```

---
