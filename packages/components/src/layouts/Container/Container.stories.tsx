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

const resolved = (property: 'color' | 'fontSize', value: string) => {
  const probe = document.createElement('span');
  probe.style[property] = value;
  document.body.append(probe);
  const result = getComputedStyle(probe)[property];
  probe.remove();
  return result;
};

export const Header: Story = {
  render: () => <ContainerHeader><h1>Sitemap</h1></ContainerHeader>,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Sitemap' })).toHaveStyle({ fontSize: resolved('fontSize', 'var(--font-size-display)') });
  }
};

export const SectionHeader: Story = {
  render: () => <ContainerHeader><h2>Recent work</h2></ContainerHeader>,
  play: async ({ canvas }) => {
    const heading = canvas.getByRole('heading', { name: 'Recent work' });
    await expect(getComputedStyle(heading, '::after').backgroundColor).toBe(resolved('color', 'var(--color-brand)'));
  }
};
