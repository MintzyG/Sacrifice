# AGENTS.md

**Sacrifice** is a rune-based card game. This repo is its rules manual, published as a Fumadocs (Next.js) site.

## Game context

Sacrifice is the successor of **Uno de Corno**, a house-rules Uno variant. The rules are almost the same; mostly names changed. The old rulebook (Portuguese) is the source we port from, one page at a time. `TRANSLATIONS.md` maps the old card names to the new rune names. Earlier attempts to implement the game in code live in `graveyard/`.

Changes from Uno de Corno that the old rulebook doesn't have:

- **Players:** at least 4 to start a game. (Rules like "with 2 players, Reverse acts as a Block" still matter, since players die.)
- **Six colours:** red, yellow, green, blue, black and white.
- **Runes are purple.** The old special cards are runes; purple sits outside the six colours, like black wild cards in Uno. Purple is the God's colour.
- **+2, +4, Reverse and Block** keep their names. They exist in every colour, and in purple too. +4 no longer chooses a colour.
- **Choose Color** only comes in purple.
- **Number cards:** 0–9, **Triquetra** and **Infinity**, in each of the six colours. Triquetra and Infinity are ordinary numbers, but can't be part of a Sequence. No card counts in the manual.
- **Coloured action cards:** +2, +4, Reverse, Block, as in Uno. Colour doesn't matter inside a Chain. With 2 players, Reverse acts as a Block.
- **Basic purple cards** (all wild: whoever plays one may choose a colour before the next player plays; once chosen, the next player must play that symbol, that colour, or purple; if they play first, the chance to choose is gone):

  | Card | Base | Transmutation |
  |---|---|---|
  | Wild (= Choose Color) | choose a colour | Supreme Choose Color: see the next player's hand and choose exactly what they do, as if you were them |
  | +1 | +1 | every other player draws 1 |
  | +2 | +2 | Gift: instead of drawing, the next player gets 2 cards of your choice from your hand |
  | +4 | +4 | Supreme +4 (old): next player discards 4 purple cards (ordinary ones if they lack purple) and loses their turn; fewer than 5 cards, they die |
  | +20 | +20 | Hunt the leader: the +20 goes to the player with the fewest cards |
  | Reverse | reverse | Reflection: the last effect played on you goes back to whoever played it (no reversing) |
  | Block | block next player | Ambush: keep it face down as a trap; spring it any time, even out of turn, to block a player when their turn comes |
  | Double Block | block next two players | blocks every other player once, so you play again |
  | Target Block | block the chosen player when their turn comes | you take their turn |
  | Target +2 | send +2 (or a whole Chain) to anyone; they can continue it | Curse: the chosen player draws 1 at the start of each of their next 3 turns |
  | Initiate Transmutation | discard 4, draw 4 | discard any number, draw that many |

  Tainted versions confirmed; all of this is on the Cards page (`rules/cards`).
- **No black/white split for runes.** Every rune is purple. The old "Black / White Set" rule is legacy: it was never used in real games and is not ported.
- **Demon deck.** 6 cards, one per colour; each colour is a demon (no names yet: write `[Red demon]` etc. as placeholders). The God has no card in it, so a game can never start on purple. To start, the chosen player draws a demon instead of searching the main deck for a number card; anyone except that player may make the first play on its colour, then that player's two neighbours race, and whoever plays a valid card first takes the play.

- **No cuts.** Nothing is ever played out of turn to "cut" in. Exceptions: Impermanence itself, a Shattered Impermanence (from Protection's Transmutation) and an Ambush (purple Block's Transmutation) can be used out of turn.
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
- **Lore:** purple cards are imbued by the God; their power is magic. A hand is a sorcerer's soul ("hand" in Uno de Corno = "soul" in Sacrifice), which is why effects stay on the hand. Miracle is bound to the sorcerer's essence, which is more than the soul, so it never moves with the hand.
- **Greed:** drawing 20+ at once means discarding (tens digit − 1) runes from the cards just drawn: 20–29 → 1, 30–39 → 2… Any draw of 20+. Short on runes: discard from hand, then become Indebted (discard every rune you get until paid). Rules page `rules/greed`.
- **Chain:** the chain of + plays (old "sequência de +"). Separate from the number Sequence. Any + card goes on any + card regardless of colour; you continue or draw the total. Rules page: `rules/chains`.
- **Transmutation version** of a rune: play the rune together with the Transmutation rune.

