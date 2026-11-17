import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { SitemapPage } from './SitemapPage';
import { projects } from '../../data/projects';

const meta = {
  component: SitemapPage,
  parameters: { layout: 'padded' }
} satisfies Meta<typeof SitemapPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Sitemap' })).toBeVisible();
    await expect(canvas.getByRole('link', { name: 'work' })).toHaveAttribute('href', '/work');
    Object.keys(projects).forEach(id =>
      expect(canvas.getByRole('link', { name: id })).toHaveAttribute('href', `/work/${id}`)
    );
    await expect(canvas.getByRole('link', { name: 'cv.pdf' })).toHaveAttribute('href', '/cv.pdf');
  }
};
