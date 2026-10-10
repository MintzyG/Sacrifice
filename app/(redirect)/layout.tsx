import '../global.css';
import { fontClasses } from '@/lib/fonts';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={fontClasses}>
      <body className="flex min-h-screen items-center justify-center">{children}</body>
    </html>
  );
}
