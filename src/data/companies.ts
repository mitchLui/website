export interface CompanyDetails {
  name: string;
  logo: string;
  backgroundColor: string;
}

export enum Company {
  Wise = 'wise',
  UniversityOfBristol = 'university-of-bristol',
  Asiabots = 'asiabots',
  Me = 'me'
}

export const companies: Record<Company, CompanyDetails> = {
  [Company.Wise]: {
    name: 'Wise',
    logo: 'wise.png',
    backgroundColor: '#9FE870'
  },
  [Company.UniversityOfBristol]: {
    name: 'University of Bristol',
    logo: 'university_of_bristol.png',
    backgroundColor: '#FFFFFF'
  },
  [Company.Asiabots]: {
    name: 'Asiabots',
    logo: 'asiabots.png',
    backgroundColor: '#FFFFFF'
  },
  [Company.Me]: {
    name: 'Me',
    logo: 'me.png',
    backgroundColor: '#232323ff'
  }
};
