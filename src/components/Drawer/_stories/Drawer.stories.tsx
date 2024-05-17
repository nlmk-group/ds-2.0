import React, { ReactNode, useState } from 'react';

import { ESizes } from '@components/Button/enums';
import { Box, Button, Drawer, IconCloseOutlined24, Input, Typography } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from './Drawer.module.scss';

import { IDrawerProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => {
  return (
    <Box alignItems="center" justifyContent="center" st={{ height: '100vh' }}>
      <Story />
    </Box>
  );
};

export default {
  title: 'Components/Drawer/Stories',
  component: Drawer,
  decorators: [withWrapper],
  argTypes: argsTypes,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Drawer>;

export const DrawerDefault = (args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Открыть Drawer</Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
      >
        <Box flexDirection="column" justifyContent="center" gap="var(--20-size)">
          <Typography color="primary">Содержимое Drawer</Typography>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button>Отправить</Button>
            <Button variant="secondary">Отменить</Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};
DrawerDefault.storyName = 'Drawer по умолчанию';

export const DrawerLeft = (args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
      >
        <Box flexDirection="column" justifyContent="center" gap="var(--20-size)">
          <Typography color="primary">Drawer, открывающийся слева</Typography>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button>Отправить</Button>
            <Button variant="secondary">Отменить</Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};
DrawerLeft.storyName = 'Drawer слева';
DrawerLeft.args = {
  position: 'left'
};

export const DrawerWithoutCloseButton = (args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
      >
        <Box flexDirection="column" justifyContent="center" gap="var(--20-size)">
          <Box alignItems='center' justifyContent="center">
            <Typography color="primary">Drawer, открывающийся слева</Typography>
          </Box>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button>Отправить</Button>
            <Button variant="secondary">Отменить</Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};
DrawerWithoutCloseButton.storyName = 'Drawer без крестика';
DrawerWithoutCloseButton.args = {
  isViewCloseButton: false
};
