import React from 'react';
import './container.scss';
import { Copyright } from '../Copyright/Copyright';

type ContainerProps = {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps): React.ReactElement =>
  <div className="container">{children}<Copyright/></div>;
