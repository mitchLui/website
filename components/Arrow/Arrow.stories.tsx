import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Arrow from '.';

export default {
  title: 'Arrow',
  component: Arrow,
} as ComponentMeta<typeof Arrow>;

export const Primary = () => <Arrow>Back</Arrow>;