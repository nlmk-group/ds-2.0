import React, { ReactNode, useState } from 'react';

import { Avatar, Box, Button, Drawer, IconEditPenOutlined24, Input, Sidebar, Typography } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import { IDrawerProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => {
  return <Story />;
};

export default {
  title: 'Components/Drawer/Stories',
  component: Drawer,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof Drawer>;

export const DrawerDefault = (args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
      >
        <Box flexDirection="column" justifyContent="center" gap="20px">
          <Typography color="primary">Содержимое Drawer</Typography>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">
              Отменить
            </Button>
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
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer слева
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
      >
        <Box flexDirection="column" justifyContent="center" gap="20px">
          <Typography color="primary">Drawer, открывающийся слева</Typography>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">
              Отменить
            </Button>
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
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer слева
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
      >
        <Box flexDirection="column" justifyContent="center" gap="20px">
          <Box alignItems="center" justifyContent="center">
            <Typography color="primary">Drawer, открывающийся слева</Typography>
          </Box>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">
              Отменить
            </Button>
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

export const DrawerSidebar = (args: IDrawerProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  return (
    <div>
      <Sidebar
        orientation="vertical"
        allowFavorites
        isLoggedIn={isLoggedIn}
        onLogout={() => setIsLoggedIn(false)}
        onLogin={() => setIsLoggedIn(true)}
        currentPath={currentPath}
      >
        <Sidebar.Avatar size="s" imageSrc="" />
        <Sidebar.MenuItem
          path="tasks"
          label="Описание профиля"
          position="top"
          icon="IconKovsh32"
          onClick={() => setIsOpen(true)}
        ></Sidebar.MenuItem>
      </Sidebar>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
      >
        <Box height="100%" flexDirection="column">
          <Typography variant="Heading3">Профиль пользователя</Typography>
          <Box gap="16px" alignItems="center">
            <Avatar />
            <Typography variant="Body1-Medium">Иван Иванов</Typography>
          </Box>
          <Box style={{ display: 'flex', gap: '24px', flexDirection: 'column', flexGrow: '1' }}>
            <Input pseudo label="Email" value="Ivanov_ii@nlmk.com" />
            <Input pseudo label="Должность" value="Руководитель проекта" />
            <Input pseudo label="Отдел" value="Направление ИТ базовых процессов ТОиР" />
            <Input pseudo label="Полномочия" value="Не указано" />
          </Box>
          <Box style={{ display: 'flex', flexShrink: '1', gap: '8px' }}>
            <Button startIcon={<IconEditPenOutlined24 />} type="button">
              Редактировать
            </Button>
            <Button type="button" variant="secondary">
              Закрыть
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};
DrawerSidebar.storyName = 'Drawer с боковой панелью';
DrawerSidebar.parameters = {
  layout: 'fullscreen'
};
