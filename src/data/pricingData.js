import {
  BoltIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started online',
    price: 997,
    originalPrice: 1497,
    popular: false,
    color: 'gray',
    features: [
      { name: 'Up to 5 pages', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Basic SEO optimization', included: true },
      { name: 'Contact form integration', included: true },
      { name: 'Social media links', included: true },
      { name: 'Google Analytics setup', included: true },
      { name: '1 round of revisions', included: true },
      { name: '7-day delivery', included: true },
      { name: 'E-commerce functionality', included: false },
      { name: 'Custom animations', included: false },
      { name: 'Advanced SEO package', included: false },
      { name: 'Priority support', included: false },
    ],
    cta: 'Get Started',
    deliveryTime: '5-7 days',
    revisions: '1 round',
    support: 'Email support',
  },
  {
    name: 'Professional',
    description: 'Most popular choice for growing businesses',
    price: 1497,
    originalPrice: 2497,
    popular: true,
    color: 'primary',
    features: [
      { name: 'Up to 10 pages', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Advanced SEO optimization', included: true },
      { name: 'Contact form integration', included: true },
      { name: 'Social media integration', included: true },
      { name: 'Google Analytics & Search Console', included: true },
      { name: 'Basic e-commerce (up to 20 products)', included: true },
      { name: 'Custom animations', included: true },
      { name: '2 rounds of revisions', included: true },
      { name: '5-day delivery', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Performance optimization', included: true },
    ],
    cta: 'Get Started',
    deliveryTime: '4-5 days',
    revisions: '2 rounds',
    support: 'Priority email support',
  },
  {
    name: 'Premium',
    description: 'For businesses that need advanced features',
    price: 2497,
    originalPrice: 3997,
    popular: false,
    color: 'secondary',
    features: [
      { name: 'Up to 20 pages', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Advanced SEO optimization', included: true },
      { name: 'Custom contact forms', included: true },
      { name: 'Social media integration', included: true },
      { name: 'Advanced analytics setup', included: true },
      { name: 'Full e-commerce (unlimited products)', included: true },
      { name: 'Custom animations & interactions', included: true },
      { name: 'Blog/CMS setup', included: true },
      { name: '3 rounds of revisions', included: true },
      { name: '3-day delivery', included: true },
      { name: 'Priority phone & email support', included: true },
    ],
    cta: 'Get Started',
    deliveryTime: '3-4 days',
    revisions: '3 rounds',
    support: 'Priority phone & email support',
  },
];

export const valueProps = [
  {
    icon: BoltIcon,
    title: '7x Faster Than Agencies',
    description: 'Traditional agencies take 2-3 months. We deliver in days.',
    stat: '5-7 days vs 8-12 weeks',
  },
  {
    icon: CurrencyDollarIcon,
    title: '70% Cost Savings',
    description: 'Professional quality at fraction of agency prices.',
    stat: '$997 vs $5,000+',
  },
  {
    icon: ShieldCheckIcon,
    title: '30-Day Money Back',
    description: 'Not satisfied? Get your money back, no questions asked.',
    stat: '100% guaranteed',
  },
  {
    icon: SparklesIcon,
    title: 'AI + Human Quality',
    description: 'AI efficiency with human creativity and oversight.',
    stat: 'Best of both worlds',
  },
];

export const faqs = [
  {
    question: 'How does the AI-powered design process work?',
    answer: 'Our AI analyzes your business type, industry trends, and user preferences to create initial designs. Our human designers then refine and customize these designs to ensure they perfectly match your brand and goals.',
  },
  {
    question: 'What if I need changes after delivery?',
    answer: 'Each plan includes revision rounds as specified. Additional revisions can be purchased for $97 each. We want you to be completely satisfied with your website.',
  },
  {
    question: 'Do you provide hosting?',
    answer: 'We can recommend reliable hosting providers and help with setup, but hosting is separate. Most clients use services like Netlify, Vercel, or traditional hosts like Bluehost.',
  },
  {
    question: 'Can I see examples of previous work?',
    answer: 'Absolutely! Check out our portfolio page to see examples of websites we\'ve created across different industries and business types.',
  },
  {
    question: 'What about domain registration?',
    answer: 'Domain registration is separate (typically $10-15/year). We can help you register a domain or work with an existing one you own.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! You can upgrade your plan at any time. We\'ll apply the difference in pricing and add the additional features to your website.',
  },
];

export const calculator = {
  traditionalAgency: {
    designCost: 5000,
    developmentCost: 8000,
    timeWeeks: 12,
    revisionCost: 500,
  },
  webCraftAI: {
    designCost: 997,
    developmentCost: 0,
    timeWeeks: 1,
    revisionCost: 97,
  },
};