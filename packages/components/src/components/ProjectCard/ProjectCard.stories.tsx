import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProjectCard } from './ProjectCard';
import { wideImage } from '../../fixtures';

const meta = {
  component: ProjectCard,
  parameters: { layout: 'centered' },
  decorators: [Story => <div style={{ width: '360px' }}><Story/></div>],
  args: {
    title: 'Acme – Checkout',
    headline: 'A faster checkout for Acme merchants.',
    href: '/work/acme-checkout',
    image: wideImage
  }
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHighlights: Story = {
  args: { highlights: ['Cut checkout time in half.', 'Added saved cards.'] },
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole('heading', { name: args.title })).toBeVisible();
    await expect(canvas.getByText(args.headline)).toBeVisible();
    await expect(canvas.getAllByRole('listitem').map(item => item.textContent)).toEqual(args.highlights);
    await expect(canvas.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', args.href);
    await expect(canvas.queryByRole('link', { name: 'Code' })).not.toBeInTheDocument();
  }
};

export const WithCode: Story = {
  args: { codeUrl: 'https://github.com/example/acme' },
  play: async ({ canvas, args }) => {
    await expect(canvas.queryByRole('list')).not.toBeInTheDocument();
    await expect(canvas.getByRole('link', { name: 'Code' })).toHaveAttribute('href', args.codeUrl);
  }
};
