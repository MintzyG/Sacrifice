# AGENTS.md

**Sacrifice** is a rune-based card game. This repo is its rules manual, published as a Fumadocs (Next.js) site.

## Game context

Sacrifice is the successor of **Uno de Corno**, a house-rules Uno variant. The rules are almost the same; mostly names changed. The old rulebook (Portuguese) is the source we port from, one page at a time. `MintzyG/Enchiridion-of-Sacrifice` (an earlier, unfinished mdBook) maps the old card names to the new rune names.

Changes from Uno de Corno that the old rulebook doesn't have:

- **Six colours:** red, yellow, green, blue, black and white.
- **Runes are purple.** The old special cards are runes; purple sits outside the six colours, like black wild cards in Uno. Purple is the God's colour.
- **+2, +4, Reverse and Block** keep their names. They exist in every colour, and in purple too. +4 no longer chooses a colour.
- **Choose Color** only comes in purple.
- **No black/white split for runes.** Every rune is purple. The old "Black / White Set" rule is legacy: it was never used in real games and is not ported.
- **Demon deck.** 6 cards, one per colour; each colour is a demon (no names yet: write `[Red demon]` etc. as placeholders). The God has no card in it, so a game can never start on purple. To start, the chosen player draws a demon instead of searching the main deck for a number card; anyone except that player may make the first play on its colour, then that player's two neighbours race, and whoever plays a valid card first takes the play.

- **No cuts.** Nothing is ever played out of turn to "cut" in.
- **Rainbow / Sequence** (replace the old Rainbow, Super Rainbow and Sequence):
  - Rainbow: the same card in all six colours: a number, Block, Reverse, +2, +4 or Choose Color. Action cards still take effect while building: several Blocks at once block that many next players, wrapping around (you can block yourself); several Reverses at once reverse only if their count is odd; +2/+4 Chain normally. Six purple Choose Colors in a row also make a Rainbow, whatever colours they chose: the only purple card that counts.
  - Sequence: six consecutive numbers, up or down, 0 counts (0-5 … 4-9).
  - Normal matching still applies to every card, so a Sequence is always one colour. There is no Rainbow Sequence.
  - Built from the last six cards on the used pile, in a row, by one or more players, each on their own turn. On your turn you play either one card or all the cards still needed to complete it, never a partial batch.
  - Everyone who contributed discards: Rainbow 1, Sequence 2 (per player, not per card contributed).
  - If the discard would leave you with no cards (e.g. you completed it with your last card), you die. Ganging up to kill a player on their last cards this way is a real strategy.
  - Purple cards never count, except Choose Color in a Rainbow.
