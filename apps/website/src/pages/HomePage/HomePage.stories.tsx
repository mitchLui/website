import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { HomePage } from './HomePage';
import { featuredProjects } from '../../data/projects';

const meta = {
  component: HomePage
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, canvasElement }) => {
    const fadeIn = canvasElement.querySelector<HTMLElement>('[style*="opacity"]');
    await waitFor(() => expect(fadeIn).toHaveStyle({ opacity: '1' }));
    await expect(canvas.getByText(/Born and raised in Hong Kong, now based in London\. I'm a Senior Software Engineer on/)).toBeVisible();
    await expect(canvas.getByRole('link', { name: 'Wise\'s' })).toHaveAttribute('href', 'https://www.wise.com');
    await expect(canvas.getByRole('heading', { name: 'Recent work' })).toBeVisible();
    await expect(canvas.getByText('At Wise')).toBeVisible();
    featuredProjects.forEach(([, project]) =>
      expect(canvas.getByRole('heading', { name: project.title })).toBeVisible()
    );
    await expect(canvas.getByRole('link', { name: 'See all work' })).toHaveAttribute('href', '/work');
  }
};
