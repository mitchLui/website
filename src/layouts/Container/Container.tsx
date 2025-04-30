import './Container.scss';
import { Copyright } from '../../components/Copyright/Copyright';
import { PropsWithChildren, ReactElement } from 'react';

export const Container = ({ children }: PropsWithChildren): ReactElement =>
  <div className="container">{children}<Copyright/></div>;
