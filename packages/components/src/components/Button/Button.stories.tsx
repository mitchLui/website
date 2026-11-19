import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { BackButton, Button } from './Button';
import { resolved } from '../../testing/resolve';

const meta = {
  component: Button,
  parameters: { layout: 'centered' }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsButton: Story = {
  args: { as: 'button', children: 'Submit', onClick: fn() },
  play: async ({ canvas, args, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
};

export const AsLink: Story = {
  args: { as: 'a', to: '/work', children: 'See all work' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'See all work' })).toHaveAttribute('href', '/work');
  }
};

export const Variants: Story = {
  args: { as: 'button', children: 'Primary' },
  render: () =>
    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <Button as="button">Primary</Button>
      <Button as="button" variant="secondary">Secondary</Button>
      <Button as="button" variant="tertiary">Tertiary</Button>
      <Button as="button" variant="outline">Outline</Button>
    </div>,
  play: async ({ canvas }) => {
    const fill = (name: string) => getComputedStyle(canvas.getByRole('button', { name })).backgroundColor;
    await expect(fill('Primary')).toBe(resolved('backgroundColor', 'var(--color-brand)'));
    await expect(fill('Secondary')).toBe(resolved('backgroundColor', 'var(--color-brand-tint)'));
    await expect(fill('Tertiary')).toBe('rgba(0, 0, 0, 0)');
    await expect(fill('Outline')).toBe('rgba(0, 0, 0, 0)');
    await expect(getComputedStyle(canvas.getByRole('button', { name: 'Outline' })).boxShadow).toContain(resolved('color', 'var(--color-text)'));
  }
};

export const Disabled: Story = {
  args: { as: 'button', children: 'Submit', disabled: true, onClick: fn() },
  play: async ({ canvas, args }) => {
    canvas.getByRole('button', { name: 'Submit' }).click();
    await expect(args.onClick).not.toHaveBeenCalled();
  }
};

export const Back: Story = {
  args: { as: 'a', to: '/work', children: 'All work' },
  render: () => <BackButton to="/work" text="All work"/>,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'All work' })).toHaveAttribute('href', '/work');
  }
};

const xHeightCentre = (element: HTMLElement) => {
  const style = getComputedStyle(element);
  const context = document.createElement('canvas').getContext('2d')!;
  context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  const metrics = context.measureText('x');
  const range = document.createRange();
  range.selectNodeContents([...element.childNodes].find(node => node.nodeType === Node.TEXT_NODE)!);
  const line = range.getBoundingClientRect();
  const baseline = line.top + (line.height - metrics.fontBoundingBoxAscent - metrics.fontBoundingBoxDescent) / 2 + metrics.fontBoundingBoxAscent;
  return baseline - metrics.actualBoundingBoxAscent / 2;
};

export const WithIcon: Story = {
  args: { as: 'a', to: '/work', variant: 'outline', arrow: true, children: 'Read more' },
  play: async ({ canvas }) => {
    await document.fonts.ready;
    const link = canvas.getByRole('link', { name: 'Read more' });
    await expect(link.lastElementChild).toHaveAttribute('aria-hidden', 'true');
    const icon = link.querySelector('svg')!.getBoundingClientRect();
    await expect(Math.abs(icon.top + icon.height / 2 - xHeightCentre(link))).toBeLessThan(0.5);
  }
};
