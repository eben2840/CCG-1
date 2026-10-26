import { ChartNoAxesCombined, ShieldCheck, Workflow, Cpu, Leaf, Users, ClipboardCheck, Settings, Target, BriefcaseBusiness } from 'lucide-react';

export const services = [
  { name: 'Strategy & Corporate Finance', description: 'Make decisive, future-proof choices. Unlock growth with analytical rigor and strategic foresight.', icon: ChartNoAxesCombined },
  { name: 'Risk & Resilience', description: 'Build confidence in a changing world. Strengthen governance, protect your business, and stay ready for what’s next.', icon: ShieldCheck },
  { name: 'Business Transformation', description: 'Turn bold ambition into lasting progress. Reimagine your organization, from strategy through execution.', icon: Workflow },
  { name: 'AI Implementation', description: 'Translate emerging technology into practical, responsible solutions that create real business value.', icon: Cpu },
  { name: 'People & Organizational Performance', description: 'Elevate people, align leadership, and build the capabilities that sustain organizational performance.', icon: Users },
  { name: 'Technology', description: 'Design future-ready systems, strengthen security architecture, and accelerate digital progress.', icon: Target },
  { name: 'Sustainability', description: 'Integrate long-term thinking into strategy and operations to create sustainable competitive advantage.', icon: Leaf },
  { name: 'Audits', description: 'Bring clarity to controls, governance, and compliance through structured assessment and expert guidance.', icon: ClipboardCheck },
  { name: 'Implementation', description: 'Move beyond recommendations. Execute with precision, monitor performance, and sustain results.', icon: BriefcaseBusiness },
  { name: 'Operations', description: 'Reshape operations with data-informed solutions that strengthen efficiency and resilience.', icon: Settings },
];

export const industries = ['Agriculture', 'Consumer Packaged Goods', 'Education', 'Engineering, Construction & Building Materials', 'Financial Services', 'Healthcare', 'Infrastructure', 'Logistics', 'P&P'];

export const approach = [
  ['From idea to impact', 'We guide our clients through a full lifecycle of transformation, from diagnosing root challenges to designing evidence-based solutions and supporting execution.'],
  ['Research-driven. Human-centered.', 'We combine advanced analytical tools, predictive insights, and stakeholder interviews to understand the organizational landscape. Data intelligence and human insight shape practical, adoptable solutions.'],
  ['A partnership, not a handoff', 'We work alongside leadership teams, technical experts, and front-line stakeholders to co-create solutions, accelerate adoption, and build lasting internal capability.'],
  ['Built for your unique challenge', 'Each strategy is shaped by industry expertise and matched to your organizational culture, structure, and goals. We reject generic solutions.'],
  ['Execution and sustained results', 'We support implementation, monitor performance, assess risk, and refine strategy as market conditions evolve.'],
];

export const insights = [
  {
    title: 'An ISO 27001 programme that delivers',
    summary: 'Our work continues beyond the delivery of recommendations. We deliver forward-thinking research that helps leaders understand complex challenges and anticipate emerging disruptions.',
    date: 'Dec 24, 2025',
    category: 'Security'
  },
  {
    title: 'Re-architecting security for a complex estate',
    summary: 'Deep engagement with industries, markets, and technologies allows us to study global trends and regulatory evolutions to equip organizations for uncertainty.',
    date: 'Dec 24, 2025',
    category: 'Technology'
  },
  {
    title: 'Recognised for security excellence',
    summary: 'Coastline Citadel Group stands as a trusted source of strategic intelligence for organizations seeking to stay ahead in a rapidly evolving world.',
    date: 'Dec 24, 2025',
    category: 'Excellence'
  }
];

export const careersContent = {
  valueProp: 'The pace is demanding and expectations are high, but you’ll learn faster here than anywhere else, supported by teams that are committed to making each other—and our clients—better.',
  growthDescription: 'Whether you’re with us for two years or 20, the skills you build will make you a leader ahead of your peers and change the trajectory of your career.',
  roles: [
    { title: 'Security Engineer', location: 'Sheridan, WY / Remote', type: 'Full-time' },
    { title: 'Management Consultant', location: 'Remote / Hybrid', type: 'Full-time' },
    { title: 'Risk Analyst', location: 'Remote', type: 'Contract' }
  ]
};

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Coastline Citadel Group` },
      { name: 'description', content: description },
      { property: 'og:title', content: `${title} | Coastline Citadel Group` },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]
  };
}
