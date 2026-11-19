import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Container, ContainerHeader } from './Container';
import { resolved } from '../../testing/resolve';

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
    await expect(canvas.getByRole('heading', { name: 'Sitemap' })).toHaveStyle({ fontSize: resolved('fontSize', 'var(--font-size-display)') });
  }
};

export const SectionHeader: Story = {
  render: () => <ContainerHeader><h2>Earlier projects</h2></ContainerHeader>,
  play: async ({ canvas }) => {
    const header = canvas.getByRole('heading', { name: 'Earlier projects' }).parentElement!;
    await expect(header).toHaveStyle({ borderTopWidth: '3px', borderTopStyle: 'solid', borderTopColor: resolved('color', 'var(--color-text)') });
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
  render: () => <ContainerHeader><h1>Work</h1></ContainerHeader>,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Work' }).parentElement).toHaveStyle({ marginTop: '48px' });
  }
};
