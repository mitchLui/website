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
  render: () => <ContainerHeader eyebrow="At Wise"><h2>Recent work</h2></ContainerHeader>,
  play: async ({ canvas }) => {
    const eyebrow = canvas.getByText('At Wise');
    const heading = canvas.getByRole('heading', { name: 'Recent work' });
    await expect(eyebrow.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    await expect(eyebrow).toHaveStyle({ color: resolved('color', 'var(--color-brand-text)') });
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
