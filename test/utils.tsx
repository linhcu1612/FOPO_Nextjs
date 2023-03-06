import theme from '@Definitions/Theme';
import {ThemeProvider} from '@mui/material/styles';
import type {RenderOptions} from '@testing-library/react';
import {render} from '@testing-library/react';
import * as React from 'react';

const Providers = ({children}: {children: React.ReactElement}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, {wrapper: Providers as React.ComponentType, ...options});

export * from '@testing-library/react';
export {customRender as render};
