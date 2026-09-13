export const siteConfig = {
  name: 'KairosPayHub',
  tagline: 'Church operations, scoped to your structure',
  description:
    'Giving, attendance, and membership — built for pastors and unit leaders, not generic church software.',
  url: 'https://www.kairospayhub.com',
  appUrl: 'https://app.kairospayhub.com',
  supportEmail: 'noreply@kairospayhub.com',
} as const

export const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: `mailto:${siteConfig.supportEmail}` },
] as const

export const trustedBy = [
  'Hilltop Church',
  'Grace Assembly',
  'TPH USA',
  'Living Word',
  'Cornerstone',
  'New Life',
] as const
