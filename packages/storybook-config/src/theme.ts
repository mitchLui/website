import { create } from 'storybook/theming';

const brand = {
  brandTitle: '<img src="avatar.png" alt="" style="height:1.75rem;width:1.75rem;border-radius:50%;vertical-align:middle;margin-right:0.5rem"/>mitch<b>Lui</b>',
  brandUrl: 'https://mitchlui.dev',
  brandTarget: '_blank',
  fontBase: 'Helvetica, Arial, sans-serif',
  appBorderRadius: 16,
  inputBorderRadius: 16
};

export const darkTheme = create({
  ...brand,
  base: 'dark',
  colorPrimary: '#FF7A59',
  colorSecondary: '#5BB8E6',
  appBg: '#0B0D10',
  appContentBg: '#0B0D10',
  appPreviewBg: '#0B0D10',
  appBorderColor: '#2A2F36',
  barBg: '#15181D',
  barTextColor: '#A3ABB5',
  barSelectedColor: '#5BB8E6',
  textColor: '#F3F1EC',
  textMutedColor: '#A3ABB5',
  textInverseColor: '#0B0D10',
  inputBg: '#15181D',
  inputBorder: '#2A2F36',
  inputTextColor: '#F3F1EC',
  buttonBg: '#15181D',
  buttonBorder: '#2A2F36'
});

export const lightTheme = create({
  ...brand,
  base: 'light',
  colorPrimary: '#B83A26',
  colorSecondary: '#1C6E99',
  appBg: '#FAF7F2',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FAF7F2',
  appBorderColor: '#E3DED6',
  barBg: '#FFFFFF',
  barTextColor: '#5B6470',
  barSelectedColor: '#1C6E99',
  textColor: '#14161A',
  textMutedColor: '#5B6470',
  textInverseColor: '#FFFFFF',
  inputBg: '#FFFFFF',
  inputBorder: '#E3DED6',
  inputTextColor: '#14161A',
  buttonBg: '#FFFFFF',
  buttonBorder: '#E3DED6'
});
