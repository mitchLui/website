import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { FeaturedProject } from './FeaturedProject';
import { featuredProjects } from '../../data/projects';
import { rolesFor } from '../../data/roles';

const featured = Object.fromEntries(featuredProjects);

const meta = {
  component: FeaturedProject,
  parameters: { layout: 'padded' }
} satisfies Meta<typeof FeaturedProject>;

export default meta;
type Story = StoryObj<typeof meta>;

const textOf = (elements: HTMLElement[]) => elements.map(element => element.textContent);

const expectSixteenByTenScreenshot = async (image: HTMLImageElement) => {
  await waitFor(() => expect(image.complete && image.naturalWidth > 0).toBe(true));
  await expect(image.clientWidth / image.clientHeight).toBeCloseTo(16 / 10, 1);
};

export const SeveralRoles: Story = {
  args: { id: 'wise', project: featured.wise },
  play: async ({ canvas, args }) => {
    const roles = rolesFor(args.id);
    await expect(canvas.getByRole('heading', { name: args.project.title })).toBeVisible();
    await expect(canvas.getByText(args.project.headline)).toBeVisible();
    const labels = textOf(canvas.getAllByRole('term'));
    await expect(labels).toHaveLength(roles.length);
    labels.forEach((label, index) => expect(label).toContain(roles[index].level));
    await expect(textOf(canvas.getAllByRole('definition'))).toEqual(roles.map(role => role.impact[0]));
    await expect(canvas.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', '/work/wise');
    await expect(canvas.getByText('Sep 2023 – Present', { selector: 'footer span' })).toBeVisible();
    await expectSixteenByTenScreenshot(canvas.getByRole('img'));
  }
};

export const SingleRole: Story = {
  args: { id: 'wise-internship', project: featured['wise-internship'] },
  play: async ({ canvas, args }) => {
    const [role] = rolesFor(args.id);
    await expect(canvas.getByRole('heading', { name: args.project.title })).toBeVisible();
    await expect(textOf(canvas.getAllByRole('term'))).toEqual([`${role.level}Jun 2022 – Sep 2022`]);
    await expect(textOf(canvas.getAllByRole('definition'))).toEqual(role.impact);
    await expect(canvas.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', '/work/wise-internship');
    await expectSixteenByTenScreenshot(canvas.getByRole('img'));
  }
};
