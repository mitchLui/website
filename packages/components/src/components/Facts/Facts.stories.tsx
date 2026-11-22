import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Fact, Facts } from './Facts';

const meta = {
  component: Facts,
  render: () =>
    <Facts>
      <Fact term="Team">Business Account Management</Fact>
      <Fact term="Built with">Next.js, Java Spring, Kafka</Fact>
    </Facts>
} satisfies Meta<typeof Facts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('term').map(term => term.textContent)).toEqual(['Team', 'Built with']);
    await expect(canvas.getAllByRole('definition')[0]).toHaveTextContent('Business Account Management');
  }
};
