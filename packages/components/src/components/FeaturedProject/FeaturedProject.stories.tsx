import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { FeaturedProject } from './FeaturedProject';
import { Container } from '../../layouts/Container/Container';
import { tallImage, wideImage } from '../../fixtures';

const meta = {
  component: FeaturedProject,
  parameters: { layout: 'padded' },
  args: {
    title: 'Acme – Payments Platform',
    headline: 'Payments, ledgers and reporting for Acme merchants.',
    href: '/work/acme',
    image: wideImage,
    period: 'Jan 2020 – Present',
    highlights: [
      { label: 'Senior', period: 'Jan 2024 – Present', items: ['Led the ledger rewrite.'] },
      { label: 'Graduate', period: 'Jan 2020 – Jan 2024', items: ['Shipped refunds.', 'Built the reporting dashboard.'] }
    ]
  }
} satisfies Meta<typeof FeaturedProject>;

export default meta;
type Story = StoryObj<typeof meta>;

const expectSixteenByTen = async (image: HTMLImageElement) => {
  await waitFor(() => expect(image.complete && image.naturalWidth > 0).toBe(true));
  await expect(image.clientWidth / image.clientHeight).toBeCloseTo(16 / 10, 1);
};

export const Default: Story = {
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole('heading', { name: args.title })).toBeVisible();
    await expect(canvas.getByText(args.headline)).toBeVisible();
    await expect(canvas.getAllByRole('term').map(term => term.textContent)).toEqual([
      'SeniorJan 2024 – Present',
      'GraduateJan 2020 – Jan 2024'
    ]);
    await expect(canvas.getAllByRole('definition').map(item => item.textContent)).toEqual([
      'Led the ledger rewrite.',
      'Shipped refunds.',
      'Built the reporting dashboard.'
    ]);
    await expect(canvas.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', args.href);
    await expect(canvas.getByText(args.period)).toBeVisible();
    await expectSixteenByTen(canvas.getByRole('img'));
  }
};

export const TallImage: Story = {
  args: { image: tallImage },
  play: async ({ canvas }) => {
    await expectSixteenByTen(canvas.getByRole('img'));
  }
};

const lineCount = (element: HTMLElement) => {
  const range = document.createRange();
  range.selectNodeContents(element);
  return new Set([...range.getClientRects()].map(rect => Math.round(rect.top))).size;
};

export const Mobile: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } },
  parameters: { layout: 'fullscreen' },
  decorators: [Story => <Container><Story/></Container>],
  args: { period: 'Jun 2022 – Sep 2022' },
  play: async ({ canvas }) => {
    await expect(lineCount(canvas.getByRole('link', { name: 'Learn more' }))).toBe(1);
    await expect(lineCount(canvas.getByText('Jun 2022 – Sep 2022'))).toBe(1);
  }
};

const linkAt = (element: HTMLElement) => {
  const { x, y, width, height } = element.getBoundingClientRect();
  return document.elementFromPoint(x + width / 2, y + height / 2)?.closest('a');
};

export const WholeCardLinks: Story = {
  play: async ({ canvas, args }) => {
    await expect(linkAt(canvas.getByText(args.headline))).toBe(canvas.getByRole('link', { name: 'Learn more' }));
    await expect(linkAt(canvas.getByRole('img'))).toBe(canvas.getByRole('link', { name: 'Learn more' }));
  }
};
