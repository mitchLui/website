import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Icon } from './Icon';

const meta = {
  component: Icon,
  parameters: { layout: 'centered' },
  args: { name: 'arrow-right' }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: () => <p style={{ display: 'flex', gap: 16 }}><Icon name="arrow-right"/><Icon name="chevron-left"/><Icon name="chevron-left" size={18}/></p>,
  play: async ({ canvasElement }) => {
    const icons = [...canvasElement.querySelectorAll('svg')];
    await expect(icons.map(icon => [icon.getAttribute('width'), icon.getAttribute('aria-hidden')])).toEqual([['16', 'true'], ['16', 'true'], ['18', 'true']]);
    await expect(new Set(icons.map(icon => getComputedStyle(icon.querySelector('path')!).strokeLinecap))).toEqual(new Set(['round']));
  }
};
