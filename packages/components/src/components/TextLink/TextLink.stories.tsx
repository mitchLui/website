import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { TextLink } from './TextLink';

const meta = {
  component: TextLink,
  args: { to: 'https://www.wise.com', children: 'Wise' }
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  render: args => <p>I’m a Senior Software Engineer on <TextLink {...args}/>’s Business Account Management team.</p>,
  play: async ({ canvas }) => {
    await expect(getComputedStyle(canvas.getByRole('link')).textDecorationLine).toBe('underline');
  }
};

export const Quiet: Story = {
  args: { quiet: true, to: '/work/asiabots/', children: 'Intern · Asiabots' },
  render: args => <h3><TextLink {...args}/></h3>,
  play: async ({ canvas }) => {
    await expect(getComputedStyle(canvas.getByRole('link')).textDecorationColor).toBe('rgba(0, 0, 0, 0)');
  }
};
