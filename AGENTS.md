# AGENTS.md

**Sacrifice** is a rune-based card game. This repo is its rules manual, published as a Fumadocs (Next.js) site.

## Who writes what

Sophia designs the game and writes the manual. Agents help with the site and, when asked, with drafts, reviews and consistency checks of the rules. Don't change the rules or add rules text without asking first.

## Repo layout

```
content/docs/             the manual (MDX pages; subfolders get their own meta.json)
app/, components/, lib/   the Fumadocs (Next.js) site
app/theme.css             the theme: slate gray, wine red, blood red
fumadocs-studio.config.ts the live editor's config
justfile                  commands
```

## Commands

Run `just` to list them. The main ones:

- `just install`: install dependencies
- `just run`: the site at http://localhost:3000
- `just edit`: the live editor (Fumadocs Studio) at http://localhost:5180
- `just work`: the site and the editor together
- `just check`: lint and type check
- `just build`: production build

pnpm is the package manager.

## Ground rules

- **Consult before writing.** Propose, show a draft, and wait for Sophia's OK.
- **Keep the rules precise.** One term per concept, used the same way everywhere.
- **Don't commit** unless Sophia asks.
