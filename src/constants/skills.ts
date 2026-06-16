import type { SkillCategory } from '@/types'

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    description: 'Building responsive, accessible and high-performance web interfaces.',
    skills: [
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Pinia',
      'Quasar',
      'HTML',
      'CSS',
    ],
    categoryStyles:
      'border border-blue-500/50 hover:shadow-xl hover:border-blue-400 hover:shadow-blue-500/10 hover:bg-blue-500/[0.01] hover:scale-102',
    skillStyles: 'border border-blue-500/10 bg-blue-500/10 text-blue-300',
  },
  {
    category: 'Product Engineering',
    description: 'Turning ideas into user-centered products with a quality-first mindset.',
    skills: [
      'Product Thinking',
      'Requirement Analysis',
      'Workflow Optimization',
      'Stakeholder Collaboration',
    ],
    categoryStyles:
      'border border-cyan-500/50 hover:shadow-xl hover:border-cyan-400 hover:shadow-cyan-500/10 hover:bg-cyan-500/[0.01] hover:scale-102',
    skillStyles: 'border border-cyan-500/10 bg-cyan-500/10 text-cyan-300',
  },
  {
    category: 'Testing & Quality',
    description: 'Ensuring reliability through automated testing and API validation.',
    skills: [
      'Cypress',
      'API Testing',
      'Functional Testing',
      'QA Automation',
      'Quality-First Mindset',
      'JUnit',
      'REST APIs',
      'SQL',
    ],
    categoryStyles:
      'border border-teal-500/50 hover:border-teal-400 hover:shadow-teal-500/10 hover:shadow-xl hover:bg-teal-500/[0.01] hover:scale-102',
    skillStyles: 'border border-teal-500/10 bg-teal-500/10 text-teal-300',
  },
  {
    category: 'DevOps & Cloud',
    description: 'Deploying and managing applications with modern DevOps practices.',
    skills: [
      'Git',
      'CI/CD',
      'CircleCI',
      'AWS',
      'Kubernetes',
      'Docker',
      'Monitoring',
      'ArgoCD',
      'Helm',
      'Terraform',
      'Grafana',
    ],
    categoryStyles:
      'border border-purple-500/50 hover:border-purple-400 hover:shadow-purple-500/10 hover:shadow-xl hover:bg-purple-500/[0.01] hover:scale-102',
    skillStyles: 'border border-purple-500/10 bg-purple-500/10 text-purple-300',
  },
  {
    category: 'AI-Assisted Development',
    description: 'Leveraging AI tools to boost productivity and streamline development.',
    skills: [
      'Cursor',
      'GitHub Copilot',
      'Code Rabbit',
      'ChatGPT',
      'Prompt Engineering',
      'AI workflows',
      'Code Generation',
    ],
    categoryStyles:
      'border border-emerald-500/50 hover:border-emerald-400 hover:shadow-emerald-500/10 hover:shadow-xl hover:bg-emerald-500/[0.01] hover:scale-102',
    skillStyles: 'border border-emerald-500/10 bg-emerald-500/10 text-emerald-300',
  },
  {
    category: 'Tools & Collaboration',
    description: 'Design, collaboration and data tools for better decision making.',
    skills: [
      'Figma',
      'JIRA',
      'Postman',
      'Datadog',
      'VS Code',
      'Notion',
      'Extreme Programming',
      'Agile',
      'Scrum',
    ],
    categoryStyles:
      'border border-indigo-500/50 hover:border-indigo-400 hover:shadow-indigo-500/10 hover:shadow-xl hover:bg-indigo-500/[0.01] hover:scale-102',
    skillStyles: 'border border-indigo-500/10 bg-indigo-500/10 text-indigo-300',
  },
]
