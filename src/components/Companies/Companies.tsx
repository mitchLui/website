import { Company } from '../../data/companies';
import { CompanyCard } from '../CompanyCard/CompanyCard';

import styles from './Companies.module.css';

interface CompaniesProps {
  companies: Record<string, Company>;
}

export const Companies = ({ companies }: CompaniesProps) => {
  return (
    <div className={styles.container}>
      {Object.entries(companies).map(([key, company]) => (
        <CompanyCard key={key} name={key} details={company} />
      ))}
    </div>
  );
};
