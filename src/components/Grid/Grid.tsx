import React from 'react';
import './grid.scss';

type GridProps = {
    children: React.ReactNode;
};

export const Grid = ({ children }: GridProps): React.ReactElement => {
  return (
        <div className={'grid'}>
            {children}
        </div>
  );
};
