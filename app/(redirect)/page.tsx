'use client';
import { useEffect } from 'react';
import { basePath } from '@/lib/shared';
import { i18n } from '@/lib/i18n';

const fallbackUrl = `${basePath}/${i18n.defaultLanguage}`;

// GitHub Pages can't redirect by language, so the browser picks: Portuguese readers get
// /pt-br, everyone else /en. The meta refresh covers browsers without JavaScript.
export default function RedirectPage() {
  useEffect(() => {
    const lang = /^pt/i.test(navigator.language) ? 'pt-br' : i18n.defaultLanguage;
    location.replace(`${basePath}/${lang}`);
  }, []);

  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${fallbackUrl}`} />
      </noscript>
      <a href={fallbackUrl} className="font-display text-fd-primary">
        Sacrifice
      </a>
    </>
  );
}
