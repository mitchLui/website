import React from 'react';
import containerStyles from './Container.module.scss';

type ContainerProps = {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps): React.ReactElement =>
  <div className={containerStyles.main}>{children}</div>;