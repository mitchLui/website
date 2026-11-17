import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Container, ContainerHeader } from './Container';

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

export const Header: Story = {
  render: () => <ContainerHeader><h1>Sitemap</h1></ContainerHeader>,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Sitemap' })).toHaveStyle({ fontSize: '48px' });
  }
};
