import styles from './NotFoundPage.module.css';
import { Button, PageTitle } from '@mitchlui/components';

export const NotFoundPage = () =>
  <div className={styles.notFound}>
    <PageTitle>Page not found</PageTitle>
    <p>This page doesn&apos;t exist or has moved.</p>
    <Button as="a" to={'/'}>Go home</Button>
  </div>;
