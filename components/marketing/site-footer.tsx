import { Feather } from 'lucide-react';

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#demo', label: 'Demo' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#trust', label: 'Trust' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-line bg-brand-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[minmax(0,1fr)_auto] md:px-8">
        <div>
          <div className="flex items-center gap-2 text-base font-bold text-brand-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-violet text-brand-on-violet">
              <Feather className="h-4 w-4" aria-hidden="true" />
            </span>
            Inkloom AI
          </div>
          <p className="mt-4 max-w-xl text-sm text-brand-ink">
            Concept prototype by Team Celestial Grid, Sagar Institute of Science
            and Technology, Bhopal.
          </p>
          <p className="mt-2 max-w-xl text-sm text-brand-ink-soft">
            This is a proposed concept, not production software. The demo uses
            hypothetical data and scripted behaviour. No real AI or publishing
            runs on this page.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded text-brand-ink-soft transition-colors hover:text-brand-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
