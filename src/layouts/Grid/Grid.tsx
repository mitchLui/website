import { ReactElement, PropsWithChildren } from 'react';
import './grid.scss';

export const Grid = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className={'grid'}>
      {children}
    </div>
  );
};
