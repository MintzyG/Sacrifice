import { Cinzel, Crimson_Pro, IBM_Plex_Mono, Noto_Sans_Runic } from 'next/font/google';

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

export const fontClasses = `${heading.variable} ${body.variable} ${plexMono.variable} ${runes.variable} font-sans`;
