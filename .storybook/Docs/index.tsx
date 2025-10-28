import React, { ComponentProps, FC, PropsWithChildren } from 'react';

import { DocsContainer } from '@storybook/addon-docs/blocks';

import { storybookDarkTheme, storybookLightTheme } from '../storybookTheme';
import useRootAttributeTheme from './useRootAttributeTheme';

type DocsThemeContainerType = FC<PropsWithChildren<ComponentProps<typeof DocsContainer>>>;

const DocsThemeContainer: DocsThemeContainerType = ({ children, ...props }) => {
  const attributeTheme = useRootAttributeTheme();
  const theme = attributeTheme.includes('dark') ? storybookDarkTheme : storybookLightTheme;

  return (
    <DocsContainer {...props} theme={theme}>
      {children}
    </DocsContainer>
  );
};

export default DocsThemeContainer;
