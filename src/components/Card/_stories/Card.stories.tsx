import React from 'react';

import { Box, Card, Typography } from '@components/index';
import { Controls, Primary, Stories, Title } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react-vite';

import argTypes from './argsTypes';
import CardOrientationExample from './CardOrientationExample';
import orientationSource from './CardOrientationExample.tsx?raw';
import MaintenanceRequest from './MaintenanceRequest';
import requestSource from './MaintenanceRequest.tsx?raw';
import { CARD_ORIENTATION, CARD_VARIANT, DEFAULT_CARD } from './text';

const meta = {
  title: 'Components/Card/Stories',
  component: Card,
  argTypes,
  parameters: {
    layout: 'padded',
    docs: {
      page: () => (
        <>
          <Title />
          <Primary />
          <Controls />
          <Stories title="Примеры" includePrimary={false} />
        </>
      )
    }
  },
  decorators: [
    Story => (
      <Box p={16} justifyContent="center" background="var(--steel-10)" borderRadius={8}>
        <Story />
      </Box>
    )
  ]
} as Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const CardDefault: Story = {
  name: DEFAULT_CARD,
  args: {
    orientation: 'vertical',
    indicatorStatus: 'info',
    indicatorSize: 'm',
    children: 'Контроль толщины листа'
  },
  render: ({ children, ...props }) => (
    <Card {...props}>
      <Typography variant="Caption">Операция № 14 · Участок проката</Typography>
      <Typography variant="Heading4">{children}</Typography>
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (jsx: string) =>
          jsx.trimStart().startsWith('import ')
            ? jsx
            : `import { Card, Typography } from '@nlmk/ds-2.0';\n\nexport default () => (\n${jsx.replace(/^/gm, '  ')}\n);`
      }
    }
  }
};

export const CardVariant: Story = {
  name: CARD_VARIANT,
  render: () => <MaintenanceRequest />,
  parameters: {
    controls: { disable: true },
    docs: { source: { code: requestSource.replace('@components/index', '@nlmk/ds-2.0') } }
  }
};

export const CardOrientation: Story = {
  name: CARD_ORIENTATION,
  render: () => <CardOrientationExample />,
  parameters: {
    controls: { disable: true },
    docs: { source: { code: orientationSource.replace('@components/index', '@nlmk/ds-2.0') } }
  }
};
