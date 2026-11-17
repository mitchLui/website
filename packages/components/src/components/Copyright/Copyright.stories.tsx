import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Link } from 'react-router';
import { Copyright } from './Copyright';

const meta = {
  component: Copyright,
  args: { owner: 'Jane Doe' }
} satisfies Meta<typeof Copyright>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(`© ${new Date().getFullYear()} Jane Doe`)).toBeVisible();
    await expect(canvas.queryByRole('link')).not.toBeInTheDocument();
  }
};

export const WithLinks: Story = {
  args: { children: <Link to="/sitemap">Sitemap</Link> },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Sitemap' })).toHaveAttribute('href', '/sitemap');
  }
};
