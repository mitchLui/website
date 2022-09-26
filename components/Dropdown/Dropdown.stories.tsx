import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Dropdown from '.';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Primary = () => 
  <Dropdown
    htmlFor='dropdown'
    onChange={(value) => console.log(value)}
    label='Sort by:'
    options={{
      'Number': [
        {
          value: '1',
          text: '1'
        },
        {
          value: '2',
          text: '2'
        },
      ],
      'Text': [
        {
          value: 'The value is different',
          text: 'This is some text'
        },
      ]
    }}
  />;