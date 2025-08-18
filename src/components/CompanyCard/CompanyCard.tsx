import { ReactElement } from 'react';
import { CompanyDetails } from '../../data/companies';
import { motion } from 'motion/react';

import styles from './CompanyCard.module.css';
import { Link } from 'react-router';

interface CompanyCardProps {
  name: string
  details: CompanyDetails;
}

export const CompanyCard = ({ name, details }: CompanyCardProps): ReactElement => {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Link className={styles.card} style={{ backgroundColor: details.backgroundColor }} to={'/' + name}>
        <img
          className={styles.logo}
          src={'/company-logos/' + details.logo}
          alt={details.name}
        />
      </Link>
    </motion.div>
  );
};
