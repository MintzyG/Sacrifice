import { defineI18n } from 'fumadocs-core/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';

// Every page is English first; a `page.pt-br.mdx` next to `page.mdx` is its Portuguese version.
// Pages without a translation fall back to English.
export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'pt-br'],
  parser: 'dot',
});

export type Lang = (typeof i18n.languages)[number];

export const i18nUI = defineI18nUI(i18n, {
  en: { displayName: 'English' },
  'pt-br': {
    displayName: 'Português',
    'Search(search trigger)': 'Pesquisar',
    'Search(search dialog)': 'Pesquisar',
    'No results found(search dialog)': 'Nenhum resultado encontrado',
    'On this page(table of contents)': 'Nesta página',
    'No Headings(table of contents)': 'Sem títulos',
    'Table of Contents(inline table of contents)': 'Sumário',
    'Last updated on(page footer)': 'Atualizado em',
    'Next Page(pagination)': 'Próxima página',
    'Previous Page(pagination)': 'Página anterior',
    'Choose a language(language switcher)': 'Escolha um idioma',
    'Language(language switcher)': 'Idioma',
    'Theme(site menu)': 'Tema',
    'Edit on GitHub(edit page)': 'Editar no GitHub',
    'Copy Markdown(page actions)': 'Copiar Markdown',
    'Copied Markdown(page actions)': 'Markdown copiado',
    'View as Markdown(page actions)': 'Ver como Markdown',
    'Open(page actions)': 'Abrir',
    'Open in GitHub(page actions)': 'Abrir no GitHub',
    'Page Not Found(404 not found page)': 'Página não encontrada',
    'Back to Home(404 not found page)': 'Voltar ao início',
  },
});
