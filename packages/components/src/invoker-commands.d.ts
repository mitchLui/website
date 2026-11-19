import 'react';

// React's types don't include the HTML invoker command attributes yet.
declare module 'react' {
  // The type parameter has to match React's declaration for the interfaces to merge.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ButtonHTMLAttributes<T> {
    command?: 'show-modal' | 'close' | 'request-close' | 'show-popover' | 'hide-popover' | 'toggle-popover';
    commandfor?: string;
  }
}
