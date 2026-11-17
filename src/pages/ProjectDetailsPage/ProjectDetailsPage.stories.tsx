import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProjectDetailsPage } from './ProjectDetailsPage';
import { rolesFor } from '../../data/roles';

const meta = {
  component: ProjectDetailsPage
} satisfies Meta<typeof ProjectDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const byTextContent = (text: string) => (_: string, element: Element | null) => element?.textContent === text;

const atProject = (id: string) => ({ route: { path: '/work/:projectId', url: `/work/${id}` } });

const impactHeadings = (canvas: Parameters<NonNullable<Story['play']>>[0]['canvas']) =>
  canvas.getAllByRole('heading', { level: 4 }).map(heading => heading.textContent);

export const SeveralRoles: Story = {
  parameters: atProject('wise'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Wise – Business Account Management' })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: 'Permissions, money movement and cards for Wise Business customers.' })).toBeVisible();
    await expect(canvas.getByText('Sep 2023 – Present · Next.js, Java Spring, Kafka')).toBeVisible();
    await expect(canvas.getByRole('link', { name: 'All work' })).toHaveAttribute('href', '/work');
    await expect(canvas.getByRole('heading', { name: 'Impact' })).toBeVisible();
    await expect(impactHeadings(canvas)).toEqual([
      'Senior Software Engineer · Jun 2026 – Present',
      'Software Engineer · Jun 2025 – Jun 2026',
      'Graduate Software Engineer · Sep 2023 – Jun 2025'
    ]);
    rolesFor('wise').flatMap(role => role.impact).forEach(item => expect(canvas.getByText(item)).toBeVisible());
  }
};

export const SingleRole: Story = {
  parameters: atProject('wise-internship'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Wise – Spend Business Experience' })).toBeVisible();
    await expect(impactHeadings(canvas)).toEqual(['Software Engineer Intern · Jun 2022 – Sep 2022']);
    await expect(canvas.getByRole('link', { name: 'Website' })).toHaveAttribute('href', 'https://wise.com');
  }
};

export const Hackathon: Story = {
  parameters: atProject('mask-detector'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Mask Detector' })).toBeVisible();
    await expect(canvas.getByText(byTextContent('Event: BEEES Make-a-thon 2021'))).toBeVisible();
    await expect(canvas.getByText(byTextContent('Awards: Overall best prize · Most verified · Most gamified'))).toBeVisible();
    await expect(canvas.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/mitchLui/mask-detector');
    await expect(canvas.queryByRole('heading', { name: 'Impact' })).not.toBeInTheDocument();
  }
};

export const Academic: Story = {
  parameters: atProject('ai-workflow'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'IBM AI Workflow' })).toBeVisible();
    await expect(canvas.getByText(byTextContent('Grade: 75% (First class)'))).toBeVisible();
    await expect(canvas.getByText(/^Feedback by lecturers:/)).toBeVisible();
    await expect(canvas.queryByRole('heading', { name: 'Impact' })).not.toBeInTheDocument();
  }
};

export const UnknownProject: Story = {
  parameters: atProject('does-not-exist'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  }
};
