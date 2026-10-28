import { DemoSection } from '@/components/demo/demo-section';
import { Audiences } from '@/components/marketing/audiences';
import { Hero } from '@/components/marketing/hero';
import { HowItWorks } from '@/components/marketing/how-it-works';
import { Problem } from '@/components/marketing/problem';
import { SiteFooter } from '@/components/marketing/site-footer';
import { SiteHeader } from '@/components/marketing/site-header';
import { Trust } from '@/components/marketing/trust';

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-violet focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-brand-on-violet"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Problem />
        <DemoSection />
        <HowItWorks />
        <Audiences />
        <Trust />
      </main>
      <SiteFooter />
    </>
  );
}
