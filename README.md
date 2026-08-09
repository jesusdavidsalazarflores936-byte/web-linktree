# web-linktree

Sitio de MR.SOFT Tree, una plataforma tipo Linktree para empresas.

Next.js 16 (App Router), React 19, TypeScript y Tailwind v4. Se despliega en Vercel.

## Arrancar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `format`. Antes de hacer push conviene pasar `npm run check`, que corre typecheck y lint juntos.

## Estructura

```
src/
├── app/          rutas; solo componen secciones
│   ├── (marketing)/   páginas con navbar y footer
│   └── (standalone)/  /demo y /admin, a pantalla completa
├── features/     secciones de la web, cada una con su content/
├── components/
│   ├── ui/       primitivos (Button, Card, Section, Field...)
│   ├── layout/   navbar, footer, logo
│   └── mockups/  maquetas reutilizadas en varias páginas
├── lib/          site.config, metadata, cn
└── types/        tipos compartidos
```

Los paréntesis son grupos de rutas: organizan carpetas y permiten layouts distintos sin aparecer en la URL.

La dependencia va en un solo sentido: `app` usa `features`, `features` usa `components`. Nada de abajo importa nada de arriba, y una feature no importa de otra feature. Si dos features necesitan lo mismo, ese componente se sube a `components/`.

## Añadir una sección

Crear `src/features/<nombre>/` con el componente, un `content/` con los textos tipados y un `index.ts` que exporte lo público. Después se inserta en la página correspondiente.

Los textos van siempre en `content/`, no incrustados en el JSX. Así se pueden cambiar sin tocar componentes.

## Convenciones

Archivos en kebab-case, componentes en PascalCase.

Server Components por defecto. `'use client'` solo donde hace falta: ahora mismo `nav-links`, `mobile-menu` y `contact-form`.

Importar desde el índice (`@/components/ui`) y no del archivo suelto.

Las rutas salen de `routes` en `lib/site.config.ts`. Nunca strings sueltos, así renombrar una URL no rompe enlaces.

TypeScript estricto, con `noUnusedLocals` y `noUncheckedIndexedAccess`.

## Diseño

Los tokens están en `src/app/globals.css`, dentro de `@theme`. Tailwind v4 genera las utilidades solo: definir `--color-brand-600` habilita `bg-brand-600`, `text-brand-600` y compañía.

- `ink-950…600` — fondos, de más profundo a más elevado
- `brand-*` — violeta de marca
- `mint-*` — verde de acento
- `fg` y `fg-muted` — texto

Para cambiar la paleta entera basta con editar esos valores. No hay colores escritos a mano en los componentes.

Todo es mobile-first: la clase base es la vista de móvil y los breakpoints solo añaden columnas.

## Formulario de contacto

Sin `NEXT_PUBLIC_CONTACT_ENDPOINT` configurado, el formulario abre el cliente de correo del visitante con el mensaje ya redactado. Funciona sin backend.

Con la variable puesta, hace POST con el JSON `{ nombre, email, empresa, telefono, motivo, mensaje }` y muestra la pantalla de éxito sin recargar. Sirve Formspree o cualquier endpoint propio.

La validación vive en `contact.validation.ts`, aparte del componente.

## Deploy

Importar el repo en Vercel, que detecta Next.js solo. Añadir las variables de `.env.example` en Settings → Environment Variables. Cada push a `main` despliega.

## Variables

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canónica: metadata, Open Graph y sitemap |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Destino del formulario de contacto |

## Pendiente

- `/demo` y `/admin` siguen siendo placeholders
- Favicon e imagen de Open Graph
- Textos legales de privacidad, términos y cookies
- Reemplazar los testimonios de muestra por casos reales
