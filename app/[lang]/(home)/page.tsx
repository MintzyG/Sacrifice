import Link from 'next/link';
import { docsRoute, gitConfig } from '@/lib/shared';
import { SummoningCircle } from '@/components/summoning-circle';
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
      <section className="slate-grain relative isolate flex flex-1 items-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[min(150vw,1100px)] -translate-x-1/2 -translate-y-[62%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--color-blood)_22%,transparent),transparent)] lg:left-[calc(50%+1rem+min(380px,50svh-3.5rem))] lg:-translate-y-1/2"
        />
        <SummoningCircle className="pointer-events-none absolute top-6 left-1/2 -z-10 w-[min(118vw,560px)] -translate-x-1/2 text-wine opacity-60 lg:top-1/2 lg:left-[calc(50%+1rem)] lg:w-[min(760px,calc(100svh-7rem))] lg:translate-x-0 lg:-translate-y-1/2 lg:opacity-100 dark:text-blood" />

        <div className="mx-auto w-full max-w-6xl px-4 pt-[calc(min(118vw,560px)+0.5rem)] pb-16 lg:py-32">
          <div className="max-w-xl">
            <p aria-hidden className="mb-4 font-runic text-lg tracking-[0.5em] text-blood">
              {runeTitle}
            </p>
            <h1 className="carved font-display text-6xl leading-none font-bold sm:text-8xl">Sacrifice</h1>
            <p className="mt-6 text-2xl text-fd-muted-foreground italic">{t.tagline}</p>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href={`/${lang}${docsRoute}`}
                className="inline-flex items-center rounded-sm bg-blood px-6 py-3 font-display text-sm font-bold tracking-widest text-[#eceef1] shadow-[inset_0_-2px_0_rgb(0_0_0/0.25)] transition-colors hover:bg-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blood"
              >
                {t.read}
              </Link>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-sm border border-fd-foreground/25 px-6 py-3 font-display text-sm font-bold tracking-widest transition-colors hover:border-blood hover:text-blood focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blood"
              >
                {t.github}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.license}</p>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-fd-primary">
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
