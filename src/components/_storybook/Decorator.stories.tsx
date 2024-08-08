import React from 'react';

const withPadding = (Story: () => any) => Story();

export default {
  component: () => null,
  decorators: [withPadding],
  argTypes: {},
  tags: ['!autodocs', '!dev']
};

export const DecoratorDefault = () => {
  return <div />;
};
