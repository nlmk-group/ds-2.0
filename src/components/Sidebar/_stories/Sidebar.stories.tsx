import React, { ReactNode, useEffect, useState } from 'react';

import Sidebar from '@components/Sidebar';
import { ISidebarProps } from '@components/Sidebar/types';

import styles from './Sidebar.module.scss';

import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

const path = 'img/image_workers.jpg';

export default {
  title: 'Components/Sidebar/Stories',
  component: Sidebar,
  decorators: [withWrapper],
  argTypes: argsTypes,
  parameters: {
    layout: 'fullscreen'
  }
};

export const SidebarDefault = (argTypes: ISidebarProps): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => setIsLoggedIn(Boolean(argTypes.isLoggedIn)), [argTypes.isLoggedIn]);

  return (
    <Sidebar
      key={argTypes.orientation}
      orientation="vertical"
      allowFavorites
      {...argTypes}
      isLoggedIn={isLoggedIn}
      onLogout={() => setIsLoggedIn(false)}
      onLogin={() => setIsLoggedIn(true)}
      currentPath={currentPath}
    >
      <Sidebar.Avatar size="s" imageSrc="" />
      <Sidebar.MenuItem
        path="tasks"
        label="Задание на добавление"
        position="top"
        icon="IconKovsh32"
        onClick={() => setCurrentPath('tasks')}
      >
        <Sidebar.SubmenuItem
          path="Плавка стали"
          label="Плавка стали"
          image={path}
          onClick={() => setCurrentPath('Плавка стали')}
        />
        <Sidebar.SubmenuItem
          path="Обработка и термообработка"
          label="Обработка и термообработка"
          image={path}
          onClick={() => setCurrentPath('Обработка и термообработка')}
        >
          <Sidebar.SubmenuItem
            path="Закалка и отпуск"
            label="Закалка и отпуск"
            onClick={() => setCurrentPath('Закалка и отпуск')}
          />
          <Sidebar.SubmenuItem
            path="Отжиг и нормализация"
            label="Отжиг и нормализация"
            onClick={() => setCurrentPath('Отжиг и нормализация')}
          />
          <Sidebar.SubmenuItem
            path="Механическая обработка"
            label="Механическая обработка"
            onClick={() => setCurrentPath('Механическая обработка')}
            disabled
          />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem
          path="Литье сталепродукции"
          label="Литье сталепродукции"
          image={path}
          onClick={() => setCurrentPath('Литье сталепродукции')}
        ></Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem
          path="Автоматизация производства"
          label="Автоматизация производства"
          image={path}
          onClick={() => setCurrentPath('Автоматизация производства')}
        />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem
        path="Дивизионы НЛМК"
        label="Дивизионы НЛМК"
        position="top"
        icon="IconBunkerOutlined32"
        onClick={() => setCurrentPath('Дивизионы НЛМК')}
      >
        <Sidebar.SubmenuItem path="НЛМК-Европа" label="НЛМК-Европа" onClick={() => setCurrentPath('НЛМК-Европа')} />
        <Sidebar.SubmenuItem path="НЛМК-Россия" label="НЛМК-Россия" onClick={() => setCurrentPath('ННЛМК-Россия')}>
          <Sidebar.SubmenuItem path="Стагдок" label="Стагдок" onClick={() => setCurrentPath('Стагдок')} />
          <Sidebar.SubmenuItem path="Доломит" label="Доломит" onClick={() => setCurrentPath('Доломит')} />
          <Sidebar.SubmenuItem
            path="Стойленский ГОК"
            label="Стойленский ГОК"
            onClick={() => setCurrentPath('Стойленский ГОК')}
          />
          <Sidebar.SubmenuItem path="ВИЗ-Сталь" label="ВИЗ-Сталь" onClick={() => setCurrentPath('ВИЗ-Сталь')} />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem path="НЛМК-США" label="НЛМК-США" onClick={() => setCurrentPath('НЛМК-США')} />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem
        path="Кастомный раздел меню"
        label="Кастомный раздел меню"
        position="top"
        icon="IconLightningStroke32"
        onClick={() => setCurrentPath('Кастомный раздел меню')}
      />
      <Sidebar.MenuItem
        path="Отключенный раздел"
        label="Отключенный раздел"
        position="top"
        icon="IconMapPinaltOutlined32"
        disabled
        onClick={() => setCurrentPath('Отключенный раздел')}
      />
      <Sidebar.MenuItem
        path="Ресурсы"
        label="Ресурсы"
        position="bottom"
        icon="IconInfoOutlined32"
        onClick={() => setCurrentPath('Ресурсы')}
      >
        <Sidebar.SubmenuItem path="Сталь" label="Сталь" onClick={() => setCurrentPath('Сталь')} />
        <Sidebar.SubmenuItem path="Чугун" label="Чугун" onClick={() => setCurrentPath('Чугун')} />
        <Sidebar.SubmenuItem path="Медь" label="Медь" onClick={() => setCurrentPath('Медь')} />
      </Sidebar.MenuItem>
    </Sidebar>
  );
};
SidebarDefault.storyName = 'Дефолтный сайдбар';
SidebarDefault.args = {
  userName: 'Иван',
  userSurname: 'Иванов',
  systemName: 'НЛМК'
};

export const VerticalBurgerSidebar = (argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault variant="burger" {...argTypes} onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} />;
};
VerticalBurgerSidebar.storyName = 'Вертикальный бургер';
VerticalBurgerSidebar.args = {
  userName: 'Иван',
  userSurname: 'Иванов',
  systemName: 'НЛМК'
};

export const SidebarHorizontal = (argTypes: ISidebarProps): ReactNode => {
  return (
    <SidebarDefault
      orientation="horizontal"
      {...argTypes}
      onOpenUser={() => {}}
      onLogout={() => {}}
      onLogin={() => {}}
    />
  );
};
SidebarHorizontal.storyName = 'Горизонтальный сайдбар';
SidebarHorizontal.args = {
  userName: 'Иван',
  userSurname: 'Иванов',
  systemName: 'НЛМК'
};

export const HorizontalBurgerSidebar = (argTypes: ISidebarProps): ReactNode => {
  return (
    <SidebarDefault
      orientation="horizontal"
      variant="burger"
      {...argTypes}
      onOpenUser={() => {}}
      onLogout={() => {}}
      onLogin={() => {}}
    />
  );
};
HorizontalBurgerSidebar.storyName = 'Горизонтальный бургер';
HorizontalBurgerSidebar.args = {
  userName: 'Иван',
  userSurname: 'Иванов',
  systemName: 'НЛМК'
};
