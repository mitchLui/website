import React, { useState } from 'react';

import { ComponentMeta } from '@storybook/react';

import Hamburger from '.';

export default {
  title: 'Hamburger',
  component: Hamburger,
} as ComponentMeta<typeof Hamburger>;

export const Primary = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />;
};