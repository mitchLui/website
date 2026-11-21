import type { Meta, StoryObj } from '@storybook/react-vite';
import { SitemapPage } from './SitemapPage';

const meta = {
  component: SitemapPage,
  parameters: { layout: 'padded' }
} satisfies Meta<typeof SitemapPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
