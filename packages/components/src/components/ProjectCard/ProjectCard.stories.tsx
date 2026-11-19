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
    await expect(canvas.getByRole('link', { name: 'Read more' })).toHaveAttribute('href', args.href);
    await expect(canvas.queryByRole('link', { name: 'Code' })).not.toBeInTheDocument();
  }
};

export const WithCode: Story = {
  args: { codeUrl: 'https://github.com/example/acme' },
  play: async ({ canvas, args }) => {
    await expect(canvas.queryByRole('list')).not.toBeInTheDocument();
    await expect(canvas.getByRole('link', { name: 'Code' })).toHaveAttribute('href', args.codeUrl);
    await expect(canvas.getByRole('link', { name: 'Code' })).toHaveAttribute('target', '_blank');
    await expect(canvas.getByRole('link', { name: 'Code' })).toHaveAttribute('rel', 'noreferrer');
  }
};

const linkAt = (element: HTMLElement) => {
  const { x, y, width, height } = element.getBoundingClientRect();
  return document.elementFromPoint(x + width / 2, y + height / 2)?.closest('a');
};

export const WholeCardLinks: Story = {
  args: { codeUrl: 'https://github.com/example/acme' },
  play: async ({ canvas, args }) => {
    await expect(linkAt(canvas.getByRole('heading', { name: args.title }))).toBe(canvas.getByRole('link', { name: 'Read more' }));
    await expect(linkAt(canvas.getByText(args.headline))).toBe(canvas.getByRole('link', { name: 'Read more' }));
    await expect(linkAt(canvas.getByRole('link', { name: 'Code' }))).toBe(canvas.getByRole('link', { name: 'Code' }));
  }
};

export const KeyboardFocusRingsTheCard: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('link', { name: 'Read more' })).toHaveFocus();
    await expect(canvasElement.querySelector('article')).toHaveStyle({ outlineStyle: 'solid' });
    await expect(canvas.getByRole('link', { name: 'Read more' })).toHaveStyle({ outlineStyle: 'none' });
  }
};

export const ScreenshotFrame: Story = {
  play: async ({ canvas, args }) => {
    const frame = canvas.getByRole('img', { name: args.image.alt }).parentElement!;
    await expect(frame).toHaveStyle({ borderTopWidth: '0px', borderTopLeftRadius: '16px' });
    await expect(getComputedStyle(frame).boxShadow).not.toBe('none');
  }
};
