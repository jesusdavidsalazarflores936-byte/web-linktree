# Brief de assets — landing MR.SOFT Tree

Documento para el diseñador. Tres bloques de material: elementos 3D del hero,
capturas del panel administrativo y logos de clientes.

---

## 1. Elementos 3D flotantes del hero

Ocho piezas que flotan alrededor del teléfono con la cinemática. Cada una
representa un diferenciador real del producto, no adorno: si el visitante solo
mira las imágenes y no lee, debería entender qué hace MR.SOFT Tree.

| # | Archivo | Qué es | Qué argumento sostiene |
| --- | --- | --- | --- |
| 1 | `qr.png` | Código QR flotando, con relieve y esquinas redondeadas | El diferenciador principal: QR por cada tarjeta, catálogo y sucursal |
| 2 | `whatsapp.png` | Burbuja de WhatsApp | Generador WhatsApp Pro con mensaje precargado |
| 3 | `megafono.png` | Megáfono o bocina inclinado | Carruseles de campaña y banners promocionales |
| 4 | `folleto.png` | Folleto A4 impreso, ligeramente doblado, con un QR visible | El puente al mundo físico: counters, mesas, empaques |
| 5 | `tienda.png` | Escaparate o local pequeño, tipo isométrico | Vitrinas: una landing por sucursal |
| 6 | `grafico.png` | Barras ascendentes o gráfico de conversión | Analítica de clics y CTR por slide |
| 7 | `play.png` | Botón de reproducción con volumen | Player de video dentro de la landing |
| 8 | `paleta.png` | Paleta de color o gota de pintura | Personalización total de marca |

Si sobra tiempo, dos opcionales: `rayo.png` (velocidad, compresión WebP) y
`enlace.png` (eslabón de cadena, la idea del link único).

### Especificación técnica

**Formato de entrega:** PNG-24 con canal alfa, fondo recortado. No hace falta
que conviertas a WebP — se hace en el pipeline del proyecto, que optimiza mejor
y conserva el PNG como maestro.

**Lienzo:** 1024 × 1024 px, cuadrado, el objeto centrado dejando un 10% de aire
por lado. En la web se muestran entre 90 y 180 px, así que sobra resolución para
pantallas retina.

**Sombra:** ninguna sombra quemada en la imagen. Las sombras y los halos los
aplica el código, y así se adaptan al fondo oscuro sin cercos grises.

**Coherencia entre las ocho piezas** — esto es lo que separa un set profesional
de ocho iconos sueltos:

- Misma altura de cámara y misma inclinación aproximada
- Luz principal desde arriba a la izquierda en todas
- Mismo nivel de brillo y de redondeo de aristas
- Peso visual parecido: ninguna debe verse el doble de grande que las demás

**Paleta.** Fondo del sitio muy oscuro (`#0A0A14`), así que las piezas necesitan
luz propia.

| Color | Hex | Uso |
| --- | --- | --- |
| Violeta de marca | `#7C3AED` | Color dominante del set |
| Violeta claro | `#9D6BFF` | Luces y reflejos |
| Verde menta | `#22E0A1` | Acentos, una o dos piezas como máximo |
| Blanco roto | `#F1F5F9` | Superficies neutras |

Las piezas con identidad propia mantienen su color real: WhatsApp en su verde
`#25D366`. No lo tiñas de violeta, se pierde el reconocimiento inmediato.

**Peso:** por debajo de 500 KB cada PNG. Si alguna se dispara, prioriza reducir
el detalle antes que la resolución.

---

## 2. Capturas del panel administrativo

Seis capturas, según el documento comercial.

| # | Archivo | Qué muestra |
| --- | --- | --- |
| 1 | `panel-dashboard.png` | Dashboard V2: los 12 accesos rápidos, con el tile del QR PDF destacado |
| 2 | `panel-cards.png` | Módulo de enlaces, a ser posible en pleno arrastre de una tarjeta |
| 3 | `panel-diseno.png` | Panel de Diseño con el celular de preview fijo a la derecha |
| 4 | `panel-multimedia.png` | Grid multimedia y el modal de video reproduciéndose |
| 5 | `panel-vitrinas.png` | Varias sucursales listadas con su URL y su QR |
| 6 | `panel-analytics.png` | Métricas de clics y CTR por slide |

**Cómo capturarlas:** navegador a pantalla completa en Full HD (1920 × 1080),
sin barra de marcadores, sin extensiones visibles y sin pestañas personales.
PNG. Datos de demostración creíbles — nada de "asdasd" ni "prueba 1".

Usa una marca ficticia coherente en las seis, para que se lean como el mismo
producto. El documento comercial sugiere *Café Gourmet Don Pedro*, café `#6F4E37`
y dorado `#D4AF37`.

---

## 3. Logos de clientes

Para el carrusel de "empresas que confían en nosotros".

**Formato preferido: SVG.** Escala sin perder nitidez y pesa una fracción. Si no
hay SVG, PNG con fondo transparente de 600 px de ancho mínimo.

**Versión monocroma en blanco** siempre que exista. El carrusel va sobre fondo
oscuro y los logos a todo color con fondos blancos incrustados quedan como
parches. Si el cliente no tiene versión blanca, pásame el logo original y lo
adaptamos.

**Nombrado:** el identificador de la empresa en minúsculas y con guiones —
`corporacion-andina.svg`, `cafe-don-pedro.svg`.

**Recorte:** sin márgenes sobrantes alrededor del logotipo. El carrusel iguala
las alturas por código, y un margen invisible descuadra la fila entera.

---

## 4. Capturas de los Linktrees para la cinemática

Tres cortes verticales por cada Linktree, siguiendo el orden de la página.

**Dispositivo:** Chrome DevTools, iPhone 14 Pro (393 × 852) con *device pixel
ratio* en 3. Cada archivo debe salir **1179 × 2556 px exactos**.

**Para que los tres encajen sin salto**, en la consola del navegador:

```js
window.scrollTo(0, 0)                     // capturas la 1
window.scrollTo(0, window.innerHeight)    // capturas la 2
window.scrollTo(0, window.innerHeight * 2) // capturas la 3
```

Entre cada una: `Ctrl+Shift+P` → *Capture screenshot*. No recortes nada a mano
después; si los tres anchos no son idénticos, el desplazamiento da un tirón
lateral.

**Ojo con los elementos flotantes.** Los botones de compartir y de QR van fijos
en pantalla, así que aparecerían repetidos en los tres cortes y la unión
cantaría. Antes de capturar el segundo y el tercero, ocúltalos desde el
inspector con `display: none`.

**Nombrado:** `<empresa>-1.png`, `<empresa>-2.png`, `<empresa>-3.png`.

---

## 5. Dónde dejar cada cosa

```
public/
├── examples/    capturas de los Linktrees
├── panel/       capturas del panel administrativo
├── logos/       logos de clientes
└── 3d/          elementos 3D del hero
```
