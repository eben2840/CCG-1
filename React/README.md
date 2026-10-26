# Coastline Citadel Group website

The Coastline Citadel Group consulting website, built with React, TanStack Start, Vite and Tailwind CSS.

## Development

You need Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
npm install
npm run dev      # http://localhost:8080
```

Other scripts:

- `npm test` runs the test suite.
- `npm run lint` checks code style; `npm run format` fixes formatting.
- `npm run build` creates a production build in `.output/`.
- `npm run preview` serves the production build locally.

`./run.sh [dev|build|test|lint]` installs dependencies if needed and runs the matching script.

## Deployment

`npm run build` uses [Nitro](https://nitro.build) to package the site for its host. On Vercel, Netlify and
Cloudflare the host is detected automatically; elsewhere the build is a Node server started with
`node .output/server/index.mjs`. To target a specific host, set `NITRO_PRESET` (for example
`NITRO_PRESET=cloudflare-module`) when building.
