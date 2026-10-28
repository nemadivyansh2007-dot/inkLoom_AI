export type FindingId = 'features' | 'growth' | 'name';
export type Severity = 'high' | 'low';

export type Finding = {
  id: FindingId;
  number: number;
  matchText: string;
  title: string;
  category: string;
  severity: Severity;
  confidence: number;
  issue: string;
  source: { label: string; quote: string };
  fix: { replacement: string | null };
};

export type DraftSegment = { text: string; findingId?: FindingId };

export const demoNotice =
  'Hypothetical demo data. Nothing is sent to an AI model or published.';

export const draft = {
  title: 'Why teams are switching to NovaSuite',
  paragraphs: [
    [{ text: 'Meet the new way to plan, write and ship with your team.' }],
    [
      { text: 'Our platform now has ' },
      { text: '50 product features', findingId: 'features' },
      { text: ', built for teams that move fast. Customers have seen ' },
      { text: '300% business growth', findingId: 'growth' },
      { text: ' since launch.' },
    ],
    [
      { text: 'See what ' },
      { text: 'Nova Suite', findingId: 'name' },
      { text: ' can do for your team today.' },
    ],
  ] as DraftSegment[][],
};

export const findings: Finding[] = [
  {
    id: 'features',
    number: 1,
    matchText: '50 product features',
    title: 'Feature count does not match the fact sheet',
    category: 'Incorrect information',
    severity: 'high',
    confidence: 96,
    issue:
      'The draft claims 50 features. The approved fact sheet lists 35.',
    source: {
      label: 'Product Fact Sheet v3, Features, line 12',
      quote: 'NovaSuite ships with 35 core product features.',
    },
    fix: { replacement: '35 product features' },
  },
  {
    id: 'growth',
    number: 2,
    matchText: '300% business growth',
    title: 'Growth claim has no supporting evidence',
    category: 'Unsupported claim',
    severity: 'high',
    confidence: 88,
    issue:
      'No approved growth figure or supporting evidence is on file for this claim.',
    source: {
      label: 'Evidence register, Growth claims: no match found',
      quote: 'No approved growth figure or case study on file.',
    },
    fix: { replacement: null },
  },
  {
    id: 'name',
    number: 3,
    matchText: 'Nova Suite',
    title: 'Product name is not the official spelling',
    category: 'Terminology',
    severity: 'low',
    confidence: 99,
    issue: 'The official product name is one word with a capital S.',
    source: {
      label: 'Brand Style Guide v2, Product names, line 4',
      quote: 'Official name: NovaSuite (one word, capital S).',
    },
    fix: { replacement: 'NovaSuite' },
  },
];
