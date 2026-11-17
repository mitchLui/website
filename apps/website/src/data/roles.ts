export type Role = {
  project: string;
  title: string;
  started: string;
  ended?: string;
  level: 'Senior' | 'Mid-level' | 'Graduate' | 'Intern';
  impact: string[];
};

export const roles: Role[] = [
  {
    project: 'wise',
    title: 'Senior Software Engineer',
    started: '2026-06',
    level: 'Senior',
    impact: [
      'Led the redesign of the business account permission model, moving from a flat structure to granular, scope-based access control over accounts, cards and transfers.'
    ]
  },
  {
    project: 'wise',
    title: 'Software Engineer',
    started: '2025-06',
    ended: '2026-06',
    level: 'Mid-level',
    impact: [
      'Helped deliver a new experience for moving money within a Wise Account, halving the steps needed to convert and move currencies.',
      'Contributed to the company-wide shift to an account-first offering, supporting the authorization domains and using server-driven UIs to speed up development.'
    ]
  },
  {
    project: 'wise',
    title: 'Graduate Software Engineer',
    started: '2023-09',
    ended: '2025-06',
    level: 'Graduate',
    impact: [
      'Moved Wise Business users from role-based access control to a permissions-based model, giving customers more flexibility to assign financial jobs to team members.',
      'Independently rebuilt the backoffice tool for managing feature flags.',
      'Led small projects such as standardising access checks on web.',
      'Helped launch Team Cards, letting team members view and manage the business’s cards.'
    ]
  },
  {
    project: 'wise-internship',
    title: 'Software Engineer Intern',
    started: '2022-06',
    ended: '2022-09',
    level: 'Intern',
    impact: [
      'Developed the web experience for Card Cashback for UK businesses.',
      'Built a companion backoffice tool to help customer service agents answer queries.'
    ]
  },
  {
    project: 'asiabots',
    title: 'Software Engineer Intern',
    started: '2020-06',
    ended: '2020-09',
    level: 'Intern',
    impact: [
      'Worked with the founding team to build chatbots, voicebots and other software for clients including DBS and Cathay Pacific.'
    ]
  }
];

export const rolesFor = (projectId: string): Role[] => roles.filter(role => role.project === projectId);
