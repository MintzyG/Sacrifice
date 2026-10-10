# Sacrifice

The rules manual for **Sacrifice**, a rune-based card game, built with Fumadocs.

## Commands

Run `just` to list them all.

| Command | What it does |
|---|---|
| `just install` | install dependencies |
| `just run` | the manual at http://localhost:3000 |
| `just edit` | live editor (Fumadocs Studio) at http://localhost:5180 |
| `just work` | site + editor together |
| `just check` | lint + type-check |
| `just build` / `just start` | production build / serve it |

## Layout

```
content/docs/
  meta.json     sidebar order
  index.mdx     the manual's first page (English)
  index.pt-br.mdx  its Portuguese version; a missing one falls back to English
  ...           pages; subfolders get their own meta.json
```

The home page lists the manual's top-level sections automatically. The editor edits all of `content/docs`, and the dev site hot-reloads what it saves.

## License

- **Code** (the site): [MIT](LICENSE)
- **Written content** (`content/`): [CC BY 4.0](LICENSE-CONTENT)

© 2026 Sophia Hoffmann.

## Deployment

Every push to `main` builds a static export and publishes it to GitHub Pages (`.github/workflows/pages.yml`): https://mintzyg.github.io/Sacrifice/
