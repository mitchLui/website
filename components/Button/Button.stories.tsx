import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button href="https://mitchlui.dev">Button</Button>;