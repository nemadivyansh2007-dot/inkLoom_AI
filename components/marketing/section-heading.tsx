import { cn } from '@/lib/utils';

export function SectionHeading({
  id,
  eyebrow,
  title,
  body,
  align = 'center',
}: {
  id: string;
  eyebrow: string;
  title: string;
  body?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand-violet">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-brand-ink md:text-4xl"
      >
        {title}
      </h2>
      {body && (
        <p className="mt-4 text-base leading-[1.5] text-brand-ink-soft md:text-lg">
          {body}
        </p>
      )}
    </div>
  );
}
