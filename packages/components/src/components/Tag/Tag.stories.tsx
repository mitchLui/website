import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Tag, TagColor } from './Tag';
import { resolved } from '../../testing/resolve';

const meta = {
  component: Tag,
  parameters: { layout: 'centered' },
  args: { color: 'green', children: 'Professional' }
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

const kinds: [TagColor, string][] = [['green', 'Professional'], ['olive', 'Personal'], ['blue', 'Academic'], ['orange', 'Hackathon']];

export const Colours: Story = {
  render: () =>
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      {kinds.map(([color, label]) => <Tag key={color} color={color}>{label}</Tag>)}
    </div>,
  play: async ({ canvas }) => {
    for (const [color, label] of kinds) {
      await expect(canvas.getByText(label)).toHaveStyle({ color: resolved('color', `var(--color-tag-${color})`) });
    }
  }
};
