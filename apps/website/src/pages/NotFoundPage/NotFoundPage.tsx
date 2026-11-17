import styles from './NotFoundPage.module.css';
import { Button } from '@mitchlui/components';

export const NotFoundPage = () =>
  <div className={styles.notFound}>
    <h1>Page not found</h1>
    <p>This page doesn&apos;t exist or has moved.</p>
    <Button as="a" to={'/'}>Go home</Button>
  </div>;