- **Sacrifice** (replaces the old announce-an-animal rule; no lying, no challenges, no animals). The only ways to win are Sacrifice and being the last alive. Full rules on the Sacrifice page; key points:
  - Every player has a **Sacrificial Dagger** (inventory card, not in the deck). At two cards: play the penultimate, pledge the last under the dagger, hidden.
  - Next turn: reveal (valid play → win after events, effects and Hail Mary; invalid → fail) or postpone (draw 1 and play it; can't play it → fail; not allowed when you couldn't draw, e.g. a + card is on you).
  - Fail = draw 7, pledged card back to hand. Impermanence on the pledge = fail.
  - A purple pledge that fails kills you, unless your dagger is bloody (then it's a normal fail).
  - A Starved player can't postpone: they reveal, and win or die.
  - **Bloody dagger:** you killed a player. Allows an **Early Sacrifice** on any of your turns except your Sacrifice turn: play the bloody dagger together with a card of the opening demon's colour, or purple for the God, as a normal play (the card must be valid). After it you can only win by killing, and you gain a bonus (bonuses still to be decided).
- **Chain:** the chain of + plays (old "sequência de +"). Separate from the number Sequence.

- **Runes** (decisions for the rune pages):
  - Pages never mention old Uno de Corno names (keep them in AGENTS.md and TRANSLATIONS.md only).
  - A rune can be played on top of anything, but some can't be played into a + Chain (others, like Shield, Prosperity and the new Fortune, can). Ask Sophia per rune when it's unclear.
  - No card type labels. Instead, each rune page says what the rune generates in The Rite (an event, an effect, ...).
  - Rune glyphs come from the physical cards; Sophia will provide images. Don't invent glyphs.
  - The rune list in the Enchiridion and the old doc is partly wrong or missing. Ask before adding a rune.
  - Every rune has a Tainted and a Transmutation version, but the old texts are outdated: always confirm each rune's rules with Sophia.

## Names

Old names → Sacrifice names, beyond the rune names in the Enchiridion:

| Old | Sacrifice |
|---|---|
| Capitalista / Proletariado (roles) | Master / Servant (Empowering) |
| Comunista (role) | Starved (Famine) |
| Racista (role) | Impotent (Impotence) |
| Fudido (role) | Tainted |
| Deathmatch type 1 (draw pile runs out) | Drought |
| Deathmatch type 2 (Deathmatch card) | Dominion |
| Ordem de Progressão (OdP) | The Rite |
| Rodada (per-hand count) | Turn: one play or action of a hand. Effect durations are in turns. |
| Deathmatch type 3 (timer) | The Wrath (with "The"): the opening demon, stuck half-summoned, turns on the sorcerers |

Rune, role and Deathmatch names stay in English on the Portuguese pages for now. Every such name used in the manual goes in `TRANSLATIONS.md`, to be translated later.

## Who writes what

Sophia designs the game and writes the manual. Agents help with the site and, when asked, with drafts, reviews and consistency checks of the rules. Don't change the rules or add rules text without asking first.

## Repo layout

```
content/docs/             the manual: page.mdx (English) + page.pt-br.mdx (Portuguese)
lib/i18n.ts               languages and the Portuguese UI strings
app/, components/, lib/   the Fumadocs (Next.js) site
app/theme.css             the theme: slate gray, wine red, blood red
fumadocs-studio.config.ts the live editor's config
justfile                  commands
```

## Writing pages

- Link to other pages by file: `[Sacrifice](./sacrifice.mdx)` or `[The Wrath](./deathmatches.mdx#the-wrath)`, never a bare relative URL. Fumadocs turns file links into absolute URLs in the right language; bare relative URLs break, because the site uses trailing slashes.
- Quote a frontmatter `description` that contains a colon.

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

## Held for later pages

Old rules not ported yet, to place on their rune pages:

- Tainted players can choose not to draw in any Deathmatch (normalized; already on the Deathmatches page, repeat it on the Tainted rune page).
- Fortune (DLC) doesn't work the way the old manual says; don't use it as an example until its page is written.
- Stasis (Bloquear 48H) still works the same; its number of turns goes on its rune page.
- Restoration (Necromancer) draws only 3 cards from the graveyard, not a whole hand. Crushing (Incinerador) discards 3.
- The Dominion rune (Deathmatch card) may get a better name.
- Basic rule 13: having the Famine (Comunista), Impotence (Racista) or Empowering (Capitalista) effect twice cancels it.
- Basic rule 14: when you play Soul Swap (Trocar de mãos), you may choose not to swap only if it's your last card.
- Basic rules 15–17, Impermanence (Foda-se): it can't be played into someone's hand; it only returns a card to the hand if that card is a number or a victory; on a victory denial where the player gets no card back, they draw 7.

## Not ported

Old sections deliberately left out of the manual:

- Black / White Set (legacy, never used in real games)
- Giving Up (Desistência)
- Sacrifice announcement with an animal, lying and challenges; the animal list; the old animal rituals of Early Sacrifice
- Colourless Cards (Cartas sem cor): legacy, never used in real games
- Discarding (Descartar): merged into the graveyard in the real game; discarded cards go to the graveyard
