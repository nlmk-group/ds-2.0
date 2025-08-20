import React, { ReactNode, useState } from 'react';

import { Avatar, Box, Button, Drawer, IconEditPenOutlined24, Input, Typography } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from './Drawer.module.scss';

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

export const DrawerWithProfile = (args: IDrawerProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer c примером профиля
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
        className={styles['profile-drawer']}
      >
        <Box flexDirection="column" height="100%">
          <Box flexDirection="column" height="100%" px="24px">
            <Typography variant="Heading3">Профиль пользователя</Typography>
            <Box gap="16px" alignItems="center">
              <Avatar />
              <Typography variant="Body1-Medium">Иван Иванов</Typography>
            </Box>
            <Box style={{ display: 'flex', gap: '24px', flexDirection: 'column', flexGrow: '1' }}>
              <Input pseudo label="Email" value="maili@mail.com" />
              <Input pseudo label="Должность" value="Руководитель проекта" />
              <Input pseudo label="Отдел" value="Направление ИТ базовых процессов ТОиР" />
              <Input pseudo label="Полномочия" value="Не указано" />
            </Box>
          </Box>
          <Box
            style={{
              display: 'flex',
              gap: '8px',
              borderTop: '1px solid',
              borderColor: 'var(--unique-divider)',
              padding: '24px'
            }}
          >
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
DrawerWithProfile.storyName = 'Drawer с примером профиля';
