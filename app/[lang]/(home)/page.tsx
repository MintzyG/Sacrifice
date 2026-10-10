import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { docsRoute, gitConfig } from '@/lib/shared';
import { RuneStone } from '@/components/rune-stone';
import type { Lang } from '@/lib/i18n';

const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

// "Sacrifice" in Elder Futhark.
const runeTitle = 'ᛋᚨᚲᚱᛁᚠᛁᚲᛖ';

const text: Record<Lang, Record<'tagline' | 'read' | 'github' | 'license', string>> = {
  en: {
    tagline: 'The rules of the game.',
    read: 'Read the rules',
    github: 'View on GitHub',
    license: 'Code under MIT, content under CC BY 4.0. © 2026 Sophia Hoffmann.',
  },
  'pt-br': {
    tagline: 'As regras do jogo.',
    read: 'Ler as regras',
    github: 'Ver no GitHub',
    license: 'Código sob MIT, conteúdo sob CC BY 4.0. © 2026 Sophia Hoffmann.',
  },
};

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const t = text[lang as Lang] ?? text.en;

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative flex flex-1 flex-col items-center overflow-hidden px-4 pt-12 pb-20 text-center sm:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 left-1/2 size-[28rem] max-w-full -translate-x-1/2 rounded-full bg-wine/25 blur-3xl"
        />
        <div className="relative">
          <RuneStone />
        </div>

        <p aria-hidden className="relative mt-8 mb-3 font-runic text-xl tracking-[0.4em] text-blood">
          {runeTitle}
        </p>
        <h1 className="relative mb-4 font-display text-5xl font-semibold tracking-wide sm:text-7xl">Sacrifice</h1>
        <p className="relative mx-auto max-w-xl text-xl text-fd-muted-foreground">{t.tagline}</p>

        <div className="relative mt-16 flex flex-wrap justify-center gap-3">
          <Link
            href={`/${lang}${docsRoute}`}
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.read}
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border bg-fd-card px-5 py-2.5 font-display text-sm font-semibold tracking-wide transition-colors hover:bg-fd-accent"
          >
            {t.github}
          </a>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.license}</p>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-fd-primary">
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
