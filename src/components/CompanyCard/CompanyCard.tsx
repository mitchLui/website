import { ReactElement } from 'react';
import { Company } from '../../data/companies';

import styles from './CompanyCard.module.css';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard = ({ company }: CompanyCardProps): ReactElement => {
  return (
    <div className={styles.card} style={{ backgroundColor: company.backgroundColor }}>
      <img
        className={styles.logo}
        src={'/company-logos/' + company.logo}
        alt={company.name}
      />
    </div>
  );
};
