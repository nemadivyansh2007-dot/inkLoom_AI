import { Button } from '@/components/ui/button';

import { HeroMockup } from './hero-mockup';

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="hero-glow relative overflow-hidden"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-surface px-3 py-1 text-xs font-medium text-brand-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-success" aria-hidden="true" />
            Concept prototype
          </span>
          <p className="mt-6 text-base font-medium text-brand-violet">
            Your pre-publication brand guardian
          </p>
          <h1
            id="hero-heading"
            className="mt-3 text-4xl font-bold leading-[1.2] tracking-tight text-brand-ink md:text-6xl"
          >
            Create freely. Publish confidently.
          </h1>
          <p className="mt-6 text-lg leading-[1.5] text-brand-ink-soft">
            Inkloom AI checks every draft against your approved facts, terms and
            brand rules before it goes live, and cites the evidence behind each
            finding.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#demo">Try the demo</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#how-it-works">How it works</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-brand-ink-soft">
            A person makes the final call on every finding.
          </p>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}
