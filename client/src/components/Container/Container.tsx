import React from 'react';
import './container.scss';

type ContainerProps = {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps): React.ReactElement =>
    <div><div className="container">{children}</div></div>;
