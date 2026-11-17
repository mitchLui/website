import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';
import { rolesFor } from '../../data/roles';

const meta = {
  component: ProjectCard,
  parameters: { layout: 'centered' },
  decorators: [Story => <div style={{ width: '360px' }}><Story/></div>]
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Professional: Story = {
  args: { id: 'wise-internship', project: projects['wise-internship'] },
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole('heading', { name: args.project.title })).toBeVisible();
    await expect(canvas.getByText(args.project.headline)).toBeVisible();
    await expect(canvas.getAllByRole('listitem').map(item => item.textContent)).toEqual(rolesFor(args.id)[0].impact);
    await expect(canvas.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', '/work/wise-internship');
    await expect(canvas.queryByRole('link', { name: 'Code' })).not.toBeInTheDocument();
  }
};

export const WithCode: Story = {
  args: { id: 'hpc', project: projects.hpc },
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole('heading', { name: args.project.title })).toBeVisible();
    await expect(canvas.queryByRole('list')).not.toBeInTheDocument();
    await expect(canvas.getByRole('link', { name: 'Code' })).toHaveAttribute('href', 'https://github.com/mitchLui/hpc-coursework');
  }
};
