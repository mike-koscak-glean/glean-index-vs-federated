# Glean Index vs Federated — Interactive Presentation

An animated, click-through presentation that explains why enterprises need a deep, permission-aware index instead of relying solely on MCP / federated search.

## What this is

A single-page React app with 8 animated scenes you click (or arrow-key) through while narrating. Built for screen-sharing in customer conversations, internal enablement, and conference demos.

The narrative follows one enterprise question through two paths:

> "Provide a Customer 360 for Acme: recent deals, support issues, key contacts, risks, and next best actions."

- **Left path:** MCP / federated-only — live API calls, no shared index, shallow ranking
- **Right path:** Glean's indexed enterprise graph — 100+ connectors, permission-aware index, 60+ ranking signals

## Scenes

| Step | Title | What it shows |
|------|-------|---------------|
| 0 | Cold Open | Typing query, two path cards |
| 1 | Federated / MCP | Hub-spoke diagram with latency, messy results |
| 2 | Glean Indexing | Connectors → index → enterprise knowledge graph |
| 3 | Results Comparison | Side-by-side: bad AI answer vs Glean's synthesized Customer 360 |
| 4 | Agent on Federated | Noisy context window, garbage-in-garbage-out |
| 5 | Agent on Glean | Curated context, composed answer with actions |
| 6 | MCP + Glean | Architecture: MCP as access layer on top of Glean's graph |
| 7 | Takeaway | Metric comparison, closing quote |

## Running locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173. Use arrow keys, spacebar, or the bottom stepper to navigate.

## Presenter script

See [`presenter-script.md`](./presenter-script.md) for a scene-by-scene verbal script (~5 minutes total).

## Tech stack

- React 19 + TypeScript
- Vite
- Framer Motion (animations)
- App logos from Glean's CDN (`image_urls_combined_unique.txt`)
- Material Symbols for generic icons
- Glean brand colors: `#343CED` (blue), `#D8FD49` (green), `#F6F3EB` (oatmeal)
