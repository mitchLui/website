import { expect, test } from 'vitest';
import { formatMonth, formatPeriod } from './dates';

test('formats a month as its abbreviated name and year', () => {
  expect(formatMonth('2023-09')).toBe('Sep 2023');
});

test('formats a finished period as start – end', () => {
  expect(formatPeriod('2022-06', '2022-09')).toBe('Jun 2022 – Sep 2022');
});

test('formats an ongoing period as start – Present', () => {
  expect(formatPeriod('2023-09')).toBe('Sep 2023 – Present');
});

test('formats a period within a single month as that month', () => {
  expect(formatPeriod('2021-04', '2021-04')).toBe('Apr 2021');
});
