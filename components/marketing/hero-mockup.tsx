import { cn } from '@/lib/utils';

function Mark({
  tone,
  children,
}: {
  tone: 'high' | 'low';
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        'rounded-sm px-0.5 border-b-2',
        tone === 'high'
          ? 'border-solid border-brand-warning bg-brand-warning/15'
          : 'border-dashed border-brand-info bg-brand-info/10'
      )}
    >
      {children}
    </span>
  );
}

function MiniFinding({
  tone,
  title,
  meta,
}: {
  tone: 'high' | 'low';
  title: string;
  meta: string;
}) {
  return (
    <li className="rounded-xl border border-brand-line bg-brand-surface p-3">
      <p className="text-xs font-bold text-brand-ink">{title}</p>
      <p
        className={cn(
          'mt-1 text-xs font-medium',
          tone === 'high' ? 'text-brand-warning-ink' : 'text-brand-info-ink'
        )}
      >
        {meta}
      </p>
    </li>
  );
}

export function HeroMockup() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-brand-violet/15 blur-3xl" />
      <div className="overflow-hidden rounded-[20px] border border-brand-line bg-brand-surface shadow-xl">
        <div className="flex items-center gap-3 border-b border-brand-line px-4 py-3">
          <span className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2.5 w-2.5 rounded-full bg-brand-line" />
            ))}
          </span>
          <span className="ml-auto text-xs font-medium text-brand-ink-soft">
            Review · Draft 14
          </span>
        </div>
        <div className="grid md:grid-cols-[minmax(0,1fr)_200px]">
          <div className="space-y-4 p-5 text-sm leading-[1.5] text-brand-ink">
            <p className="text-base font-bold leading-[1.2]">
              Why teams are switching to NovaSuite
            </p>
            <p>
              Our platform now has <Mark tone="high">50 product features</Mark>,
              built for teams that move fast.
            </p>
            <p>
              Customers have seen <Mark tone="high">300% business growth</Mark>{' '}
              since launch.
            </p>
            <p>
              See what <Mark tone="low">Nova Suite</Mark> can do for your team
              today.
            </p>
            <div className="space-y-2 pt-2">
              <div className="h-2 w-full rounded-full bg-brand-lavender" />
              <div className="h-2 w-5/6 rounded-full bg-brand-lavender" />
              <div className="h-2 w-2/3 rounded-full bg-brand-lavender" />
            </div>
          </div>
          <aside className="border-t border-brand-line bg-brand-lavender/40 p-4 md:border-l md:border-t-0">
            <p className="text-xs font-medium text-brand-ink-soft">Findings · 3</p>
            <ul className="mt-3 space-y-3">
              <MiniFinding tone="high" title="Feature count" meta="High · 96%" />
              <MiniFinding tone="high" title="Growth claim" meta="High · 88%" />
              <MiniFinding tone="low" title="Product name" meta="Low · 99%" />
            </ul>
            <p className="mt-4 rounded-xl bg-brand-surface p-3 text-xs text-brand-ink-soft">
              Publish locked until high-severity findings are resolved.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
