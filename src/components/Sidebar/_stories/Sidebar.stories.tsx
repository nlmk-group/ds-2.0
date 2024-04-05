import React, { ReactNode, useEffect, useState } from 'react';

import Sidebar from '@components/Sidebar';
import { ISidebarProps } from '@components/Sidebar/types';

import styles from './Sidebar.module.scss';

import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

const path =
  'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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
      <Sidebar.Avatar imageSrc="" />
      <Sidebar.MenuItem
        path="cars"
        label="cars"
        position="top"
        icon="IconKovsh32"
        onClick={() => setCurrentPath('cars')}
      >
        <Sidebar.SubmenuItem path="porsche" label="porsche" image={path} onClick={() => setCurrentPath('porsche')} />
        <Sidebar.SubmenuItem
          path="volksvagen"
          label="volksvagen"
          image={path}
          onClick={() => setCurrentPath('volksvagen')}
        >
          <Sidebar.SubmenuItem path="polo" label="polo" onClick={() => setCurrentPath('polo')} />
          <Sidebar.SubmenuItem path="tiguan" label="tiguan" onClick={() => setCurrentPath('tiguan')} />
          <Sidebar.SubmenuItem path="multivan" label="multivan" onClick={() => setCurrentPath('multivan')} disabled />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem path="toyota" label="toyota" image={path} onClick={() => setCurrentPath('toyota')}>
          <Sidebar.SubmenuItem path="supra" label="supra" onClick={() => setCurrentPath('supra')} />
          <Sidebar.SubmenuItem path="tundra" label="tundra" onClick={() => setCurrentPath('tundra')} />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem path="mazda" label="mazda" image={path} onClick={() => setCurrentPath('mazda')} />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem
        path="bands"
        label="bands"
        position="top"
        icon="IconBunkerOutlined32"
        onClick={() => setCurrentPath('bands')}
      >
        <Sidebar.SubmenuItem path="limp bizkit" label="limp bizkit" onClick={() => setCurrentPath('limp bizkit')} />
        <Sidebar.SubmenuItem path="slipknot" label="slipknot" onClick={() => setCurrentPath('slipknot')}>
          <Sidebar.SubmenuItem
            path="corey taylor"
            label="corey taylor"
            onClick={() => setCurrentPath('corey taylor')}
          />
          <Sidebar.SubmenuItem
            path="mick thompson"
            label="mick thompson"
            onClick={() => setCurrentPath('mick thompson')}
          />
          <Sidebar.SubmenuItem path="jim root" label="jim root" onClick={() => setCurrentPath('jim root')} />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem path="korn" label="korn" onClick={() => setCurrentPath('korn')} />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem
        path="menu item"
        label="menu item"
        position="top"
        icon="IconLightningStroke32"
        onClick={() => setCurrentPath('menu item')}
      />
      <Sidebar.MenuItem
        path="disabled item"
        label="disabled item"
        position="top"
        icon="IconMapPinaltOutlined32"
        disabled
        onClick={() => setCurrentPath('disabled item')}
      />
      <Sidebar.MenuItem
        path="lorem ipsum"
        label="lorem ipsum"
        position="bottom"
        icon="IconInfoOutlined32"
        onClick={() => setCurrentPath('lorem ipsum')}
      >
        <Sidebar.SubmenuItem path="dolor" label="dolor" onClick={() => setCurrentPath('dolor')} />
        <Sidebar.SubmenuItem path="sit" label="sit" onClick={() => setCurrentPath('sit')} />
        <Sidebar.SubmenuItem path="amet" label="amet" onClick={() => setCurrentPath('amet')} />
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
