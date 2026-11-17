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

export const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      options: {
        site: { name: 'Site', value: '#000000' }
      }
    },
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
    backgrounds: { value: 'site' },
    viewport: { value: 'desktop', isRotated: false }
  }
};
