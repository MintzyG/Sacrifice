# Sacrifice: the rules manual, as a Fumadocs site.

# List available commands
default:
    @just --list

# Install dependencies
install:
    pnpm install

# Run the docs site in dev mode (http://localhost:3000)
run:
    pnpm dev

# Open the live editor (Fumadocs Studio) on the manual
edit:
    pnpm exec fumadocs-studio

# Run the site and the editor together
work:
    #!/usr/bin/env bash
    trap 'kill 0' EXIT
    pnpm dev & pnpm exec fumadocs-studio & wait

# Build the site for production
build:
    pnpm build

# Serve the static build from out/
start:
    pnpm start

# Lint and type-check
check:
    pnpm lint
    pnpm types:check

# Remove build output and generated files
clean:
    rm -rf .next .source out