- **Runes** (decisions for the rune pages):
  - Pages never mention old Uno de Corno names (keep them in AGENTS.md and TRANSLATIONS.md only).
  - A rune can be played on top of anything, but some can't be played into a + Chain (others, like Shield, Prosperity and the new Fortune, can). Ask Sophia per rune when it's unclear.
  - No card type labels. Instead, each rune page says what the rune generates in The Rite (an event, an effect, ...).
  - Rune glyphs come from the physical cards; Sophia will provide images. Don't invent glyphs.
  - Rune pages are ordered by power (weakest first), not by the old doc's order. Confusion depends on this order ("the next rune in the manual"), so reordering runes changes Confusion. Ask Sophia where each new rune goes in `runes/meta.json`.
  - The rune list in the Enchiridion and the old doc is partly wrong or missing. Ask before adding a rune.
  - Every rune is written. New names: "Espelho" → Echo, "No mundo das sombras" → Absence, "Daltônico" → Ashen.
  - Every rune has a Tainted and a Transmutation version, but the old texts are outdated: always confirm each rune's rules with Sophia.
  - Rune status (internal, never shown in the manual): each rune's Transmutation is either **real** (designed) or a **placeholder**. Bare multipliers are placeholders.

    | Rune | Transmutation |
    |---|---|
    | Prosperity | placeholder (every Chain ×2 for the rest of the game; ×6 with Tainted) |
    | Displacement | real (Singularity: two souls merge into one hand; what happens to one happens to both, wins included) |
    | Stasis | placeholder (everyone else blocked 3 turns; 6 with Tainted) |
    | Vision | placeholder (hand shown until death or the end of the game) |
    | Protection | real (Shattered Impermanence; two with Tainted) |
    | Fortune | placeholder (×3; ×6 with Tainted) |
    | Ashen | placeholder (3 players; 6 with Tainted) |
    | Soul Swap | real (swap hands but not effects; same with Tainted) |
    | Time | real (restart: hands + draw pile redealt, used pile stays) |
    | Draining | placeholder (whole hand; two hands with Tainted) |
    | Empowering | placeholder (3 Masters and 3 Servants; 6 and 6 with Tainted) |
    | Healing | real (any purple card of your choice; any two with Tainted) |
    | Recollection | real (use a purple card from your hand without spending it; two with Tainted) |
    | Pandemonium | real (hands become the draw pile, draw pile dealt out as hands) |
    | Impermanence | real (duplicated: one used now, one kept; same with Tainted) |
    | Crushing | real (destroy any 1 card anywhere; 2 with Tainted) |
    | Reaper | real (kill 3; 6 with Tainted). The one multiplier Transmutation that's real on purpose: a mega killer is fun |
    | Purity | real (Purified Soul: no bad effect can be put on them anymore, but can never be revived; stays on the hand; two with Tainted) |
    | Absence | real (Nightfall: counter of players + 3 of your turns, then a player of your choice dies each of your turns; two with Tainted) |
    | Miracle | placeholder (duplicated, keep both) |
    | Confusion | real (each rune they play is random, decided by a die roll over the manual's runes when played) |
    | Impotence | real (allergic to magic: discard every purple card, now and later) |
    | Tainted | real (Pestilence: everyone gets the Tainted effects for the rest of the game) |
    | Famine | real (Rationing: every draw dealt out one card at a time around the table; halved with Tainted) |
    | Redirection | real, but rethink it (Super Scapegoat survives one deadly draw; two with Tainted) |
    | Echo | placeholder (mirrored effect 2 more times) |
    | Desecration | real (7 random graveyard cards become an extra hand you control, with its own dagger; two hands of 7 with Tainted) |
    | Transference | placeholder (hands move 3, 6 with Tainted; was Chaos Mode in Uno de Corno, no longer) |

## Names

Old names → Sacrifice names, beyond the rune names in `TRANSLATIONS.md`:

| Old | Sacrifice |
|---|---|
| Capitalista / Proletariado (roles) | Master / Servant (Empowering) |
| Comunista (role) | Starved (Famine) |
| Racista (role) | Impotent (Impotence) |
| Fudido (role) | Tainted |
| Modo Fudido | Pestilence (Tainted + Transmutation) |
| Sepuku (Miracle + Tainted) | being Cleansed |
| Pau no Seu Cu | Reaper (the Enchiridion called it Soul Taker) |
| Necromancer | Desecration (the Enchiridion called it Restoration) |
| Banho | Purity (removes the taint: Tainted becomes a common purple wild card) |
| Advogado / Cliente (roles) | Scapegoat / Sinner (Redirection) |
| Deathmatch type 1 (draw pile runs out) | The Drought (with "The") |
| Deathmatch (the card) | Transference (rune; the Enchiridion called it Dominion) |
| Deathmatch type 2 (Deathmatch card) | The Transference (with "The") |
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

- Stasis (Bloquear 48H) still works the same; its number of turns goes on its rune page.

## Not ported

Old sections deliberately left out of the manual:

- Black / White Set (legacy, never used in real games)
- Giving Up (Desistência)
- Runes dropped from Sacrifice: Black Lives Matter, Fuck You Gays, Perfeita
- Sacrifice announcement with an animal, lying and challenges; the animal list; the old animal rituals of Early Sacrifice
- Colourless Cards (Cartas sem cor): legacy, never used in real games
- Discarding (Descartar): merged into the graveyard in the real game; discarded cards go to the graveyard
