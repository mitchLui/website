import React from 'react';

import { ComponentMeta } from '@storybook/react';

import FadeIn from '.';

export default {
  title: 'FadeIn',
  component: FadeIn,
} as ComponentMeta<typeof FadeIn>;

export const Primary = () => 
  <FadeIn>This text should just fade in</FadeIn>;