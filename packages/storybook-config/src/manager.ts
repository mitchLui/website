import { addons } from 'storybook/manager-api';
import { darkTheme, lightTheme } from './theme';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const applyTheme = () => addons.setConfig({ theme: prefersDark.matches ? darkTheme : lightTheme });

applyTheme();
prefersDark.addEventListener('change', applyTheme);
