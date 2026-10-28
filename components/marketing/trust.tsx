import {
  Accessibility,
  Lock,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';

import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

const pillars: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Lock,
    title: 'Privacy',
    body: 'Drafts are reviewed only to check them. Retention limits would be set per workspace.',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    body: 'Designed around role-based access and a full audit trail of every decision.',
  },
  {
    icon: UserCheck,
    title: 'Human oversight',
    body: 'No finding changes a draft without a named reviewer’s decision.',
  },
  {
    icon: Accessibility,
    title: 'Accessibility',
    body: 'Accessibility is one of the review checks. This prototype aims for WCAG 2.2 AA.',
  },
];

export function Trust() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="scroll-mt-20 pb-20 md:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          id="trust-heading"
          eyebrow="Trust by design"
          title="Controls are part of the design, not an add-on"
          body="These are design intentions for a concept. Nothing here is a certification or a production claim."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <li key={pillar.title}>
              <Reveal delay={index * 80} className="h-full">
                <div className="h-full rounded-2xl border border-brand-line bg-brand-surface p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lavender text-brand-violet">
                    <pillar.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.5] text-brand-ink-soft">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12">
          <div className="rounded-[20px] bg-brand-deep px-6 py-12 text-center md:px-12">
            <ShieldCheck className="mx-auto h-8 w-8 text-white" aria-hidden="true" />
            <p className="mx-auto mt-4 max-w-2xl text-2xl font-bold leading-[1.2] text-white md:text-3xl">
              Evidence-backed, explainable and human-controlled.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
