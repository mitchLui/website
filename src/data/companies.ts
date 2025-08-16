export interface Company {
  name: string;
  logo: string;
  backgroundColor: string;
}

export const companies: Record<string, Company> = {
  wise: {
    name: 'Wise',
    logo: 'wise.png',
    backgroundColor: '#9FE870'
  },
  'university-of-bristol': {
    name: 'University of Bristol',
    logo: 'university_of_bristol.png',
    backgroundColor: '#FFFFFF'
  },
  asiabots: {
    name: 'Asiabots',
    logo: 'asiabots.png',
    backgroundColor: '#FFFFFF'
  }
};
