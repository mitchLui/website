import React from 'react';
import containerStyles from './Container.module.css';

type ContainerProps = {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps): React.ReactElement =>
  <div className={containerStyles.main}>{children}</div>;