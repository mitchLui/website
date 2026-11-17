import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProjectArchive } from './ProjectArchive';
import { archivedProjects } from '../../data/projects';

const meta = {
  component: ProjectArchive,
  parameters: { layout: 'padded' },
  args: { projects: archivedProjects }
} satisfies Meta<typeof ProjectArchive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, args, userEvent, step }) => {
    await step('renders a row linking to each project', async () => {
      await expect(canvas.getAllByRole('link')).toHaveLength(args.projects.length);
      args.projects.forEach(([id, project]) =>
        expect(canvas.getByText(project.title).closest('a')).toHaveAttribute('href', `/work/${id}`)
      );
    });
    await step('renders the kind, start month and awards of a row', async () => {
      await expect(canvas.getByText('Hackathon · Apr 2021 · Overall best prize · Most verified · Most gamified')).toBeVisible();
    });
    await step('navigates to the project when the row metadata is clicked', async () => {
      await userEvent.click(canvas.getByText('Hackathon · Apr 2021 · Overall best prize · Most verified · Most gamified'));
      await expect(canvas.getByTestId('navigated-to')).toHaveTextContent('/work/mask-detector');
    });
  }
};
