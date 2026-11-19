import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { PageTitle, SectionTitle } from './Heading';
import { resolved } from '../../testing/resolve';

const meta = {
  component: PageTitle
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: { children: 'Work' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Work' })).toHaveStyle({ fontSize: resolved('fontSize', 'var(--font-size-display)'), marginTop: '0px' });
  }
};

export const Section: Story = {
  render: () => <SectionTitle id="experience">Experience</SectionTitle>,
  play: async ({ canvas }) => {
    const heading = canvas.getByRole('heading', { level: 2, name: 'Experience' });
    await expect(heading).toHaveAttribute('id', 'experience');
    await expect(heading).toHaveStyle({ borderTopWidth: '3px', borderTopStyle: 'solid', borderTopColor: resolved('color', 'var(--color-text)'), fontSize: resolved('fontSize', 'var(--font-size-title-1)') });
  }
};
