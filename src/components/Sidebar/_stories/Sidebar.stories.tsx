import React, { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

const CustomLogoSvgIcon = () => {
  return (
    <svg width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.68528 7.19816H7.69202V9.66439H9.83252V7.19816H11.8405V13.9305H9.83252V11.2643H7.69202V13.9305H5.68528V7.19816ZM18.9982 7.19816V13.9305H17.0552V8.79503H15.7853V10.7275C15.7853 11.5945 15.7184 12.6613 15.1834 13.261C14.6479 13.9274 13.6448 14.1273 12.508 13.9274V12.2639C13.5779 12.4644 13.8454 12.064 13.8454 10.7306V7.19816H18.9982ZM20.6706 7.19816H22.6767L23.8141 11.1977L24.9509 7.19816H26.9577L27.8939 13.9305H26.0184L25.5503 10.332L24.4785 13.9305H23.1411L22.0724 10.332L21.6043 13.9311H19.7313L20.6706 7.19816ZM28.6294 7.19816H30.6362V9.93094L32.5767 7.19816H34.7853L32.2393 10.5313L34.8466 13.9305H32.4399L30.6337 11.1977V13.9305H28.627L28.6294 7.19816Z"
        fill="var(--brand-sapphire-30)"
      />
      <path
        d="M20 0C7.95951 0 0 4.3321 0 10.7306C0 17.0631 7.95951 21.4624 20 21.4624C32.1067 21.4624 40 17.0606 40 10.7306C40 4.3321 32.1055 0 20 0ZM20 20.4622C8.69632 20.4622 1.13804 16.53 1.13804 10.7306C1.13681 4.86521 8.69509 0.999575 20 0.999575C31.3706 0.999575 38.862 4.86521 38.862 10.7306C38.862 16.53 31.3706 20.4622 20 20.4622Z"
        fill="var(--brand-sapphire-30)"
      />
    </svg>
  );
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
        path="Производственные отчеты-ссылка"
        label="Производственные отчеты-ссылка"
        content={
          <Link to="/custom-menu" style={{ color: 'inherit', textDecoration: 'none' }}>
            Производственные отчеты-ссылка
          </Link>
        }
        position="top"
        icon="IconLink24"
        onClick={() => setCurrentPath('Кастомный раздел-ссылка')}
      >
        <Sidebar.SubmenuItem
          path="Анализ-качества-сплавов-ссылка"
          label="Анализ-качества-сплавов-ссылка"
          content={
            <Link to="/custom-submenu" style={{ color: 'inherit', textDecoration: 'none' }}>
              Анализ-качества-сплавов-ссылка
            </Link>
          }
          onClick={() => setCurrentPath('Кастомный подраздел-ссылка')}
        />
      </Sidebar.MenuItem>
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
SidebarDefault.storyName = 'Sidebar по умолчанию';
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

export const SidebarWithOverlayAndDefaultMenuOpen = (argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault {...argTypes} />;
};
SidebarWithOverlayAndDefaultMenuOpen.storyName = 'Sidebar с оверлеем и открытым меню по умолчанию';
SidebarWithOverlayAndDefaultMenuOpen.args = {
  overlay: true,
  defaultMenuOpen: true,
  userName: 'Иван',
  userSurname: 'Иванов',
  systemName: 'НЛМК'
};

export const SidebarWithCustomLogo = (argTypes: ISidebarProps): ReactNode => {
  return <SidebarDefault {...argTypes} logo={<CustomLogoSvgIcon />} />;
};
SidebarWithCustomLogo.storyName = 'Sidebar с пользовательским компонентом logo';
SidebarWithCustomLogo.args = {
  userName: 'Иван',
  userSurname: 'Иванов',
  systemName: 'НЛМК'
};
