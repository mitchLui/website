import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { HamburgerMenu } from './Hamburger';

const meta = {
  component: HamburgerMenu,
  parameters: { layout: 'centered' },
  args: { menu: 'menu' },
  decorators: [Story => <><Story/><dialog id="menu" aria-label="Menu">Menu</dialog></>]
} satisfies Meta<typeof HamburgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const lineAngles = (button: HTMLElement) =>
  [...button.children].map(line => getComputedStyle(line).transform);

export const Closed: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Open menu' });
    await expect(button).toHaveAttribute('commandfor', 'menu');
    await expect(button).toHaveAttribute('command', 'show-modal');
    await expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    await expect(lineAngles(button)).toEqual(['none', 'none']);
    await expect(button.getBoundingClientRect()).toMatchObject({ width: 40, height: 40 });
    const dialog = canvasElement.querySelector('dialog')!;
    await userEvent.click(button);
    await expect(dialog.open).toBe(true);
    dialog.close();
  }
};

export const Open: Story = {
  args: { isOpen: true },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Close menu' });
    await expect(button).toHaveAttribute('command', 'close');
    await expect(button).not.toHaveAttribute('aria-haspopup');
    await expect(lineAngles(button).every(angle => angle !== 'none')).toBe(true);
  }
};
