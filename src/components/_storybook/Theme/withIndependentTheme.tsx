import React, { useLayoutEffect } from 'react';

import type { Decorator } from '@storybook/react-vite';

// The hook controls the palette in the story iframe independently of the docs page.
export const withIndependentTheme: Decorator = Story => {
  useLayoutEffect(() => {
    const stylesheet = document.querySelector<HTMLLinkElement>('link[href$="/dark-theme-storybook.css"]');
    if (!stylesheet) return;
    const disabled = stylesheet.disabled;
    stylesheet.disabled = true;
    return () => {
      stylesheet.disabled = disabled;
    };
  }, []);

  return <Story />;
};
