import React from 'react';

import { ComponentMeta } from '@storybook/react';

import NavBar from '.';

export default {
  title: 'NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Primary = () => <NavBar/>;