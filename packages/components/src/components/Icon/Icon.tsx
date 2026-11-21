import { ReactElement } from 'react';

const paths = {
  'arrow-right': 'M3 8h10M9 4l4 4-4 4',
  'chevron-left': 'M11 1.5 4.5 8l6.5 6.5'
};

export type IconName = keyof typeof paths;

export const Icon = ({ name, size = 16 }: { name: IconName; size?: number }): ReactElement =>
  <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={paths[name]}/>
  </svg>;
