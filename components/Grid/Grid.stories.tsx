import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Grid from '.';
import Card from '../Card';

export default {
  title: 'Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Primary = () => 
  <Grid>
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
  </Grid>;