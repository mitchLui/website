import './container.scss';
import { Copyright } from '../Copyright/Copyright';
import { PropsWithChildren, ReactElement } from 'react';

export const Container = ({ children }: PropsWithChildren): ReactElement =>
  <div className="container">{children}<Copyright/></div>;
