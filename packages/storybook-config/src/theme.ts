import { create } from 'storybook/theming';

const brand = {
  brandTitle: '<img src="avatar.png" alt="" style="height:1.75rem;width:1.75rem;border-radius:50%;vertical-align:middle;margin-right:0.5rem"/>mitch<b>Lui</b>',
  brandUrl: 'https://mitchlui.dev',
  brandTarget: '_blank',
  fontBase: '\'Inter Variable\', Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  appBorderRadius: 16,
  inputBorderRadius: 16
};

export const darkTheme = create({
  ...brand,
  base: 'dark',
  colorPrimary: '#3DBA85',
  colorSecondary: '#6CCFA3',
  appBg: '#0C1210',
  appContentBg: '#0C1210',
  appPreviewBg: '#0C1210',
  appBorderColor: '#24302B',
  barBg: '#151D1A',
  barTextColor: '#9AA8A1',
  barSelectedColor: '#6CCFA3',
  textColor: '#EEF2EF',
  textMutedColor: '#9AA8A1',
  textInverseColor: '#04140D',
  inputBg: '#151D1A',
  inputBorder: '#24302B',
  inputTextColor: '#EEF2EF',
  buttonBg: '#151D1A',
  buttonBorder: '#24302B'
});

export const lightTheme = create({
  ...brand,
  base: 'light',
  colorPrimary: '#00774B',
  colorSecondary: '#00774B',
  appBg: '#F7F5EF',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#F7F5EF',
  appBorderColor: '#E3E0D6',
  barBg: '#FFFFFF',
  barTextColor: '#56625C',
  barSelectedColor: '#00774B',
  textColor: '#14201B',
  textMutedColor: '#56625C',
  textInverseColor: '#FFFFFF',
  inputBg: '#FFFFFF',
  inputBorder: '#E3E0D6',
  inputTextColor: '#14201B',
  buttonBg: '#FFFFFF',
  buttonBorder: '#E3E0D6'
});
