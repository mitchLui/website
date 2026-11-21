import React from 'react';

type ProjectBase = {
  title: string;
  thumbnail: string;
  alt: string;
  headline: string;
  started: string;
  ended?: string;
  technologies: string[];
  awards?: string[];
  content_detailed?: Array<React.ReactElement | string>;
  git_url?: string;
  website?: string;
  highlight?: boolean;
};

export type ProfessionalProject = ProjectBase & {
  kind: 'professional';
  company: string;
  team?: string;
};

type AcademicProject = ProjectBase & {
  kind: 'academic';
  grade?: string;
};

type HackathonProject = ProjectBase & {
  kind: 'hackathon';
  event: string;
};

type PersonalProject = ProjectBase & {
  kind: 'personal';
};

export type Project = ProfessionalProject | AcademicProject | HackathonProject | PersonalProject;

export const projects: Record<string, Project> = {
  wise: {
    kind: 'professional',
    title: 'Wise – Business Account Management',
    thumbnail: 'wise',
    company: 'Wise',
    team: 'Business Account Management',
    started: '2023-09',
    technologies: ['Next.js', 'Java Spring', 'Kafka'],
    alt: 'Wise Business team member screen listing a role’s permissions for transfers, cards, payment approvals and recipients',
    headline: 'Permissions, money movement and cards for Wise Business customers.'
  },
  hpc: {
    kind: 'academic',
    highlight: true,
    title: 'LBM Optimisation',
    thumbnail: 'hpc',
    started: '2023-02',
    ended: '2023-05',
    technologies: ['C', 'OpenMP', 'MPI'],
    alt: 'C simulation code in an editor beside a heatmap of fluid velocity across the simulated grid',
    headline: 'Parallelising a serial program for simulating fluid dynamics using OpenMP and MPI.',
    git_url: 'https://github.com/mitchLui/hpc-coursework'
  },
  'cornell-box': {
    kind: 'academic',
    title: 'C++ Graphics Renderer',
    thumbnail: 'cornell_box',
    started: '2022-10',
    ended: '2022-12',
    grade: '70% (First class)',
    technologies: ['C++'],
    alt: 'Rendered Cornell box with magenta and yellow walls, a cyan ceiling, red and black blocks and a multicoloured sphere',
    headline: 'A C++ program that renders a Cornell Box scene using various techniques, including wireframing, rasterisation and ray tracing.',
    git_url: 'https://github.com/mitchLui/rednoise'
  },
  'wise-internship': {
    kind: 'professional',
    title: 'Wise – Spend Business Experience',
    thumbnail: 'wise_internship',
    company: 'Wise',
    team: 'Spend Business Experience',
    started: '2022-06',
    ended: '2022-09',
    technologies: ['React.js', 'Java Spring', 'Kafka'],
    alt: 'Wise Business screens for a cashback payment, setting a card PIN and card spending limits',
    headline: 'A 12-week full-stack internship improving the Wise Business debit card.',
    website: 'https://wise.com'
  },
  'mitchlui-dev': {
    kind: 'personal',
    title: 'mitchlui.dev',
    thumbnail: 'mitchlui_dev',
    started: '2022-03',
    technologies: ['React', 'TypeScript'],
    alt: 'Earlier dark version of mitchlui.dev with the heading “Hello, I’m Mitch” and contact links',
    headline: `Personal website built on React and TypeScript
        for showcasing frontend skills and projects
        I've worked on to serve as a digital portfolio.`,
    git_url: 'https://github.com/mitchLui/website',
    website: 'https://mitchlui.dev'
  },
  greenmap: {
    kind: 'hackathon',
    highlight: true,
    title: 'GreenMap',
    thumbnail: 'greenmap',
    event: 'CSS x Boeing Hackathon 2022',
    started: '2022-02',
    awards: ['Honourable Mention'],
    technologies: ['React.js', 'FastAPI', 'Docker', 'Heroku'],
    alt: 'GreenMap route across Bristol on a dark map, beside journey options with their distance, CO2 and travel time',
    headline: `A navigation platform that aggregates data from third-party APIs and
        provides real-time information about nearby shared vehicles.
        University of Bristol CSS x Boeing Hackathon 2022 submission.`,
    git_url: 'https://github.com/mitchLui/greenmap',
    website: 'https://greenmap.mitchlui.dev'
  },
  'ai-workflow': {
    kind: 'academic',
    title: 'IBM AI Workflow',
    thumbnail: 'ai_workflow',
    started: '2021-10',
    ended: '2022-05',
    grade: '75% (First class)',
    technologies: ['React.js', 'FastAPI', 'mongoDB', 'Kubernetes', 'IBM Carbon Design'],
    alt: 'Workflow editor connecting Search Twitter, Write to Google Sheets, Tone Analyzer and Write to Google Slides blocks',
    headline: `An event-triggered automation tool with a web interface for workflow customisation.
        Coursework for Software Engineering Project at University of Bristol.`,
    content_detailed: [
      'Feedback by lecturers: A substantial and professional product created using a mature and robust development process.'
    ],
    git_url: 'https://github.com/mitchLui/ai-workflow',
    website: 'https://ai-workflow.mitchlui.dev'
  },
  gol: {
    kind: 'academic',
    title: 'Game of Life',
    thumbnail: 'gol',
    started: '2021-11',
    ended: '2021-12',
    grade: '74% (First class)',
    technologies: ['Golang', 'AWS'],
    alt: 'Terminal printing alive cell counts per turn beside a window showing the Game of Life grid',
    headline: `Parallel and distributed implementation of Conway's Game of Life using Golang.
        Coursework for Computer Systems A at University of Bristol.`,
    git_url: 'https://github.com/mitchLui/game-of-life'
  },
  'mask-detector': {
    kind: 'hackathon',
    highlight: true,
    title: 'Mask Detector',
    thumbnail: 'mask_detector',
    event: 'BEEES Make-a-thon 2021',
    started: '2021-04',
    ended: '2021-04',
    awards: ['Overall best prize', 'Most verified', 'Most gamified'],
    technologies: ['Python', 'TensorFlow', 'Arduino'],
    alt: 'Mask Detector webcam view with a green box around a masked face labelled Mask 99.94%',
    headline: `Real-time face covering detection application to encourage good mask-wearing practices.
        University of Bristol BEEES Make-a-thon 2021 submission.`,
    git_url: 'https://github.com/mitchLui/mask-detector'
  },
  'marine-vessel-tracker': {
    kind: 'hackathon',
    title: 'Marine Vessel Tracker',
    thumbnail: 'marine_vessel',
    event: 'CSS x Boeing Hackathon 2021',
    started: '2021-03',
    ended: '2021-03',
    awards: ['2nd place in category'],
    technologies: ['FastAPI', 'Google Maps API', 'Docker'],
    alt: 'Map of Tokyo Bay with coloured pins for ships and cards showing a vessel’s position, speed and heading',
    headline: `A real-time marine vessel tracker that shows the position,
        type and cargo of every marine vessel and ports in the world.
        University of Bristol CSS x Boeing Hackathon 2021 submission.`,
    git_url: 'https://github.com/mitchLui/marine-vessel-tracker'
  },
  'scotland-yard': {
    kind: 'academic',
    title: 'Scotland Yard',
    thumbnail: 'scotland_yard',
    started: '2021-03',
    ended: '2021-05',
    grade: '72% (First class)',
    technologies: ['Java', 'Guava'],
    alt: 'Scotland Yard board over a map of London, with each player’s tickets on the left and Mr X’s travel log on the right',
    headline: `Modelled game mechanics of Scotland Yard given a skeleton using Java and wrote an AI
        that uses a backtracking algorithm and scoring method to find the best path for
        Mr X to escape from the detectives.
        Coursework for OOP at University of Bristol.`,
    git_url: 'https://github.com/mitchLui/scotland-yard'
  },
  'flat-finder': {
    kind: 'personal',
    title: 'Flat Finder',
    thumbnail: 'flat_finder',
    started: '2021-01',
    ended: '2021-02',
    technologies: ['Python', 'Selenium'],
    alt: 'Rightmove listings of flats to rent in Bristol City Centre with the Selenium logo over them',
    headline: `A script that searches for flats
        on Rightmove and Zoopla based on certain criteria.`,
    git_url: 'https://github.com/mitchLui/flat-finder'
  },
  asiabots: {
    kind: 'professional',
    title: 'Asiabots – Conversational AI',
    thumbnail: 'asiabots',
    company: 'Asiabots',
    started: '2020-06',
    ended: '2020-09',
    technologies: ['Python', 'Docker', 'AWS', 'Twilio'],
    alt: 'Postman collection of requests to a health chatbot API, showing a JSON reply',
    headline: 'A 3-month internship building API-first Python microservices for omni-channel chatbots and voicebots.',
    website: 'https://www.asiabots.com/'
  }
};

const entries = Object.entries(projects);

export const professionalProjects = entries.filter(([, project]) => project.kind === 'professional');

export const archivedProjects = entries.filter(([, project]) => project.kind !== 'professional');
