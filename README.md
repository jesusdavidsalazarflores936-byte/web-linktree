# Web LinkTree — MR.SOFT Tree

Sitio web corporativo de **MR.SOFT Tree**, plataforma tipo Linktree para empresas.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react
**Deploy:** Vercel

---

## Empezar

```bash
npm install
cp .env.example .env.local   # ajusta las variables
npm run dev                  # http://localhost:3000
```

| Comando             | Qué hace                                    |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con recarga en vivo  |
| `npm run build`     | Build de producción                         |
| `npm run start`     | Sirve el build de producción                |
| `npm run typecheck` | Verifica los tipos sin compilar             |
| `npm run lint`      | Pasa ESLint                                 |
| `npm run check`     | typecheck + lint (úsalo antes de cada push) |
| `npm run format`    | Formatea con Prettier                       |

---

## Arquitectura

Tres capas, con una regla de dependencia: **`app` usa `features`, `features` usa `components`,
y `components` no conoce a nadie por encima.** Así ninguna pieza de UI depende de una página concreta.

```
src/
├── app/                    Rutas (App Router). Solo componen, no contienen diseño.
│   ├── (marketing)/        Páginas públicas con navbar y footer
│   │   ├── layout.tsx      Shell de marketing
│   │   ├── page.tsx        Landing
│   │   ├── nosotros/
│   │   ├── informacion/
│   │   ├── precios/
│   │   └── contacto/
│   ├── (standalone)/       Páginas a pantalla completa, sin navbar
│   │   ├── demo/           Página pública de enlaces de ejemplo
│   │   └── admin/          Maqueta del panel administrativo
│   ├── layout.tsx          html, body, fuentes y metadata base
│   ├── globals.css         Design tokens + estilos base
│   ├── sitemap.ts          Se genera solo desde `routes`
│   └── robots.ts
│
├── features/               Secciones de la web, autocontenidas
│   └── hero/
│       ├── hero.content.ts Textos y datos (aquí se edita el copy)
│       ├── hero.tsx        Componente de la sección
│       └── index.ts        Export público de la feature
│
├── components/
│   ├── ui/                 Primitivos reutilizables (Button, Card, Section...)
│   ├── layout/             Navbar, Footer, Logo
│   └── mockups/            Maquetas visuales usadas en varias páginas
│
├── lib/
│   ├── site.config.ts      Marca, contacto, rutas y navegación
│   ├── metadata.ts         Generador de metadata por página
│   └── cn.ts               Une clases y resuelve conflictos de Tailwind
│
└── types/                  Tipos compartidos
```

Los paréntesis en `(marketing)` y `(standalone)` son **grupos de rutas**: organizan
carpetas y permiten layouts distintos sin aparecer en la URL. `/nosotros` es `/nosotros`,
no `/marketing/nosotros`.

### Cómo añadir una sección nueva

1. `src/features/<nombre>/` con tres archivos: `<nombre>.content.ts`, `<nombre>.tsx`, `index.ts`
2. El contenido se escribe tipado en el `.content.ts` — nunca texto suelto en el componente
3. El componente se construye con los primitivos de `@/components/ui`
4. Se inserta en la página correspondiente dentro de `app/`

Si un componente de una feature acaba usándose en dos sitios, se promueve a
`src/components/`. Antes de eso, se queda donde está.

### Convenciones

- **Archivos** en `kebab-case`, **componentes** en `PascalCase`
- **Server Components por defecto.** `'use client'` solo donde hay estado o eventos
  (ahora mismo: `nav-links.tsx` y `mobile-menu.tsx`)
- **Importar siempre desde el índice**: `@/components/ui`, no `@/components/ui/button`
- **Rutas desde `routes`**, nunca strings sueltos — así un cambio de URL no rompe enlaces
- TypeScript en modo estricto, con `noUnusedLocals` y `noUncheckedIndexedAccess`

---

## Diseño

Los tokens viven en `src/app/globals.css`, dentro del bloque `@theme`. Tailwind v4
genera las utilidades automáticamente: definir `--color-brand-600` habilita
`bg-brand-600`, `text-brand-600` y `border-brand-600`.

| Token          | Uso                                     |
| -------------- | --------------------------------------- |
| `ink-950…600`  | Fondos, de más profundo a más elevado   |
| `brand-*`      | Violeta de marca, acción principal      |
| `mint-*`       | Verde de acento y estados de éxito      |
| `fg`, `fg-muted` | Texto principal y secundario          |

Cambiar la paleta completa = editar esos valores. No hay colores escritos a mano
en los componentes.

---

## Estado actual

**Listo**

- Esqueleto del repo, tooling y TypeScript estricto
- Design tokens y estilos base
- Primitivos de UI: Container, Section, SectionHeading, Eyebrow, Button, Card, IconBadge, Avatar
- Navbar (con menú móvil) y Footer
- SEO: metadata por ruta, Open Graph, sitemap y robots automáticos
- Sección **Hero** completa — sirve de plantilla para el resto

**Pendiente**

- Landing: Stats, Features, Panel administrativo, Testimonios, Precios
- Páginas Nosotros, Información, Precios y Contacto (hoy son placeholders)
- Formulario de contacto funcional
- Página `/demo` y maqueta `/admin`
- Favicon y imagen Open Graph

---

## Deploy en Vercel

1. Sube el repo a GitHub
2. En Vercel: *New Project* → importa el repositorio (detecta Next.js solo)
3. Añade las variables de `.env.example` en *Settings → Environment Variables*
4. Cada push a `main` despliega automáticamente

---

## Variables de entorno

| Variable                       | Para qué sirve                                        |
| ------------------------------ | ----------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | URL canónica: metadata, Open Graph y sitemap          |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Destino del formulario de contacto (Formspree u otro) |
