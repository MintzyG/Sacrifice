'use client';
import type { ReactNode } from 'react';
import { useI18n } from 'fumadocs-ui/contexts/i18n';

const steps = ['play', 'happening', 'event', 'effect', 'death', 'victory', 'end'] as const;
type Step = (typeof steps)[number];

const labels: Record<string, Record<Step, string>> = {
  en: {
    play: 'Card play',
    happening: 'Happening',
    event: 'Event',
    effect: 'Effect',
    death: 'Death',
    victory: 'Victory',
    end: 'End of turn',
  },
  'pt-br': {
    play: 'Jogada da carta',
    happening: 'Acontecimento',
    event: 'Evento',
    effect: 'Efeito',
    death: 'Morte',
    victory: 'Vitória',
    end: 'Final do turno',
  },
};

// Every step of The Rite for one rune, in order. A step left out shows as "—".
export function Rite(props: Partial<Record<Step, ReactNode>>) {
  const { locale } = useI18n();
  const t = labels[locale ?? 'en'] ?? labels.en;

  return (
    <ol className="not-prose my-6 overflow-hidden rounded-xl border bg-fd-card text-sm">
      {steps.map((step, i) => (
        <li key={step} className="grid grid-cols-[2rem_9rem_1fr] gap-3 border-b px-4 py-2.5 last:border-b-0 max-sm:grid-cols-[2rem_1fr]">
          <span className="font-mono text-xs leading-5 text-fd-muted-foreground">{i + 1}</span>
          <span className="font-display font-semibold text-fd-primary">{t[step]}</span>
          <span className={props[step] ? 'max-sm:col-start-2' : 'text-fd-muted-foreground max-sm:col-start-2'}>
            {props[step] ?? '—'}
          </span>
        </li>
      ))}
    </ol>
  );
}
