import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect } from 'storybook/test';
import { HamburgerMenu } from './Hamburger';

const meta = {
  component: HamburgerMenu,
  parameters: { layout: 'centered' },
  args: { isOpen: false, onClick: () => {} },
  render: function Toggle() {
    const [isOpen, setIsOpen] = useState(false);
    return <HamburgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>;
  }
} satisfies Meta<typeof HamburgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const lineAngles = (button: HTMLElement) =>
  [...button.children].map(line => getComputedStyle(line).transform);

export const Toggles: Story = {
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Open menu' });
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(lineAngles(button)).toEqual(['none', 'none']);
    await userEvent.click(button);
    await expect(canvas.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
    await expect(button.getBoundingClientRect()).toMatchObject({ width: 40, height: 40 });
  }
};
