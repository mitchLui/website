import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { SkipLink } from './SkipLink';

const meta = {
  component: SkipLink,
  args: { target: 'content' },
  render: args => <><SkipLink {...args}/><main id="content" tabIndex={-1}>Page</main></>
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HiddenUntilFocused: Story = {
  play: async ({ canvas, userEvent }) => {
    const link = canvas.getByRole('link', { name: 'Skip to content' });
    await expect(link).toHaveAttribute('href', '#content');
    await expect(link.getBoundingClientRect().bottom).toBeLessThanOrEqual(0);
    await userEvent.tab();
    await expect(link).toHaveFocus();
    await expect(link.getBoundingClientRect().top).toBeGreaterThanOrEqual(0);
  }
};
