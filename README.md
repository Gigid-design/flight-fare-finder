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

Backend is the project's own Supabase project (`bxjoqxhtlirlygaopwrt`). Vite inlines these at build time (see `.env`, template in `.env.example`):

- `VITE_SUPABASE_URL` — `https://bxjoqxhtlirlygaopwrt.supabase.co`
- `VITE_SUPABASE_PUBLISHABLE_KEY` — the `sb_publishable_*` key (browser-safe, RLS-gated; this is Supabase's current name for the former anon key)
- `VITE_SUPABASE_PROJECT_ID`

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in the Vercel project's environment variables as well; the Vercel build does not read `.env` from the repo for secrets you'd rather keep out of git, and must match these values.
