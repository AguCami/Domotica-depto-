/*
 * PLANO DEL DEPARTAMENTO
 * ----------------------
 * Este archivo describe el departamento. Editalo con tus medidas reales y
 * recargá index.html para ver los cambios.
 *
 * Sistema de coordenadas (en metros, visto desde arriba):
 *   x → hacia la derecha
 *   z → hacia abajo (hacia "el fondo" del plano)
 *   y → altura desde el piso (solo en dispositivos)
 *
 * Tip: en el visor, pasá el mouse por el piso y abajo a la izquierda vas a ver
 * las coordenadas exactas (x, z) para ubicar paredes, muebles y dispositivos.
 *
 * ⚠ Los valores de abajo son un EJEMPLO de un 3 ambientes de ~62 m².
 *   Reemplazalos por los de tu departamento.
 */
window.PLANO = {
  nombre: "Mi departamento",
  alturaParedes: 2.6,
  espesorExterior: 0.2,
  espesorInterior: 0.1,

  /* Ambientes: rectángulos. (x, z) = esquina superior izquierda.
     piso: "madera" | "porcelanato" | "ceramica" | "deck" */
  ambientes: [
    { id: "living",      nombre: "Living comedor",       x: 0,   z: 0,    ancho: 6,   largo: 4.2, piso: "madera" },
    { id: "balcon",      nombre: "Balcón",               x: 0,   z: -1.4, ancho: 6,   largo: 1.4, piso: "deck", exterior: true },
    { id: "cocina",      nombre: "Cocina",               x: 6,   z: 0,    ancho: 3.6, largo: 2.6, piso: "porcelanato" },
    { id: "hall",        nombre: "Hall de entrada",      x: 6,   z: 2.6,  ancho: 3.6, largo: 1.6, piso: "porcelanato" },
    { id: "pasillo",     nombre: "Pasillo",              x: 3.6, z: 4.2,  ancho: 2,   largo: 1.2, piso: "madera" },
    { id: "dormitorio",  nombre: "Dormitorio principal", x: 0,   z: 4.2,  ancho: 3.6, largo: 3.4, piso: "madera" },
    { id: "bano",        nombre: "Baño",                 x: 3.6, z: 5.4,  ancho: 2,   largo: 2.2, piso: "ceramica" },
    { id: "dormitorio2", nombre: "Dormitorio 2",         x: 5.6, z: 4.2,  ancho: 4,   largo: 3.4, piso: "madera" },
  ],

  /* Paredes: segmentos de a = [x, z] a b = [x, z].
     tipo: "exterior" | "interior" | "baranda" (baranda de vidrio para balcones) */
  paredes: [
    // Perímetro
    { a: [0, 0],     b: [9.6, 0],   tipo: "exterior" },
    { a: [9.6, 0],   b: [9.6, 7.6], tipo: "exterior" },
    { a: [9.6, 7.6], b: [0, 7.6],   tipo: "exterior" },
    { a: [0, 7.6],   b: [0, 0],     tipo: "exterior" },
    // Interiores
    { a: [6, 0],     b: [6, 2.6],   tipo: "interior" },  // living | cocina
    { a: [6, 2.6],   b: [9.6, 2.6], tipo: "interior" },  // cocina | hall
    { a: [0, 4.2],   b: [3.6, 4.2], tipo: "interior" },  // living | dormitorio
    { a: [5.6, 4.2], b: [9.6, 4.2], tipo: "interior" },  // living/hall | dormitorio 2
    { a: [3.6, 4.2], b: [3.6, 7.6], tipo: "interior" },  // dormitorio | pasillo/baño
    { a: [5.6, 4.2], b: [5.6, 7.6], tipo: "interior" },  // pasillo/baño | dormitorio 2
    { a: [3.6, 5.4], b: [5.6, 5.4], tipo: "interior" },  // pasillo | baño
    // Balcón
    { a: [0, 0],     b: [0, -1.4],  tipo: "baranda" },
    { a: [0, -1.4],  b: [6, -1.4],  tipo: "baranda" },
    { a: [6, -1.4],  b: [6, 0],     tipo: "baranda" },
  ],

  /* Aberturas: se ubican sobre la pared que pasa por el punto "en" = [x, z].
     tipo: "puerta" | "paso" (vano sin hoja) | "ventana" | "ventanal" (corrediza a piso)
     ventana: alfeizar = altura desde el piso, alto = alto del vidrio.
     puerta: lado = 1 o -1 (hacia qué lado abre la hoja). */
  aberturas: [
    { id: "ventanal-living", tipo: "ventanal", en: [3, 0],      ancho: 3.2 },
    { id: "ventana-cocina",  tipo: "ventana",  en: [7.8, 0],    ancho: 1.2, alfeizar: 1.05, alto: 1.05 },
    { id: "puerta-entrada",  tipo: "puerta",   en: [9.6, 3.4],  ancho: 0.9, lado: 1 },
    { id: "paso-cocina",     tipo: "paso",     en: [6, 1.9],    ancho: 1.1 },
    { id: "puerta-cocina",   tipo: "puerta",   en: [6.9, 2.6],  ancho: 0.8, lado: -1 },
    { id: "puerta-dorm",     tipo: "puerta",   en: [3.6, 4.8],  ancho: 0.8, lado: 1 },
    { id: "puerta-dorm2",    tipo: "puerta",   en: [5.6, 4.8],  ancho: 0.8, lado: -1 },
    { id: "puerta-bano",     tipo: "puerta",   en: [4.6, 5.4],  ancho: 0.7, lado: 1 },
    { id: "ventana-dorm",    tipo: "ventana",  en: [1.8, 7.6],  ancho: 1.6, alfeizar: 0.9, alto: 1.3 },
    { id: "ventana-dorm2",   tipo: "ventana",  en: [7.6, 7.6],  ancho: 1.6, alfeizar: 0.9, alto: 1.3 },
    { id: "ventana-bano",    tipo: "ventana",  en: [4.6, 7.6],  ancho: 0.6, alfeizar: 1.6, alto: 0.5 },
  ],

  /* Muebles: pos = [x, z] del centro, rot = grados (0 = el frente mira hacia +z).
     tipos: sofa, mesa_ratona, rack_tv, alfombra, mesa_comedor, silla, mesada,
            heladera, cama, mesa_luz, placard, escritorio, inodoro, lavatorio,
            ducha, planta, recibidor */
  muebles: [
    // Living comedor
    { tipo: "alfombra",     pos: [1.75, 2.0], ancho: 2.4, largo: 1.8 },
    { tipo: "rack_tv",      pos: [0.32, 2.0], rot: 90 },
    { tipo: "sofa",         pos: [3.05, 2.0], rot: -90, ancho: 2.2 },
    { tipo: "mesa_ratona",  pos: [1.8, 2.0],  rot: 90 },
    { tipo: "mesa_comedor", pos: [4.5, 1.15] },
    { tipo: "planta",       pos: [5.6, 3.8] },
    // Cocina
    { tipo: "mesada",       pos: [7.8, 0.4],  ancho: 3.4 },
    { tipo: "heladera",     pos: [9.15, 1.9], rot: -90 },
    // Hall
    { tipo: "recibidor",    pos: [8.2, 4.0],  rot: 180 },
    // Dormitorio principal
    { tipo: "cama",         pos: [1.8, 6.5],  rot: 180, ancho: 1.6, largo: 2.0 },
    { tipo: "mesa_luz",     pos: [0.7, 7.3],  rot: 180 },
    { tipo: "mesa_luz",     pos: [2.9, 7.3],  rot: 180 },
    { tipo: "placard",      pos: [1.2, 4.55], ancho: 2.2 },
    // Dormitorio 2
    { tipo: "cama",         pos: [8.85, 6.5], rot: 180, ancho: 1.0, largo: 1.95 },
    { tipo: "escritorio",   pos: [6.0, 6.6],  rot: 90 },
    { tipo: "placard",      pos: [8.2, 4.55], ancho: 2.6 },
    // Baño
    { tipo: "lavatorio",    pos: [3.9, 6.1],  rot: 90 },
    { tipo: "inodoro",      pos: [3.95, 7.15], rot: 90 },
    { tipo: "ducha",        pos: [5.1, 6.95], ancho: 0.9, largo: 1.2 },
    // Balcón
    { tipo: "planta",       pos: [0.4, -1.0] },
    { tipo: "planta",       pos: [5.6, -1.0] },
    { tipo: "silla",        pos: [2.4, -0.7], rot: 160 },
    { tipo: "silla",        pos: [3.3, -0.7], rot: 200 },
  ],

  /* Dispositivos de domótica.
     pos = [x, y, z]  (y = altura en metros; en luces de techo se puede omitir)
     tipos: luz, enchufe, persiana, aire, cerradura, camara, sensor_movimiento,
            sensor_apertura, humo, agua, clima, hub, parlante
     luz → estilo: "techo" | "colgante" | "aplique"
     persiana → abertura: id de la abertura que cubre */
  dispositivos: [
    { id: "luz-living",     tipo: "luz", nombre: "Luz living",          ambiente: "living",      pos: [1.8, null, 2.0] },
    { id: "luz-comedor",    tipo: "luz", nombre: "Colgante comedor",    ambiente: "living",      pos: [4.5, null, 1.15], estilo: "colgante" },
    { id: "luz-cocina",     tipo: "luz", nombre: "Luz cocina",          ambiente: "cocina",      pos: [7.8, null, 1.3] },
    { id: "luz-hall",       tipo: "luz", nombre: "Luz hall",            ambiente: "hall",        pos: [7.8, null, 3.4] },
    { id: "luz-pasillo",    tipo: "luz", nombre: "Luz pasillo",         ambiente: "pasillo",     pos: [4.6, null, 4.8] },
    { id: "luz-dorm",       tipo: "luz", nombre: "Luz dormitorio",      ambiente: "dormitorio",  pos: [1.8, null, 5.9] },
    { id: "luz-dorm2",      tipo: "luz", nombre: "Luz dormitorio 2",    ambiente: "dormitorio2", pos: [7.6, null, 5.9] },
    { id: "luz-bano",       tipo: "luz", nombre: "Luz baño",            ambiente: "bano",        pos: [4.6, null, 6.4] },
    { id: "luz-balcon",     tipo: "luz", nombre: "Aplique balcón",      ambiente: "balcon",      pos: [5.2, 2.1, 0.12], estilo: "aplique" },

    { id: "persiana-living", tipo: "persiana", nombre: "Persiana living",      ambiente: "living",      abertura: "ventanal-living", abierta: true },
    { id: "persiana-dorm",   tipo: "persiana", nombre: "Persiana dormitorio",  ambiente: "dormitorio",  abertura: "ventana-dorm",    abierta: true },
    { id: "persiana-dorm2",  tipo: "persiana", nombre: "Persiana dormitorio 2", ambiente: "dormitorio2", abertura: "ventana-dorm2",  abierta: true },

    { id: "aire-living",    tipo: "aire",  nombre: "Aire living",       ambiente: "living",      pos: [1.8, 2.25, 4.04],  rot: 180 },
    { id: "aire-dorm",      tipo: "aire",  nombre: "Aire dormitorio",   ambiente: "dormitorio",  pos: [0.12, 2.25, 6.3], rot: 90 },

    { id: "tv",             tipo: "enchufe", nombre: "Enchufe TV",        ambiente: "living", pos: [0.12, 0.3, 2.9],  rot: 90 },
    { id: "cafetera",       tipo: "enchufe", nombre: "Enchufe cafetera",  ambiente: "cocina", pos: [6.6, 1.05, 0.12] },

    { id: "cerradura",      tipo: "cerradura",        nombre: "Cerradura inteligente", ambiente: "hall",   pos: [9.52, 1.0, 3.8], rot: -90 },
    { id: "puerta-sensor",  tipo: "sensor_apertura",  nombre: "Sensor puerta entrada", ambiente: "hall",   pos: [9.5, 2.05, 3.0] },
    { id: "mov-hall",       tipo: "sensor_movimiento", nombre: "Movimiento hall",     ambiente: "hall",   pos: [6.12, 2.35, 4.08] },
    { id: "mov-living",     tipo: "sensor_movimiento", nombre: "Movimiento living",   ambiente: "living", pos: [0.12, 2.35, 0.12] },
    { id: "camara-living",  tipo: "camara",  nombre: "Cámara living",     ambiente: "living", pos: [5.85, 2.4, 0.15] },
    { id: "humo-cocina",    tipo: "humo",    nombre: "Detector de humo",  ambiente: "cocina", pos: [8.4, 2.57, 1.6] },
    { id: "agua-cocina",    tipo: "agua",    nombre: "Fuga de agua cocina", ambiente: "cocina", pos: [7.8, 0.02, 0.5] },
    { id: "agua-bano",      tipo: "agua",    nombre: "Fuga de agua baño", ambiente: "bano",   pos: [5.1, 0.07, 7.3] },
    { id: "clima-bano",     tipo: "clima",   nombre: "Temp. y humedad baño", ambiente: "bano", pos: [5.52, 1.6, 5.8] },
    { id: "clima-living",   tipo: "clima",   nombre: "Temp. y humedad living", ambiente: "living", pos: [3.2, 1.5, 4.13] },
    { id: "hub",            tipo: "hub",     nombre: "Hub / router",      ambiente: "hall",   pos: [8.2, 0.85, 4.0] },
    { id: "parlante",       tipo: "parlante", nombre: "Asistente de voz", ambiente: "living", pos: [0.3, 0.55, 1.3] },
  ],

  /* Automatizaciones simples: cuando un sensor cambia de estado, se ejecutan acciones.
     En el visor, tocá un sensor para simular que se dispara. */
  automatizaciones: [
    { nombre: "Llegada a casa", si: { dispositivo: "puerta-sensor", estado: true },
      entonces: [{ dispositivo: "luz-hall", encender: true }, { dispositivo: "luz-living", encender: true }] },
    { nombre: "Luz por movimiento en el hall", si: { dispositivo: "mov-hall", estado: true },
      entonces: [{ dispositivo: "luz-hall", encender: true }] },
    { nombre: "Fuga de agua: cortar cafetera", si: { dispositivo: "agua-cocina", estado: true },
      entonces: [{ dispositivo: "cafetera", encender: false }] },
    { nombre: "Humo: abrir persianas y apagar aires", si: { dispositivo: "humo-cocina", estado: true },
      entonces: [{ dispositivo: "persiana-living", encender: true }, { dispositivo: "aire-living", encender: false }, { dispositivo: "aire-dorm", encender: false }] },
  ],
};
