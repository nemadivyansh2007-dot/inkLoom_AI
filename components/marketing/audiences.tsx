import {
  Briefcase,
  ClipboardCheck,
  Layers,
  PenLine,
  type LucideIcon,
} from 'lucide-react';

import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

const personas: {
  icon: LucideIcon;
  title: string;
  need: string;
  body: string;
}[] = [
  {
    icon: PenLine,
    title: 'Content creators',
    need: 'Intent-preserving fixes',
    body: 'Suggested edits keep your meaning and tone, so you change only what the rules require.',
  },
  {
    icon: Layers,
    title: 'Brand managers',
    need: 'Pattern visibility',
    body: 'See the same issue across many drafts, and fix the source instead of each post.',
  },
  {
    icon: ClipboardCheck,
    title: 'Authorised reviewers',
    need: 'Traceable evidence gates',
    body: 'Each decision links to a cited source and an audit entry before anything publishes.',
  },
  {
    icon: Briefcase,
    title: 'Agencies & freelancers',
    need: 'Workspace-specific rules',
    body: 'Keep each client’s guidelines separate, so one brand’s rules never apply to another.',
  },
];

export function Audiences() {
  return (
    <section
      id="who-its-for"
      aria-labelledby="audience-heading"
      className="scroll-mt-20 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          id="audience-heading"
          eyebrow="Who it's for"
          title="Built for everyone who signs off on content"
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {personas.map((persona, index) => (
            <li key={persona.title}>
              <Reveal delay={index * 80} className="h-full">
                <article className="h-full rounded-2xl border border-brand-line bg-brand-surface p-6 shadow-sm md:p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-lavender text-brand-violet">
                      <persona.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold text-brand-ink">
                      {persona.title}
                    </h3>
                  </div>
                  <p className="mt-6 text-xs font-medium uppercase tracking-[0.12em] text-brand-ink-soft">
                    Key need
                  </p>
                  <p className="mt-1 text-base font-bold text-brand-violet">
                    {persona.need}
                  </p>
                  <p className="mt-3 text-sm leading-[1.5] text-brand-ink-soft">
                    {persona.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
