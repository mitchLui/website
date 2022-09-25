import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Card from '.';
import Button from '../Button';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Primary = () => 
  <Card>
    <p>This is a card with a bunch of information</p>
    <Button>Test</Button>
  </Card>;