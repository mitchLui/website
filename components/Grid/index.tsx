import React from 'react';
import gridStyles from './Grid.module.scss';

type GridProps = {
    children: React.ReactNode;
};

const Grid = ({ children }: GridProps): React.ReactElement => {
  return (
    <div className={gridStyles.main}>
      {children}
    </div>
  );
};

export default Grid;