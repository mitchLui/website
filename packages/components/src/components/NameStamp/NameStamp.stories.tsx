import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { NameStamp } from './NameStamp';
import { resolved } from '../../testing/resolve';

const meta = {
  component: NameStamp,
  parameters: { layout: 'centered' },
  args: { name: '呂家天' }
} satisfies Meta<typeof NameStamp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const stamp = canvas.getByText('呂家天');
    await expect(stamp).toHaveAttribute('lang', 'zh-Hant');
    await expect(stamp).toHaveStyle({ writingMode: 'vertical-rl', backgroundColor: resolved('backgroundColor', 'var(--color-stamp)') });
  }
};
