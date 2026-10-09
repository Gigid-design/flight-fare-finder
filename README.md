# Flight Fare Finder

Set a route and a target price — we email you when the fare drops.

Plain Vite + React single-page app with React Router (client-side routing) and Supabase auth. Builds to a static `dist/` folder suitable for Vercel or any static host.

## Routes

- `/` landing page
- `/signin`, `/signup` auth
- `/app` dashboard (requires a signed-in Supabase user; redirects to `/signin` otherwise)

Deep links resolve client-side: `vercel.json` rewrites every path to `index.html`.

## Development

```sh
bun install   # or npm i
bun run dev   # or npm run dev → http://localhost:8080
```

## Build

```sh
bun run build   # vite build → dist/
bun run preview
```

## Environment

Vite inlines these at build time (see `.env`):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

Set the same variables in the Vercel project settings for production builds.
