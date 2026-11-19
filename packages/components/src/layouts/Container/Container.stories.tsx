import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Container, ContainerHeader } from './Container';
import { PageTitle, SectionTitle } from '../../components/Heading/Heading';

const meta = {
  component: Container
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <p>Page content</p> },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Page content')).toBeVisible();
  }
};

export const SectionHeader: Story = {
  render: () => <ContainerHeader><SectionTitle>Earlier projects</SectionTitle></ContainerHeader>,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Earlier projects' }).parentElement).toHaveStyle({ marginTop: '64px', marginBottom: '32px' });
  }
};

export const PhoneGutter: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } },
  args: { children: <p>Page content</p> },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Page content').parentElement).toHaveStyle({ paddingLeft: '24px', paddingRight: '24px' });
  }
};

export const PageTitleSpacing: Story = {
  render: () => <ContainerHeader><PageTitle>Work</PageTitle></ContainerHeader>,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Work' }).parentElement).toHaveStyle({ marginTop: '48px' });
  }
};
