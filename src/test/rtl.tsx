import { render as RTLRender, RenderOptions } from '@testing-library/react';
import * as React from 'react';

export const render = (
  ui: React.ReactElement,
  { ...options }: RenderOptions = {},
) => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  return {
    ...RTLRender(ui, {
      ...options,
      wrapper: ({ children }) =>
        options.wrapper ? (
          <options.wrapper>{children}</options.wrapper>
        ) : (
          children
        ),
    }),
  };
};
