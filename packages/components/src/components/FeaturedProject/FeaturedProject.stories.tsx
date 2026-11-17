import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { FeaturedProject } from './FeaturedProject';
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
