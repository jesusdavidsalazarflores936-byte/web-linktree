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

### Prompts, si se generan con IA

Van en inglés porque los modelos de imagen responden mucho mejor. La primera
parte es común a las ocho y es lo que garantiza que parezcan un set y no ocho
iconos sueltos — no la cambies entre piezas.

**Base común:**

```
3D render of a single object, centered, isolated on a plain background,
three-quarter view slightly from above, soft studio lighting from the top left,
glossy plastic material with soft bevels and gentle rim light, vibrant violet
#7C3AED as the dominant color with #9D6BFF highlights, clean minimal design,
no text, no ground shadow, square composition, product render style
```

**Añade a esa base, según la pieza:**

| Archivo | Continuación del prompt |
| --- | --- |
| `qr.png` | `a floating QR code tile with rounded corners and thick raised modules, slight thickness like a physical card` |
| `whatsapp.png` | `a rounded chat bubble with the WhatsApp phone glyph, keeping its signature green #25D366 instead of violet` |
| `megafono.png` | `a megaphone tilted upward, with small abstract sound waves` |
| `folleto.png` | `an A4 paper flyer, slightly curled at one corner, with a small QR code printed on it` |
| `tienda.png` | `a small isometric storefront with an awning and a shop window` |
| `grafico.png` | `three ascending bar chart columns with a rising arrow, mint green #22E0A1 accent on the tallest bar` |
| `play.png` | `a rounded play button with a small speaker icon beside it` |
| `paleta.png` | `an artist palette with three paint blobs, one violet, one mint green #22E0A1, one white` |

**Después de generar**, hay que recortar el fondo y guardar en PNG con canal
alfa. Los modelos suelen dejar un fondo gris o degradado aunque se les pida
transparente.

**Y revisar las ocho juntas antes de dar por buena ninguna.** Es habitual que
salgan bien por separado y no peguen entre sí: una más brillante, otra con la
cámara más baja. Si dos desentonan, se regeneran con el mismo prompt base.

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

**Una sola imagen por Linktree, con la página entera.** Se descartó partirla en
tres: las costuras se notaban al desplazar y había que cuadrar los anchos a mano.

No uses *Capture full size screenshot*: Chrome recompone la imagen y pierde
resolución. El truco es agrandar el viewport hasta que quepa toda la página y
hacer una captura normal, que sí sale a máxima calidad.

**Paso a paso:**

1. Abre el Linktree, `F12` y `Ctrl+Shift+M`
2. En la consola, mide la página:
   ```js
   document.body.scrollHeight
   ```
3. En el desplegable de dispositivo elige **Responsive** — con un modelo concreto
   seleccionado, Chrome bloquea los campos de tamaño
4. Ancho **430**, alto **el número del paso 2 más unos 50 px de margen**
5. Activa el *device pixel ratio* desde el menú **⋮** y ponlo en **3**. Si el alto
   resultante supera los 15 000 px, bájalo a 2 o la tarjeta gráfica no lo renderiza
6. Baja hasta el final de la página y vuelve arriba, para que carguen las imágenes
   diferidas
7. Oculta los botones flotantes de compartir y QR: selecciónalos en **Elements** y
   pulsa la tecla **H**
8. Espera un par de segundos y `Ctrl+Shift+P` → *Capture screenshot*

**El ancho debe ser 430 en todos los Linktrees.** Si mezclas anchos, unos se verán
más nítidos que otros dentro del mismo marco de teléfono.

**Nombrado:** `<empresa>.png`, en minúsculas y con guiones.

Entrégalas en PNG. La conversión a WebP se hace en el proyecto — las tres primeras
pasaron de 14,6 MB a 832 KB en total, sin diferencia visible. Las medidas de cada
archivo las lee el propio código durante el build, así que no hay que apuntarlas
en ningún sitio.

---

## 5. Dónde dejar cada cosa

```
public/
├── examples/    capturas de los Linktrees
├── panel/       capturas del panel administrativo
├── logos/       logos de clientes
└── 3d/          elementos 3D del hero
```
