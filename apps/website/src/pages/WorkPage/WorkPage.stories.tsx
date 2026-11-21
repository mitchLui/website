import type { Meta, StoryObj } from '@storybook/react-vite';
import { WorkPage } from './WorkPage';

const meta = {
  component: WorkPage,
  parameters: { layout: 'padded' }
} satisfies Meta<typeof WorkPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Phone: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } }
};
