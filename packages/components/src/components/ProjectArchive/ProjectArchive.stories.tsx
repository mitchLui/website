import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProjectArchive } from './ProjectArchive';

const meta = {
  component: ProjectArchive,
  parameters: { layout: 'padded' },
  args: {
    entries: [
      { title: 'Ray Tracer', href: '/work/ray-tracer', date: 'Oct 2022', tag: { label: 'Academic', color: 'blue' } },
      { title: 'Route Planner', href: '/work/route-planner', date: 'Feb 2022', note: 'Overall best prize · Most verified · Most gamified', tag: { label: 'Hackathon', color: 'orange' } },
      { title: 'Notes App', href: '/work/notes-app', date: 'Jan 2021', tag: { label: 'Personal', color: 'olive' } }
    ]
  }
} satisfies Meta<typeof ProjectArchive>;

export default meta;
type Story = StoryObj<typeof meta>;

type Canvas = Parameters<NonNullable<Story['play']>>[0]['canvas'];

const rectOf = (canvas: Canvas, text: string) => canvas.getByText(text).getBoundingClientRect();

export const Default: Story = {
  play: async ({ canvas, args, userEvent, step }) => {
    await step('renders a row linking to each entry', async () => {
      await expect(canvas.getAllByRole('link')).toHaveLength(args.entries.length);
      args.entries.forEach(entry => expect(canvas.getByText(entry.title).closest('a')).toHaveAttribute('href', entry.href));
    });
    await step('shows awards as a note under the title', async () => {
      await expect(rectOf(canvas, 'Overall best prize · Most verified · Most gamified').top).toBeGreaterThan(rectOf(canvas, 'Route Planner').bottom - 1);
    });
    await step('lines up tags and dates down the list', async () => {
      const dates = args.entries.map(entry => Math.round(rectOf(canvas, entry.date).right));
      const tags = ['Academic', 'Hackathon', 'Personal'].map(label => Math.round(rectOf(canvas, label).right));
      await expect(new Set(dates).size).toBe(1);
      await expect(new Set(tags).size).toBe(1);
    });
    await step('navigates to the entry when the row date is clicked', async () => {
      await userEvent.click(canvas.getByText('Feb 2022'));
      await expect(canvas.getByTestId('navigated-to')).toHaveTextContent('/work/route-planner');
    });
  }
};

export const Phone: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } },
  play: async ({ canvas, args }) => {
    for (const entry of args.entries) {
      const title = rectOf(canvas, entry.title);
      const date = rectOf(canvas, entry.date);
      const tag = rectOf(canvas, entry.tag!.label);
      await expect(Math.abs(date.top + date.height / 2 - (title.top + title.height / 2))).toBeLessThan(3);
      await expect(tag.top).toBeGreaterThan(title.bottom - 1);
    }
    const tagLefts = args.entries.map(entry => Math.round(rectOf(canvas, entry.tag!.label).left));
    await expect(new Set(tagLefts).size).toBe(1);
  }
};
