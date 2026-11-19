import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProjectDetailsPage } from './ProjectDetailsPage';
import { rolesFor } from '../../data/roles';

const meta = {
  component: ProjectDetailsPage
} satisfies Meta<typeof ProjectDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const atProject = (id: string) => ({ route: { path: '/work/:projectId', url: `/work/${id}` } });

type Canvas = Parameters<NonNullable<Story['play']>>[0]['canvas'];

const roleHeadings = (canvas: Canvas) =>
  canvas.getAllByRole('heading', { level: 3 }).map(heading => heading.textContent);

const fact = (canvas: Canvas, term: string) =>
  canvas.getAllByRole('term').find(element => element.textContent === term)?.nextElementSibling?.textContent;

export const SeveralRoles: Story = {
  parameters: atProject('wise'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Wise – Business Account Management' })).toBeVisible();
    await expect(canvas.getByText('Permissions, money movement and cards for Wise Business customers.')).toBeVisible();
    await expect(canvas.getAllByRole('heading').map(heading => heading.textContent).slice(0, 2)).toEqual(['Wise – Business Account Management', 'Impact']);
    await expect(canvas.getByRole('img')).toBeVisible();
    await expect(canvas.getByText('Sep 2023 – Present')).toBeVisible();
    await expect(fact(canvas, 'Team')).toBe('Business Account Management');
    await expect(fact(canvas, 'Built with')).toBe('Next.js, Java Spring, Kafka');
    await expect(fact(canvas, 'Roles')).toBe('Graduate Software Engineer, Software Engineer, Senior Software Engineer');
    await expect(canvas.getByRole('link', { name: 'All work' })).toHaveAttribute('href', '/work');
    await expect(canvas.getByRole('heading', { level: 2, name: 'Impact' })).toBeVisible();
    await expect(roleHeadings(canvas)).toEqual(['Senior Software Engineer', 'Software Engineer', 'Graduate Software Engineer']);
    await expect(canvas.getByText('Jun 2025 – Jun 2026')).toBeVisible();
    rolesFor('wise').flatMap(role => role.impact).forEach(item => expect(canvas.getByText(item)).toBeVisible());
    const stations = canvas.getByRole('heading', { level: 2, name: 'Impact' }).parentElement!.querySelectorAll('ol > li');
    await expect([...stations].map(station => station.getAttribute('aria-current'))).toEqual(['step', null, null]);
    await expect(canvas.getByRole('navigation', { name: 'Previous project' })).toHaveTextContent('Previously · Feb 2023 – May 2023LBM Optimisation');
    await expect(canvas.getByRole('link', { name: /LBM Optimisation/ })).toHaveAttribute('href', '/work/hpc');
  }
};

export const EarliestProject: Story = {
  parameters: atProject('asiabots'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Asiabots – Conversational AI' })).toBeVisible();
    await expect(canvas.queryByRole('navigation', { name: 'Previous project' })).not.toBeInTheDocument();
  }
};

export const SingleRole: Story = {
  parameters: atProject('wise-internship'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Wise – Spend Business Experience' })).toBeVisible();
    await expect(roleHeadings(canvas)).toEqual(['Software Engineer Intern']);
    await expect(canvas.getByRole('link', { name: 'Website' })).toHaveAttribute('href', 'https://wise.com');
  }
};

export const Hackathon: Story = {
  parameters: atProject('mask-detector'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Mask Detector' })).toBeVisible();
    await expect(canvas.getByText('Hackathon · Apr 2021')).toBeVisible();
    await expect(fact(canvas, 'Event')).toBe('BEEES Make-a-thon 2021');
    await expect(fact(canvas, 'Awards')).toBe('Overall best prize · Most verified · Most gamified');
    await expect(canvas.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/mitchLui/mask-detector');
    await expect(canvas.getByRole('link', { name: 'GitHub' })).toHaveAttribute('rel', 'noreferrer');
    await expect(canvas.queryByRole('heading', { name: 'Impact' })).not.toBeInTheDocument();
  }
};

export const Academic: Story = {
  parameters: atProject('ai-workflow'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'IBM AI Workflow' })).toBeVisible();
    await expect(fact(canvas, 'Grade')).toBe('75% (First class)');
    await expect(canvas.getByRole('heading', { level: 2, name: 'About' })).toBeVisible();
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

export const PageSpacing: Story = {
  parameters: atProject('wise'),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('article')).toHaveStyle({ paddingTop: '48px' });
  }
};

export const PhoneSpacing: Story = {
  parameters: atProject('wise'),
  globals: { viewport: { value: 'mobile', isRotated: false } },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('article')).toHaveStyle({ paddingTop: '32px' });
  }
};
