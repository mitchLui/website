import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { WorkPage } from './WorkPage';
import { archivedProjects, professionalProjects } from '../../data/projects';

const meta = {
  component: WorkPage,
  parameters: { layout: 'padded' }
} satisfies Meta<typeof WorkPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, step }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Work' })).toBeVisible();
    await step('renders a card for each professional project', async () => {
      professionalProjects.forEach(([, project]) =>
        expect(canvas.getByRole('heading', { name: project.title })).toBeVisible()
      );
    });
    await step('lists every other project under Earlier projects', async () => {
      await expect(canvas.getByRole('heading', { name: 'Earlier projects' })).toBeVisible();
      archivedProjects.forEach(([id, project]) =>
        expect(canvas.getByText(project.title, { selector: 'a span' }).closest('a')).toHaveAttribute('href', `/work/${id}`)
      );
    });
    await step('shows awards but not grades', async () => {
      await expect(canvas.getByText(/Overall best prize/)).toBeVisible();
      await expect(canvas.queryByText(/First class/)).not.toBeInTheDocument();
    });
  }
};
