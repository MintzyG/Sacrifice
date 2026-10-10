import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Cinzel, Crimson_Pro, IBM_Plex_Mono, Noto_Sans_Runic } from 'next/font/google';
import StaticSearchDialog from '@/components/search';

const heading = Cinzel({
  subsets: ['latin'],
  variable: '--font-heading',
});

const body = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-body',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
});

const runes = Noto_Sans_Runic({
  subsets: ['runic'],
  weight: '400',
  variable: '--font-runes',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${plexMono.variable} ${runes.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog: StaticSearchDialog }}>{children}</RootProvider>
      </body>
    </html>
  );
}
