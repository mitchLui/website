import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProjectTile } from './ProjectTile';

const meta = {
  component: ProjectTile,
  parameters: { layout: 'centered' },
  decorators: [Story => <div style={{ width: '260px' }}><Story/></div>],
  args: { href: '/work/mask-detector', eyebrow: 'Hackathon · Apr 2021', title: 'Mask Detector', detail: 'Overall best prize' }
} satisfies Meta<typeof ProjectTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, args, userEvent }) => {
    const tile = canvas.getByRole('link', { name: /Mask Detector/ });
    await expect(tile).toHaveTextContent('Hackathon · Apr 2021Mask DetectorOverall best prize');
    await expect(tile).toHaveStyle({ borderTopStyle: 'solid' });
    await userEvent.click(tile);
    await expect(canvas.getByTestId('navigated-to')).toHaveTextContent(args.href);
  }
};

export const More: Story = {
  args: { href: '/work', eyebrow: 'And 7 more', title: 'All projects', detail: undefined, more: true },
  play: async ({ canvas }) => {
    const tile = canvas.getByRole('link', { name: /All projects/ });
    await expect(tile).toHaveStyle({ borderTopStyle: 'dashed' });
    await expect(tile.children).toHaveLength(2);
  }
};
