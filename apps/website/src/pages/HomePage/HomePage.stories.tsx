import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { HomePage } from './HomePage';
import { archivedProjects } from '../../data/projects';

const meta = {
  component: HomePage
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const lineColour = (token: string) => {
  const probe = document.createElement('span');
  probe.style.backgroundColor = `var(--color-line-${token})`;
  document.body.append(probe);
  const colour = getComputedStyle(probe).backgroundColor;
  probe.remove();
  return colour;
};

const waitForFadeIn = (canvasElement: HTMLElement) =>
  Promise.all(canvasElement.ownerDocument.getAnimations()
    .filter(animation => animation instanceof CSSAnimation && animation.animationName.includes('page-in'))
    .map(animation => animation.finished));

export const Default: Story = {
  play: async ({ canvas, canvasElement, step }) => {
    await waitForFadeIn(canvasElement);
    await step('opens with the headline and who I am', async () => {
      await expect(canvas.getByRole('heading', { level: 1, name: 'Building the one account for businesses to thrive everywhere.' })).toBeVisible();
      await expect(canvas.getByText(/^Born and raised in Hong Kong, now based in London\. I'm a Senior Software Engineer on/)).toBeVisible();
      await expect(canvas.getByRole('link', { name: 'Wise\'s (opens in a new tab)' })).toHaveAttribute('href', 'https://www.wise.com');
    });
    await step('walks the experience line from now back to Hong Kong', async () => {
      await expect(canvas.getByRole('heading', { level: 2, name: 'Experience' })).toBeVisible();
      await expect(canvas.getAllByRole('heading', { level: 3 }).map(heading => heading.textContent)).toEqual([
        'Senior Software Engineer', 'Software Engineer', 'Graduate Software Engineer', 'University of Bristol', 'Intern · Wise', 'Intern · Asiabots', 'Hong Kong'
      ]);
      await expect(canvas.getAllByRole('listitem')[0]).toHaveAttribute('aria-current', 'step');
    });
    await step('changes line colour at stations, not between them', async () => {
      const internship = canvas.getByRole('link', { name: 'Intern · Wise' }).closest('li')!.querySelectorAll<HTMLElement>('[aria-hidden] > span');
      await expect(internship[0]).toHaveStyle({ backgroundColor: lineColour('education') });
      await expect(internship[1]).toHaveStyle({ backgroundColor: lineColour('early') });
    });
    await step('links to the Wise story, the highlighted projects, all projects and each internship', async () => {
      await expect(canvas.getByRole('link', { name: 'Read more' })).toHaveAttribute('href', '/work/wise/');
      await expect(canvas.getByRole('link', { name: /Mask Detector/ })).toHaveAttribute('href', '/work/mask-detector/');
      await expect(canvas.getByRole('link', { name: /All projects/ })).toHaveTextContent(`And ${archivedProjects.length - 3} more`);
      await expect(canvas.getByRole('link', { name: 'Intern · Asiabots' })).toHaveAttribute('href', '/work/asiabots/');
    });
  }
};

export const PhoneSpacing: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } },
  play: async ({ canvas, canvasElement }) => {
    await waitForFadeIn(canvasElement);
    await expect(canvas.getByRole('heading', { level: 1 }).parentElement).toHaveStyle({ paddingTop: '32px' });
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveStyle({ fontSize: '46px' });
  }
};
