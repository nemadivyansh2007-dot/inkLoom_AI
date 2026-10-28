import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme/theme-provider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const title = 'Inkloom AI | Pre-publication brand governance (concept)';
const description =
  'Inkloom AI is a proposed concept that checks drafts against approved facts, terms, assets and accessibility rules before publishing. Every finding cites its source, and a human makes the final call.';

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'Inkloom AI',
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'Inkloom AI',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
