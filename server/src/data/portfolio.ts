import { PortfolioData } from '../types'

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Daniel Suh',
    tagline: 'Software Engineer',
    sub: 'Building reliable systems at scale.',
    about:
      "I'm a software engineer with a passion for building robust, scalable systems. " +
      'I thrive at the intersection of infrastructure, observability, and developer tooling.',
    email: 'jeongseok.suh@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jeongseok-suh/',
  },
  achievements: [
    {
      icon: '🚀',
      title: 'Achievement Title',
      meta: 'Company · Year',
      description:
        'Describe the impact of this achievement. Focus on outcomes and scale — e.g., reduced latency by 40%, saved $X, onboarded Y teams.',
    },
    {
      icon: '⚙️',
      title: 'Achievement Title',
      meta: 'Company · Year',
      description:
        'Describe the impact of this achievement. What problem did you solve? What was the before/after?',
    },
    {
      icon: '📈',
      title: 'Achievement Title',
      meta: 'Company · Year',
      description: 'Describe the impact of this achievement. Quantify wherever possible.',
    },
  ],
  skills: [
    { category: 'Languages', skills: ['Go', 'Python', 'TypeScript'] },
    { category: 'Infrastructure', skills: ['AWS', 'Kubernetes', 'Terraform'] },
    { category: 'Observability', skills: ['Datadog', 'OpenTelemetry', 'Prometheus'] },
    { category: 'Practices', skills: ['Distributed systems', 'CI/CD', 'On-call & incident response'] },
  ],
}
