import React from 'react';

export type ProjectProps = {
  title: string;
  thumbnail: string;
  category: 'Work experience' | 'Coursework project' | 'Hackathon project' | 'Personal project';
  current_status: 'Completed' | 'In development' | 'In progress';
  started: string;
  ended: string;
  awards: string;
  technologies: string;
  alt: string;
  headline: string;
  content_detailed: Array<React.ReactElement | string | never>;
  git_url?: string;
  website?: string;
}

export const projects: Record<string, ProjectProps> = {
  wise: {
    title: 'Wise - Business Account Management',
    thumbnail: 'wise',
    category: 'Work experience',
    current_status: 'In progress',
    started: '4 September 2023',
    ended: 'n/a',
    awards: 'n/a',
    technologies: 'Next.js, Java Spring, Kafka',
    alt: 'wise screenshot',
    headline: 'Working as a full-stack engineer to improve the Wise Business product.',
    content_detailed: ['To be added.']
  },
  hpc: {
    title: 'LBM Optimisation',
    thumbnail: 'hpc',
    category: 'Coursework project',
    current_status: 'Completed',
    started: '27 February 2023',
    ended: '5 May 2023',
    awards: 'n/a',
    technologies: 'C, OpenMP, MPI',
    alt: 'hpc screenshot',
    headline: 'Parallelising a serial program for simulating fluid dyanmics using OpenMP and MPI.',
    content_detailed: [],
    git_url: 'https://github.com/mitchLui/hpc-coursework'
  },
  'cornell-box': {
    title: 'C++ Graphics Renderer',
    thumbnail: 'cornell_box',
    category: 'Coursework project',
    current_status: 'Completed',
    started: '18 October 2022',
    ended: '16 December 2022',
    awards: '70% (First class)',
    technologies: 'C++',
    alt: 'cornell box screenshot',
    headline: 'A C++ program that renders a Cornell Box scene using various techniques, including wireframing, rasterisations and ray tracing.',
    content_detailed: [],
    git_url: 'https://github.com/mitchLui/rednoise'
  },
  'wise-internship': {
    title: 'Wise - Spend Business Experience',
    thumbnail: 'wise_internship',
    category: 'Work experience',
    current_status: 'Completed',
    started: '27 June 2022',
    ended: '16 September 2022',
    awards: 'n/a',
    technologies: 'React.js, Java Spring, Kafka',
    alt: 'wise internship screenshot',
    headline: `A 12-week full-time internship working across the full stack to 
        improve the user experience of the Wise Business debit card product.`,
    content_detailed: [],
    website: 'https://wise.com'
  },
  'mitchlui-dev': {
    title: 'mitchlui.dev',
    thumbnail: 'mitchlui_dev',
    category: 'Personal project',
    current_status: 'In development',
    started: '1 March 2022',
    ended: 'n/a',
    awards: 'n/a',
    technologies: 'React, TypeScipt',
    alt: 'mitchlui.dev screenshot',
    headline: `Personal website built on React and TypeScript
        for showcasing frontend skills and projects 
        I've worked on to serve as a digital portfolio.`,
    content_detailed: [],
    git_url: 'https://github.com/mitchLui/website',
    website: 'https://mitchlui.dev'
  },
  greenmap: {
    title: 'GreenMap',
    thumbnail: 'greenmap',
    category: 'Hackathon project',
    current_status: 'In development',
    started: '26 Feb 2022',
    ended: 'n/a',
    awards: 'CSS x Boeing Hackathon 2022 - Honourable Mention',
    technologies: 'React.js, FastAPI, Docker, Heroku',
    alt: 'greenmap screenshot',
    headline: `A navigation platform that aggregates data from 3rd party APIs and 
        provides real-time information about nearby shared vehicles. 
        University of Bristol CSS x Boeing Hackathon 2022 Submission.`,
    content_detailed: [],
    git_url: 'https://github.com/mitchLui/greenmap',
    website: 'https://greenmap.mitchlui.dev'
  },
  'ai-workflow': {
    title: 'IBM AI Workflow',
    thumbnail: 'ai_workflow',
    category: 'Coursework project',
    current_status: 'Completed',
    started: '8 October 2021',
    ended: '6 May 2022',
    awards: '75% (First class)',
    technologies: 'React.js, FastAPI, mongoDB, Kubernetes, IBM Carbon Design',
    alt: 'ai-workflow screenshot',
    headline: `An event-triggered automation tool with a web interface for workflow customisation.
        Coursework for Software Engineering Project at University of Bristol.`,
    content_detailed: [
      'Feedback by lecturers: A substantial and professional product created using a mature and robust development process.'
    ],
    git_url: 'https://github.com/mitchLui/ai-workflow',
    website: 'https://ai-workflow.mitchlui.dev'
  },
  // 'uob-it-clinic': {
  //   title: 'IT Clinic Technician at University of Bristol',
  //   thumbnail: 'uob_it_clinic',
  //   category: 'Work experience',
  //   current_status: 'In progress',
  //   started: '20 September 2021',
  //   ended: '31 January 2023',
  //   technologies: 'n/a',
  //   awards: 'n/a',
  //   alt: 'uob it clinic screenshot',
  //   headline: 'Diagnosing and repairing software issues for students',
  //   content_detailed: []
  // },
  // 'uob-graduate-teacher': {
  //   title: 'Graduate Teacher at University of Bristol',
  //   thumbnail: 'uob_graduate_teacher',
  //   category: 'Work experience',
  //   current_status: 'In progress',
  //   started: '20 September 2021',
  //   ended: 'n/a',
  //   technologies: 'C, Haskell, Java, React, Python, ',
  //   awards: 'n/a',
  //   alt: 'uob graduate teacher screenshot',
  //   headline: 'Hosting weekly seminars and giving formative feedback on coursework',
  //   content_detailed: ['Units: Year 1 Programming Seminars (COMS1XXXX), OOP (COMS10017), Software Engineering Project (COMS20006), Computer Systems A (COMS20008), Overview of Software Engineering (COMSM0110)']
  // },
  gol: {
    title: 'Game of Life',
    thumbnail: 'gol',
    category: 'Coursework project',
    current_status: 'Completed',
    started: '1 November 2021',
    ended: '27 December 2021',
    awards: '74% (First class)',
    technologies: 'Golang, AWS',
    alt: 'game of life screenshot',
    headline: `Parallel and Distributed implementation of Conway's Game of Life using Golang. 
        Coursework for Computer Systems A at University of Bristol.`,
    content_detailed: [],
    git_url: 'https://github.com/mitchLui/game-of-life'
  },
  'mask-detector': {
    title: 'Mask Detector',
    thumbnail: 'mask_detector',
    category: 'Hackathon project',
    current_status: 'Completed',
    started: '24 April 2021',
    ended: '25 April 2021',
    awards: 'BEEES Make-a-thon 2021 - Overall best prize / Most verified / Most gamified',
    technologies: 'Python, TensorFlow, Arduino',
    alt: 'mask detector screenshot',
    headline: `Real-time face covering detection application to encourage good mask-wearing practises. 
        University of Bristol BEEEES Make-a-thon 2021 Submission.`,
    content_detailed: [],
    git_url: 'https://github.com/mitchLui/mask-detector'
  },
  'marine-vessel-tracker': {
    title: 'Marine Vessel Tracker',
    thumbnail: 'marine_vessel',
    category: 'Hackathon project',
    current_status: 'Completed',
    started: '20 March 2021',
    ended: '21 March 2021',
    awards: 'CSS x Boeing Hackathon 2021 - 2nd place in category',
    technologies: 'FastAPI, Google Maps API, Docker',
    alt: 'marine vessel tracker screenshot',
    headline: `A real-time marine vessel tracker that shows the position, 
        type and cargo of every marine vessel and ports in the world. 
        University of Bristol CSS x Boeing Hackathon 2021 Submission.`,
    content_detailed: [],
    git_url: 'https://github.com/mitchLui/marine-vessel-tracker'
  },
  'scotland-yard': {
    title: 'Scotland Yard',
    thumbnail: 'scotland_yard',
    category: 'Coursework project',
    current_status: 'Completed',
    started: '1 March 2021',
    ended: '12 May 2021',
    awards: '72% (First class)',
    technologies: 'Java, Guava',
    alt: 'scotland yard screenshot',
    headline: `Modelled game mechanics of Scotland Yard given a skeleton using Java and wrote an AI 
        that uses a backtracking algorithm and scoring method to find the best path for
        Mr X to escape from the detectives.
        Coursework for OOP at University of Bristol.`,
    content_detailed: [],
    git_url: 'https://github.com/mitchLui/scotland-yard'
  },
  'flat-finder': {
    title: 'Flat Finder',
    thumbnail: 'flat_finder',
    category: 'Personal project',
    current_status: 'Completed',
    started: '21 Jan 2021',
    ended: '10 Feb 2021',
    awards: 'n/a',
    technologies: 'Python, Selenium',
    alt: 'flat finder screenshot',
    headline: `A script that searches for flats 
        on Rightmove and Zoopla based on certain criteria.`,
    content_detailed: [],
    git_url: 'https://github.com/mitchLui/flat-finder'
  },
  asiabots: {
    title: 'Internship at Asiabots',
    thumbnail: 'asiabots',
    category: 'Work experience',
    current_status: 'Completed',
    started: '1 June 2020',
    ended: '21 September 2020',
    awards: 'n/a',
    technologies: 'Python, Docker, AWS, Twilio',
    alt: 'asiabots screenshot',
    headline: `A 3-month full-time internship writing API-first microservices 
        for omni-channel conversational AIs in Python.`,
    content_detailed: [],
    website: 'https://www.asiabots.com/'
  }
};
