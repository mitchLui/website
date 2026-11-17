import type { Decorator, Preview } from '@storybook/react-vite';
import { createRoutesStub, useLocation } from 'react-router';

const NavigatedTo = () => <p data-testid="navigated-to">{useLocation().pathname}</p>;

const withRouter: Decorator = (Story, { parameters }) => {
  const { path = '/', url = path } = parameters.route ?? {};
  const Stub = createRoutesStub([
    { path, Component: Story },
    { path: '*', Component: NavigatedTo }
  ]);
  return <Stub initialEntries={[url]}/>;
};

const applyTheme = (theme: string) => {
  if (theme === 'system') {
    delete document.documentElement.dataset.theme;
  } else {
    document.documentElement.dataset.theme = theme;
  }
};

const withTheme: Decorator = (Story, { globals }) => {
  applyTheme(globals.theme ?? 'system');
  return <Story/>;
};

export const preview: Preview = {
  decorators: [withRouter, withTheme],
  globalTypes: {
    theme: {
      description: 'Colour theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'system', title: 'System' },
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' }
        ],
        dynamicTitle: true
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disabled: true },
    viewport: {
      options: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '800px' } },
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '800px' } }
      }
    },
    a11y: {
      test: 'error'
    }
  },
  initialGlobals: {
    theme: 'system',
    viewport: { value: 'desktop', isRotated: false }
  }
};
