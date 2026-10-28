'use client';

import { useRef } from 'react';
import {
  BookOpen,
  Gavel,
  Lightbulb,
  Route,
  Scan,
  Upload,
  type LucideIcon,
} from 'lucide-react';

import { useInView } from './use-in-view';
import { SectionHeading } from './section-heading';

const steps: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Upload, title: 'Ingest', body: 'Collects the draft and brand rules.' },
  { icon: Scan, title: 'Analyse', body: 'Checks claims, terms, assets and accessibility.' },
  { icon: BookOpen, title: 'Retrieve', body: 'Matches each check to approved sources.' },
  { icon: Lightbulb, title: 'Explain', body: 'Shows the reason and cited evidence.' },
  { icon: Route, title: 'Route', body: 'Sends findings to the right reviewer.' },
  { icon: Gavel, title: 'Decide', body: 'A human accepts, rejects or escalates.' },
];

export function HowItWorks() {
  const listRef = useRef<HTMLOListElement>(null);
  const active = useInView(listRef, 0.3);

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-20 border-y border-brand-line bg-brand-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="Six steps from draft to decision"
          body="The system gathers evidence. A person makes the call."
        />

        <ol
          ref={listRef}
          className="mt-16 flex flex-col lg:flex-row lg:gap-0"
        >
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li
                key={step.title}
                data-active={active}
                style={{ transitionDelay: `${index * 160}ms` }}
                className="flow-step relative flex gap-5 pb-10 last:pb-0 lg:flex-1 lg:flex-col lg:gap-4 lg:pb-0 lg:pr-6"
              >
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[27px] top-14 bottom-0 w-px origin-top scale-y-0 bg-brand-violet/40 transition-transform duration-700 ease-out data-[active=true]:scale-y-100 lg:left-[calc(50%+28px)] lg:top-7 lg:bottom-auto lg:h-px lg:w-[calc(100%-56px)] lg:origin-left lg:scale-x-0 lg:scale-y-100 lg:data-[active=true]:scale-x-100"
                    data-active={active}
                  />
                )}
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-line bg-brand-page text-brand-violet shadow-sm">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-violet">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-[1.5] text-brand-ink-soft">
                    {step.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
