import {
  Accessibility,
  Hourglass,
  ImageOff,
  Quote,
  Shuffle,
  XCircle,
  type LucideIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';

import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

const problems: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Quote,
    title: 'Unsupported claims',
    body: 'Statistics and superlatives with no source on file.',
  },
  {
    icon: XCircle,
    title: 'Incorrect information',
    body: 'Specs and figures that no longer match the fact sheet.',
  },
  {
    icon: Shuffle,
    title: 'Inconsistent messaging',
    body: 'The same product described three different ways.',
  },
  {
    icon: ImageOff,
    title: 'Unapproved assets',
    body: 'Images and logos used without current approval.',
  },
  {
    icon: Accessibility,
    title: 'Accessibility issues',
    body: 'Missing alt text, low contrast and unclear link text.',
  },
  {
    icon: Hourglass,
    title: 'Manual review bottlenecks',
    body: 'Reviewers reread every draft from the start.',
  },
];

function ComparisonBar({
  label,
  value,
  max,
  tone,
}: {
  label: string;
  value: number;
  max: number;
  tone: 'warning' | 'success';
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span className="font-medium text-brand-ink">{label}</span>
        <span className="font-bold tabular-nums text-brand-ink">{value} features</span>
      </div>
      <div
        aria-hidden="true"
        className="mt-2 h-3 overflow-hidden rounded-full bg-brand-lavender"
      >
        <div
          className={cn(
            'h-full rounded-full',
            tone === 'warning' ? 'bg-brand-warning' : 'bg-brand-success'
          )}
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="scroll-mt-20 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          id="problem-heading"
          eyebrow="The problem"
          title="Content creation is scaling. Brand control is not."
          body="Drafts now come from more people, tools and channels. Each one needs checking before it goes live."
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <li key={problem.title}>
              <Reveal delay={index * 80} className="h-full">
                <div className="h-full rounded-2xl border border-brand-line bg-brand-surface p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lavender text-brand-violet">
                    <problem.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand-ink">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.5] text-brand-ink-soft">
                    {problem.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12">
          <figure className="rounded-2xl border border-brand-line bg-brand-surface p-6 shadow-sm md:p-8">
            <figcaption>
              <p className="text-sm font-medium text-brand-violet">
                Hypothetical example
              </p>
              <p className="mt-2 text-xl font-bold text-brand-ink">
                Features claimed in a draft vs. features in the fact sheet
              </p>
              <p className="mt-2 text-sm text-brand-ink-soft">
                Illustrative numbers for the NovaSuite demo only. Not real
                product data.
              </p>
            </figcaption>
            <div className="mt-8 space-y-6">
              <ComparisonBar label="Claimed in draft" value={50} max={50} tone="warning" />
              <ComparisonBar label="Approved in fact sheet" value={35} max={50} tone="success" />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
