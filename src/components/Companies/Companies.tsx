import { Company } from '../../data/companies';
import { CompanyCard } from '../CompanyCard/CompanyCard';

import styles from './Companies.module.css';

interface CompaniesProps {
  companies: Company[];
}

export const Companies = ({ companies }: CompaniesProps) => {
  return (
    <div className={styles.container}>
      {companies.map((company) => (
        <CompanyCard key={company.name} company={company} />
      ))}
    </div>
  );
};
