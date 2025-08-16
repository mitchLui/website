import { ReactElement } from 'react';
import { Company } from '../../data/companies';

import styles from './CompanyCard.module.css';
import { Link } from 'react-router';

interface CompanyCardProps {
  name: string
  details: Company;
}

export const CompanyCard = ({ name, details }: CompanyCardProps): ReactElement => {
  return (
    <Link className={styles.card} style={{ backgroundColor: details.backgroundColor }} to={'/' + name}>
      <img
        className={styles.logo}
        src={'/company-logos/' + details.logo}
        alt={details.name}
      />
    </Link>
  );
};
