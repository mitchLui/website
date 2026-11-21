import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { NewTabHint } from './NewTabHint';

const meta = {
  component: NewTabHint,
  render: args => <a href="/cv.pdf" target="_blank">CV<NewTabHint {...args}/></a>
} satisfies Meta<typeof NewTabHint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TellsScreenReadersOnly: Story = {
  args: { format: 'PDF' },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: 'CV (PDF, opens in a new tab)' });
    await expect(link.lastElementChild!.getBoundingClientRect()).toMatchObject({ width: 1, height: 1 });
    await expect(link.getBoundingClientRect().width).toBeLessThan(40);
  }
};
