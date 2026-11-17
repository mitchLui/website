import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { RouteLine, Station, Terminus } from './RouteLine';
import { resolved } from '../../testing/resolve';

const meta = {
  component: RouteLine,
  parameters: { layout: 'padded' }
} satisfies Meta<typeof RouteLine>;

export default meta;
type Story = StoryObj<typeof meta>;

const Career = () =>
  <RouteLine>
    <Station line="wise" kind="current"><h3>Senior Software Engineer</h3><p>Jun 2026 – now</p></Station>
    <Station line="wise"><h3>Software Engineer</h3><p>Jun 2025 – Jun 2026</p></Station>
    <Station line="wise" continuesAs="education"><h3>Graduate Software Engineer</h3><p>Sep 2023 – Jun 2025</p></Station>
    <Station line="education" continuesAs="early" kind="interchange"><h3>University of Bristol</h3><p>Graduated 2023</p></Station>
    <Station line="early"><h3>Intern · Asiabots</h3><p>Jun – Sep 2020</p></Station>
    <Terminus><h3>Hong Kong</h3></Terminus>
  </RouteLine>;

const rails = (canvasElement: HTMLElement) =>
  [...canvasElement.querySelectorAll<HTMLElement>('li > [aria-hidden="true"]')];

export const Default: Story = {
  render: () => <Career/>,
  play: async ({ canvas, canvasElement, step }) => {
    await step('lists every stop in order with the current one marked', async () => {
      const stops = canvas.getAllByRole('listitem');
      await expect(stops.map(stop => stop.querySelector('h3')?.textContent)).toEqual([
        'Senior Software Engineer', 'Software Engineer', 'Graduate Software Engineer', 'University of Bristol', 'Intern · Asiabots', 'Hong Kong'
      ]);
      await expect(stops[0]).toHaveAttribute('aria-current', 'step');
      await expect(stops.slice(1).filter(stop => stop.hasAttribute('aria-current'))).toEqual([]);
    });
    await step('hides the drawn line from assistive technology', async () => {
      await expect(rails(canvasElement)).toHaveLength(6);
    });
    await step('draws one unbroken line from the first stop to the terminus', async () => {
      const stops = canvas.getAllByRole('listitem');
      const lineStart = (stop: HTMLElement) => stop.querySelector<HTMLElement>('[aria-hidden] > span')!;
      for (let index = 0; index < stops.length - 1; index++) {
        const below = stops[index].querySelectorAll<HTMLElement>('[aria-hidden] > span')[1].getBoundingClientRect();
        const next = lineStart(stops[index + 1]).getBoundingClientRect();
        await expect(Math.round(below.bottom)).toBe(Math.round(next.top));
      }
    });
    await step('starts the line at the first station, not above it', async () => {
      const above = canvas.getAllByRole('listitem')[0].querySelector<HTMLElement>('[aria-hidden] > span')!;
      await expect(above).not.toBeVisible();
    });
  }
};

export const LineColours: Story = {
  render: () => <Career/>,
  play: async ({ canvas }) => {
    const graduate = canvas.getAllByRole('listitem')[2].querySelectorAll<HTMLElement>('[aria-hidden] > span');
    await expect(graduate[0]).toHaveStyle({ backgroundColor: resolved('backgroundColor', 'var(--color-line-wise)') });
    await expect(graduate[1]).toHaveStyle({ backgroundColor: resolved('backgroundColor', 'var(--color-line-education)') });
  }
};

export const StationRings: Story = {
  render: () => <Career/>,
  play: async ({ canvas }) => {
    const dark = matchMedia('(prefers-color-scheme: dark)').matches;
    const [current, regular] = canvas.getAllByRole('listitem').map(stop => stop.querySelector<HTMLElement>('[aria-hidden] > span:nth-child(3)'));
    await expect(current).toHaveStyle({ borderTopWidth: dark ? '6px' : '8px' });
    await expect(regular).toHaveStyle({ borderTopWidth: dark ? '4px' : '6px' });
    await expect(current).toHaveStyle({ backgroundColor: resolved('backgroundColor', 'var(--color-station-fill)') });
  }
};

export const EndsAtLastStation: Story = {
  render: () =>
    <RouteLine>
      <Station line="wise" kind="current"><h3>Senior Software Engineer</h3></Station>
      <Station line="wise"><h3>Graduate Software Engineer</h3></Station>
    </RouteLine>,
  play: async ({ canvas }) => {
    const last = canvas.getAllByRole('listitem').at(-1)!.querySelectorAll<HTMLElement>('[aria-hidden] > span');
    await expect(last[0]).toBeVisible();
    await expect(last[1]).not.toBeVisible();
  }
};
