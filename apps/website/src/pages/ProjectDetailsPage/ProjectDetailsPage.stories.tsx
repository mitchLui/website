import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectDetailsPage } from './ProjectDetailsPage';

const meta = {
  component: ProjectDetailsPage
} satisfies Meta<typeof ProjectDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const atProject = (id: string) => ({ route: { path: '/work/:projectId', url: `/work/${id}/` } });

export const SeveralRoles: Story = {
  parameters: atProject('wise')
};

export const SingleRole: Story = {
  parameters: atProject('wise-internship')
};

export const EarliestProject: Story = {
  parameters: atProject('asiabots')
};

export const Hackathon: Story = {
  parameters: atProject('mask-detector')
};

export const Academic: Story = {
  parameters: atProject('ai-workflow')
};

export const UnknownProject: Story = {
  parameters: atProject('does-not-exist')
};

export const Phone: Story = {
  parameters: atProject('wise'),
  globals: { viewport: { value: 'mobile', isRotated: false } }
};
