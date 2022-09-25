import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Cross from '.';

export default {
  title: 'Cross',
  component: Cross,
} as ComponentMeta<typeof Cross>;

export const Primary = () => <Cross/>;