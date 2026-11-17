import styles from './NotFoundPage.module.css';
import { Button } from '@mitchlui/components';

export const NotFoundPage = () => {
  return (
    <div className={styles.headerText}>
      <h1>Page not found</h1>
      <h2>This page doesn&apos;t exist or has moved.</h2>
      <Button as="a" style={{ marginBottom: '1rem' }} to={'/'}>Go home</Button>
    </div>
  );
};
