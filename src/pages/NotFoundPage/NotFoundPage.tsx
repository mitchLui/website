import styles from './NotFoundPage.module.css';
import { Button } from '../../components/Button/Button';

export const NotFoundPage = () => {
  return (
    <div className={styles.headerText}>
      <h1>404 Not Found!</h1>
      <h2>You might want to go back...</h2>
      <Button as="a" style={{ marginBottom: '1rem' }} to={'/'}>Go back</Button>
    </div>
  );
};
