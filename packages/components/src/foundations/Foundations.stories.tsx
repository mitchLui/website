import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import styles from './Foundations.module.css';
import { ungatedHoverSelectors } from '../testing/hover';
import '../index';

const meta = {
  title: 'Foundations',
  parameters: { layout: 'fullscreen' }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const colours = [
  'bg', 'surface', 'surface-hover', 'surface-sunken', 'text', 'text-secondary', 'border', 'border-strong',
  'brand', 'brand-hover', 'brand-pressed', 'on-brand', 'brand-text', 'brand-tint', 'brand-tint-hover', 'on-brand-tint',
  'tag-green', 'tag-olive', 'tag-blue', 'tag-orange'
];

type Pair = { text: string; on: string; tint?: boolean; min: number };

const pairs: Pair[] = [
  ...['bg', 'surface', 'surface-hover', 'surface-sunken'].flatMap(on => [
    { text: 'text', on, min: 4.5 },
    { text: 'text-secondary', on, min: 4.5 },
    { text: 'brand-text', on, min: 4.5 }
  ]),
  ...['brand', 'brand-hover', 'brand-pressed'].map(on => ({ text: 'on-brand', on, min: 4.5 })),
  { text: 'on-brand-tint', on: 'brand-tint', min: 4.5 },
  { text: 'on-brand-tint', on: 'brand-tint-hover', min: 4.5 },
  { text: 'brand-text', on: 'brand-tint', min: 4.5 },
  { text: 'brand', on: 'bg', min: 3 },
  ...['tag-green', 'tag-olive', 'tag-blue', 'tag-orange'].flatMap(text => ['bg', 'surface'].map(on => ({ text, on, tint: true, min: 4.5 })))
];

type Rgb = [number, number, number];

const resolve = (token: string): Rgb => {
  const probe = document.createElement('span');
  probe.style.color = `var(--color-${token})`;
  document.body.append(probe);
  const [r, g, b] = getComputedStyle(probe).color.match(/[\d.]+/g)!.map(Number);
  probe.remove();
  return [r, g, b];
};

const blend = (top: Rgb, bottom: Rgb, alpha: number): Rgb =>
  top.map((channel, i) => channel * alpha + bottom[i] * (1 - alpha)) as Rgb;

const luminance = (rgb: Rgb) => {
  const [r, g, b] = rgb.map(channel => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a: Rgb, b: Rgb) => {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
};

const pairContrast = ({ text, on, tint }: Pair) => {
  const foreground = resolve(text);
  const ground = tint ? blend(foreground, resolve(on), 0.12) : resolve(on);
  return contrast(foreground, ground);
};

const label = ({ text, on, tint }: Pair) => `${text} on ${tint ? `${text} tint over ` : ''}${on}`;

export const Colour: Story = {
  render: () =>
    <div className={styles.page}>
      <section className={styles.section}>
        <h2>Colour</h2>
        <div className={styles.swatches}>
          {colours.map(token =>
            <div key={token} className={styles.swatch}>
              <div className={styles.chip} style={{ backgroundColor: `var(--color-${token})` }}/>
              <code>{token}</code>
            </div>
          )}
        </div>
      </section>
      <section className={styles.section}>
        <h2>Pairs</h2>
        <div className={styles.swatches}>
          {pairs.map(pair =>
            <div
              key={label(pair)}
              className={styles.pair}
              style={{
                color: `var(--color-${pair.text})`,
                backgroundColor: pair.tint
                  ? `color-mix(in srgb, var(--color-${pair.text}) 12%, var(--color-${pair.on}))`
                  : `var(--color-${pair.on})`
              }}
            >
              {label(pair)}
            </div>
          )}
        </div>
      </section>
    </div>,
  play: async () => {
    for (const pair of pairs) {
      await expect({ pair: label(pair), passes: pairContrast(pair) >= pair.min }).toEqual({ pair: label(pair), passes: true });
    }
  }
};

const typeScale = [
  ['display', 'heavy', 'display', 'tight'],
  ['title-1', 'bold', 'title', 'tight'],
  ['title-2', 'bold', 'title', 'snug'],
  ['lead', 'regular', 'body', 'body'],
  ['body', 'regular', 'body', 'body'],
  ['small', 'regular', 'body', 'body'],
  ['label', 'semibold', 'label', 'snug'],
  ['caption', 'regular', 'body', 'body']
];

export const Type: Story = {
  render: () =>
    <div className={styles.page}>
      <section className={styles.section}>
        <h2>Type</h2>
        <div className={styles.scale}>
          {typeScale.map(([size, weight, tracking, lineHeight]) =>
            <p
              key={size}
              className={styles.sample}
              style={{
                fontSize: `var(--font-size-${size})`,
                fontWeight: `var(--font-weight-${weight})`,
                letterSpacing: `var(--tracking-${tracking})`,
                lineHeight: `var(--line-height-${lineHeight})`
              }}
            >
              {size} · Building the one account for businesses
            </p>
          )}
        </div>
      </section>
    </div>,
  play: async ({ canvas }) => {
    await document.fonts.ready;
    await expect(getComputedStyle(canvas.getByText(/^body ·/)).fontFamily).toMatch(/^"Inter Variable"/);
    await expect(document.fonts.check('16px "Inter Variable"')).toBe(true);
    const sizes = typeScale.map(([size]) => parseFloat(getComputedStyle(canvas.getByText(new RegExp(`^${size} ·`))).fontSize));
    await expect(sizes).toEqual([...sizes].sort((a, b) => b - a));
  }
};

const radii = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];
const spaces = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];

export const ShapeAndSpace: Story = {
  name: 'Shape and space',
  render: () =>
    <div className={styles.page}>
      <section className={styles.section}>
        <h2>Radius</h2>
        <div className={styles.row}>
          {radii.map(radius =>
            <div key={radius} className={styles.swatch}>
              <div className={styles.box} style={{ borderRadius: `var(--radius-${radius})` }}/>
              <code>{radius}</code>
            </div>
          )}
        </div>
      </section>
      <section className={styles.section}>
        <h2>Space</h2>
        <div className={styles.scale}>
          {spaces.map(space =>
            <div key={space} className={styles.swatch}>
              <div className={styles.bar} style={{ width: `var(--space-${space})` }} data-testid={`space-${space}`}/>
              <code>space-{space}</code>
            </div>
          )}
        </div>
      </section>
    </div>,
  play: async ({ canvas }) => {
    const widths = spaces.map(space => canvas.getByTestId(`space-${space}`).getBoundingClientRect().width);
    await expect(widths).toEqual(spaces.map(space => space * 4));
  }
};

export const HoverOnlyOnPointers: Story = {
  name: 'Hover only on pointers',
  render: () => <p>Every hover style sits inside <code>@media (hover: hover)</code>, so a tap never leaves one stuck.</p>,
  play: async () => {
    await expect(ungatedHoverSelectors()).toEqual([]);
  }
};
