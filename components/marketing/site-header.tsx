'use client';

import { useState } from 'react';
import { Feather, Menu, X } from 'lucide-react';

import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#demo', label: 'Demo' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#trust', label: 'Trust' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line bg-brand-page/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-lg text-base font-bold text-brand-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-violet text-brand-on-violet">
            <Feather className="h-4 w-4" aria-hidden="true" />
          </span>
          Inkloom AI
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-brand-ink-soft transition-colors hover:bg-brand-lavender hover:text-brand-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#demo">Try the demo</a>
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-line bg-brand-surface text-brand-ink transition-colors hover:bg-brand-lavender md:hidden"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-brand-line bg-brand-page md:hidden"
        >
          <ul className="space-y-1 px-4 py-3">
            {[...links, { href: '#demo', label: 'Try the demo' }].map(
              (link) => (
                <li key={`${link.href}-${link.label}`}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-brand-ink hover:bg-brand-lavender"
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
