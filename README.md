# IBR Punta Arenas - Sitio Web Iglesia

Sitio web desarrollado para un cliente: una iglesia en Punta Arenas. Incluye páginas informativas sobre la comunidad, creencias, horarios de actividades y formulario de contacto.

> Nota: Proyecto realizado como trabajo freelance. Desplegado en Netlify.

## Funcionalidades

- Página de inicio con banner hero y secciones informativas
- Página "Quiénes Somos" con historia de la comunidad
- Página "En Qué Creemos" con declaración de fe
- Horarios de actividades y servicios
- Página de contacto
- Navegación con React Router
- Diseño responsive con Tailwind CSS
- Decoradores visuales personalizados (cruces, líneas)

## Tecnologías

- React 19
- TypeScript
- Vite
- React Router 7
- Tailwind CSS 4

## Estructura del Proyecto

```
ibrpuntaarenas-react/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── QuienesSomos.tsx
│   │   ├── EnQueCreemos.tsx
│   │   ├── Horarios.tsx
│   │   └── Contacto.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── ContentSection.tsx
│   │   ├── InviteSection.tsx
│   │   └── ...
│   ├── data/
│   ├── App.tsx
│   └── main.tsx
├── netlify.toml
├── vite.config.ts
└── package.json
```
