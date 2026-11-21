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
    await expect(canvas.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/work/');
    Object.entries(projects).forEach(([id, project]) =>
      expect(canvas.getByRole('link', { name: project.title })).toHaveAttribute('href', `/work/${id}/`)
    );
    await expect(canvas.getByRole('link', { name: 'CV' })).toHaveAttribute('href', '/cv.pdf');
    await expect(canvas.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', '/linkedin/');
  }
};
