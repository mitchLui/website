import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Stop } from './Stop';
import { Button } from '../Button/Button';

const meta = {
  component: Stop,
  args: { period: 'Sep 2023 – Jun 2025', title: 'Graduate Software Engineer', children: <p>Moved Wise Business users from role-based access control to a permissions-based model.</p> }
} satisfies Meta<typeof Stop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Current: Story = {
  args: {
    current: true,
    period: 'Jun 2026 – Present',
    title: 'Senior Software Engineer',
    children: <><p>Led the redesign of the business account permission model.</p><Button as="a" variant="outline" arrow to="/work/wise/">Read more</Button></>
  },
  play: async ({ canvas }) => {
    const title = canvas.getByRole('heading', { level: 3 });
    const link = canvas.getByRole('link', { name: 'Read more' });
    await expect(parseFloat(getComputedStyle(title).fontSize)).toBeGreaterThan(parseFloat(getComputedStyle(canvas.getByText(/Led the redesign/)).fontSize));
    await expect(link.getBoundingClientRect().width).toBeLessThan(link.parentElement!.getBoundingClientRect().width);
  }
};
