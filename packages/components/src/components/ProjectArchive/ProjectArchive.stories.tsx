import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProjectArchive } from './ProjectArchive';

const meta = {
  component: ProjectArchive,
  parameters: { layout: 'padded' },
  args: {
    entries: [
      { title: 'Ray Tracer', href: '/work/ray-tracer', meta: 'Oct 2022', tag: { label: 'Academic', color: 'violet' } },
      { title: 'Route Planner', href: '/work/route-planner', meta: 'Feb 2022 · Winner', tag: { label: 'Hackathon', color: 'orange' } },
      { title: 'Notes App', href: '/work/notes-app', meta: 'Jan 2021' }
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
    await step('renders a tag only for entries that have one', async () => {
      await expect(canvas.getByText('Academic')).toBeVisible();
      await expect(canvas.getByText('Hackathon')).toBeVisible();
      await expect(canvas.getByText('Notes App').closest('a')?.querySelectorAll('span span')).toHaveLength(1);
    });
    await step('navigates to the entry when the row metadata is clicked', async () => {
      await userEvent.click(canvas.getByText('Feb 2022 · Winner'));
      await expect(canvas.getByTestId('navigated-to')).toHaveTextContent('/work/route-planner');
    });
  }
};
