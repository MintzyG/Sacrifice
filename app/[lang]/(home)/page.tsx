import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Node } from 'fumadocs-core/page-tree';
import { ArrowRight } from 'lucide-react';
import { source } from '@/lib/source';
import { docsRoute, gitConfig } from '@/lib/shared';
import type { Lang } from '@/lib/i18n';

const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

// "Sacrifice" in Elder Futhark.
const runeTitle = 'ᛋᚨᚲᚱᛁᚠᛁᚲᛖ';

const text: Record<Lang, Record<'tagline' | 'read' | 'github' | 'contents' | 'license', string>> = {
  en: {
    tagline: 'The rules of the game.',
    read: 'Read the rules',
    github: 'View on GitHub',
    contents: 'Contents',
    license: 'Code under MIT, content under CC BY 4.0. © 2026 Sophia Hoffmann.',
  },
  'pt-br': {
    tagline: 'As regras do jogo.',
    read: 'Ler as regras',
    github: 'Ver no GitHub',
    contents: 'Conteúdo',
    license: 'Código sob MIT, conteúdo sob CC BY 4.0. © 2026 Sophia Hoffmann.',
  },
};

interface Section {
  name: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  url: string;
}

// The top-level entries of the manual's sidebar: pages, and folders that have a page to land on.
function getSections(lang: string): Section[] {
  const sections: Section[] = [];
  for (const node of source.getPageTree(lang).children) {
    if (node.type === 'page' && node.url !== `/${lang}${docsRoute}`) sections.push(node);
    if (node.type === 'folder') {
      const url = node.index?.url ?? firstPageUrl(node.children);
      if (url) sections.push({ ...node, url });
    }
  }
  return sections;
}

function firstPageUrl(nodes: Node[]): string | undefined {
  for (const node of nodes) {
    if (node.type === 'page') return node.url;
    if (node.type === 'folder') {
      const url = node.index?.url ?? firstPageUrl(node.children);
      if (url) return url;
    }
  }
}

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const t = text[lang as Lang] ?? text.en;
  const sections = getSections(lang);

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-wine/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
          <p aria-hidden className="mb-4 font-runic text-2xl tracking-[0.4em] text-blood">
            {runeTitle}
          </p>
          <h1 className="mb-5 font-display text-5xl font-semibold tracking-wide sm:text-7xl">Sacrifice</h1>
          <p className="mx-auto mb-9 max-w-xl text-xl text-fd-muted-foreground">{t.tagline}</p>
          <div className="flex flex-wrap justify-center gap-3">
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
        </div>
      </section>

      {sections.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="mb-8 font-display text-sm font-semibold uppercase tracking-[0.2em] text-fd-primary">
            {t.contents}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Link
                key={section.url}
                href={section.url}
                className="group flex flex-col rounded-xl border bg-fd-card p-6 transition-colors hover:border-wine hover:bg-fd-accent"
              >
                <div className="mb-2 flex items-center gap-3">
                  {section.icon && (
                    <span className="flex size-9 items-center justify-center rounded-lg border bg-fd-background text-blood [&_svg]:size-4.5">
                      {section.icon}
                    </span>
                  )}
                  <h3 className="font-display text-lg font-semibold">{section.name}</h3>
                </div>
                {section.description && (
                  <p className="text-fd-muted-foreground">{section.description}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer className="mt-auto border-t">
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
