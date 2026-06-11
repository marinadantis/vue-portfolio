import type { Project } from '@/types'

export const PROJECTS: Project[] = [
  {
    title: 'Hello Chef Admin 2.0',
    description:
      'A centralized internal platform to streamline company-wide workflows, automate repetitive tasks and maximize departmental efficiency.',
    imageSrc: '/assets/images/hello-chef-admin-v2.png',
    technologies: ['Vue3', 'TypeScript', 'TailwindCSS', 'Pinia', 'Quasar'],
    liveDemoLink: 'https://admin-v2.hellochef.me',
    githubLink: '',
  },
  {
    title: 'Hello Chef Signature Builder',
    description:
      'A lightweight web application that standardizes corporate branding by enabling employees to instantly generate clean, compliant email signatures.',
    imageSrc: '/assets/images/signature-builder.png',
    technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
    liveDemoLink: 'https://hellochef-signature-builder.vercel.app/',
    githubLink: 'https://github.com/marinadantis/hellochef-signature',
  },
  {
    title: 'My Developer Portfolio',
    description:
      'A minimalist, responsive showcase portfolio app built entirely with native web standards, demonstrating deep mastery of core front-end technologies without heavy framework overhead.',
    imageSrc: '/assets/images/portfolio-desktop.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Mobile-First Design',],
    liveDemoLink: 'https://hellochef-signature-builder.vercel.app/',
    githubLink: 'https://github.com/marinadantis/hellochef-signature',
  },
]
