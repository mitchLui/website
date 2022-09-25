import React from 'react';

import { ComponentMeta } from '@storybook/react';

import CopyrightFooter from '.';

export default {
  title: 'CopyrightFooter',
  component: CopyrightFooter,
} as ComponentMeta<typeof CopyrightFooter>;

export const Primary = () => <CopyrightFooter/>;