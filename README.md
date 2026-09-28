# pol-r

Sitio de pol-r (aislamiento térmico e impermeabilización en Ciudad Juárez).

La app de Lovable vive en la **raíz del repo** (`src/`, `public/`, `vite.config.ts`) para que se respeten imágenes, CSS y el editor. `packages/` queda listo para código compartido. El deploy a [Render](https://render.com) está en `render.yaml`.

## Desarrollo

Necesitas [Bun](https://bun.sh) (o Node 22).

```sh
bun install
bun run dev
```

## Publicar en Render

1. Sube este repo a GitHub.
2. En Render: **New → Blueprint** y selecciona el repositorio.
3. Build: `bun run build` · Start: `node .output/server/index.mjs`
4. Root Directory: raíz del repo.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
