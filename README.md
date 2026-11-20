# Domótica depto: plano 3D

Visor 3D del departamento con los dispositivos de domótica ubicados en su lugar real.
Funciona en el navegador, sin instalar nada (usa Three.js desde CDN).

## Cómo abrirlo

Abrí `index.html` con doble clic (Chrome, Edge o Firefox). Necesita internet para cargar Three.js.

## Qué se puede hacer

- **3D / Planta**: vista en perspectiva o vista de arriba tipo plano, con corte horizontal a 1,1 m.
- **Día / Noche**: con el sol entrando por las ventanas, o con la iluminación artificial.
- **Paredes altas / bajas**: para ver adentro de los ambientes.
- **Dispositivos**: tocá un marcador (o el interruptor en el panel) para prender luces, subir o bajar persianas, prender el aire, etc.
- **Sensores**: el botón "Simular" dispara el sensor y ejecuta las automatizaciones asociadas.
- **Coordenadas**: al pasar el mouse por el piso, abajo a la izquierda aparece la posición (x, z) en metros y el ambiente. Sirve para ubicar cosas en `plano.js`.

## Cómo cargar tu departamento

Todo el plano está en **`plano.js`**. Los valores que trae son un ejemplo (3 ambientes, ~62 m²). Editá:

| Sección            | Qué define |
|--------------------|------------|
| `ambientes`        | Rectángulos con nombre, posición, medidas y tipo de piso |
| `paredes`          | Segmentos exteriores, interiores o barandas de balcón |
| `aberturas`        | Puertas, vanos, ventanas y ventanales (se ubican solas sobre la pared que pasa por el punto `en`) |
| `muebles`          | Sofá, camas, mesada, placards, etc. con posición y rotación |
| `dispositivos`     | Luces, enchufes, persianas, aires, cerradura, cámaras y sensores |
| `automatizaciones` | Reglas "si el sensor X se activa, entonces..." |

Coordenadas en metros: `x` hacia la derecha, `z` hacia abajo del plano, `y` es la altura.
Tomá como origen (0, 0) una esquina del departamento y medí desde ahí.
