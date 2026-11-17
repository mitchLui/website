import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProjectArchive } from './ProjectArchive';

const meta = {
  component: ProjectArchive,
  parameters: { layout: 'padded' },
  args: {
    entries: [
      { title: 'Ray Tracer', href: '/work/ray-tracer', meta: 'Academic · Oct 2022' },
      { title: 'Route Planner', href: '/work/route-planner', meta: 'Hackathon · Feb 2022 · Winner' }
    ]
  }
} satisfies Meta<typeof ProjectArchive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, args, userEvent, step }) => {
    await step('renders a row linking to each entry', async () => {
      await expect(canvas.getAllByRole('link')).toHaveLength(args.entries.length);
      args.entries.forEach(entry => expect(canvas.getByText(entry.title).closest('a')).toHaveAttribute('href', entry.href));
    });
    await step('renders the metadata of each row', async () => {
      args.entries.forEach(entry => expect(canvas.getByText(entry.meta)).toBeVisible());
    });
    await step('navigates to the entry when the row metadata is clicked', async () => {
      await userEvent.click(canvas.getByText('Hackathon · Feb 2022 · Winner'));
      await expect(canvas.getByTestId('navigated-to')).toHaveTextContent('/work/route-planner');
    });
  }
};
