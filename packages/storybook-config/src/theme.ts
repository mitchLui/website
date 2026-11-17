import { create } from 'storybook/theming';

export const theme = create({
  base: 'dark',
  brandTitle: '<img src="logo.svg" alt="" style="height:1.5rem;vertical-align:middle;margin-right:0.4rem"/>mitch<b>Lui</b>',
  brandUrl: 'https://mitchlui.dev',
  brandTarget: '_blank',
  fontBase: 'Helvetica, Arial, sans-serif',
  colorPrimary: '#9FE870',
  colorSecondary: '#2E5A1C',
  appBg: '#000000',
  appContentBg: '#000000',
  appPreviewBg: '#000000',
  appBorderColor: '#333333',
  appBorderRadius: 16,
  barBg: '#111111',
  barTextColor: '#AAAAAA',
  barSelectedColor: '#9FE870',
  textColor: '#FFFFFF',
  textMutedColor: '#AAAAAA',
  inputBg: '#111111',
  inputBorder: '#333333',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 16,
  buttonBg: '#111111',
  buttonBorder: '#FFFFFF'
});
