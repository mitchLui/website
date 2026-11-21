import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Eyebrow } from './Eyebrow';

const meta = {
  component: Eyebrow,
  args: { children: 'Hackathon · Apr 2021', line: 'education' }
} satisfies Meta<typeof Eyebrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLine: Story = {};

export const NowAt: Story = {
  args: { children: 'Now at Wise · London', line: 'wise', marker: 'dot' },
  play: async ({ canvasElement }) => {
    const marker = canvasElement.querySelector('[aria-hidden]')!.getBoundingClientRect();
    await expect([marker.width, marker.height]).toEqual([10, 10]);
  }
};

export const TextOnly: Story = {
  args: { line: undefined, children: 'Sep 2023 – Present' }
};
