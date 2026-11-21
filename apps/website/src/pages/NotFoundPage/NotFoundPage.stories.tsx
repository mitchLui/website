import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotFoundPage } from './NotFoundPage';

const meta = {
  component: NotFoundPage
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
