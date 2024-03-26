import React, { ReactNode, useEffect, useState } from 'react';

import Sidebar from '@components/Sidebar';
import { ISidebarProps } from '@components/Sidebar/types';
import { argsTypes } from './argsTypes';

import styles from './Sidebar.module.scss';
import { getAvatarImageSrc } from '@components/Avatar/utils';

const {Avatar, MenuItem, SubmenuItem} = Sidebar;
const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default {
  title: 'Components/Sidebar/Stories',
  component: Sidebar,
  decorators: [withWrapper],
  argTypes: argsTypes,
  parameters: {
    layout: 'fullscreen'
  }
};

const AvatarImageMock = getAvatarImageSrc();

export const SidebarDefault = (argTypes: ISidebarProps): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => setIsLoggedIn(Boolean(argTypes.isLoggedIn)), [argTypes.isLoggedIn]);

  return (
    <Sidebar
      key={argTypes.orientation}
      orientation='vertical'
      {...argTypes}
      isLoggedIn={isLoggedIn}
      onLogout={() => setIsLoggedIn(false)}
      onLogin={() => setIsLoggedIn(true)}
    >
      <Avatar
        imageSrc={AvatarImageMock}
        userName={argTypes.userName}
        userSurname={argTypes.userSurname}
        online
      />
      <MenuItem label="cars" position="top" icon='IconHomeOutlined32'>
        <SubmenuItem label="porsche" image={path} />
        <SubmenuItem label="volksvagen" image={path}>
          <SubmenuItem label="polo"/>
          <SubmenuItem label="tiguan"/>
          <SubmenuItem label="multivan"/>
        </SubmenuItem>
        <SubmenuItem label="toyota" image={path}>
          <Sidebar.SubmenuItem label="supra"/>
          <Sidebar.SubmenuItem label="tundra"/>
        </SubmenuItem>
        <SubmenuItem label="mazda" image={path} />
      </MenuItem>
      <MenuItem label="bands" position="top" icon='IconHomeOutlined32'>
        <SubmenuItem label="limp bizkit" />
        <SubmenuItem label="slipknot">
          <SubmenuItem label="corey taylor" />
          <SubmenuItem label="mick thompson" />
          <SubmenuItem label="jim root" />
        </SubmenuItem>
        <SubmenuItem label="korn" />
      </MenuItem>
      <MenuItem label="menu item" position="top" icon='IconInteractionOutlined32' />
      <MenuItem label="lorem ipsum" position="bottom" icon='IconHomeOutlined32'>
        <SubmenuItem label="dolor" />
        <SubmenuItem label="sit" />
        <SubmenuItem label="amet" />
      </MenuItem>
    </Sidebar>
  );
};
SidebarDefault.storyName = 'Дефолтный сайдбар';

export const VerticalBurgerSidebar = (argTypes: ISidebarProps): ReactNode => {
  return (
    <SidebarDefault
      variant='burger'
      {...argTypes}
      onOpenUser={() => {}}
      onLogout={() => {}}
      onLogin={() => {}}
    />
  );
};
VerticalBurgerSidebar.storyName = 'Вертикальный бургер';

export const SidebarHorizontal = (argTypes: ISidebarProps): ReactNode => {
  return (
    <SidebarDefault
      orientation='horizontal'
      {...argTypes}
      onOpenUser={() => {}}
      onLogout={() => {}}
      onLogin={() => {}}
    />
  );
};
SidebarHorizontal.storyName = 'Горизонтальный сайдбар';

export const HorizontalBurgerSidebar = (argTypes: ISidebarProps): ReactNode => {
  return (
    <SidebarDefault
      orientation='horizontal'
      variant='burger'
      {...argTypes}
      onOpenUser={() => {}}
      onLogout={() => {}}
      onLogin={() => {}}
    />
  );
};
HorizontalBurgerSidebar.storyName = 'Горизонтальный бургер';

export const SidebarHorizontalV2 = (argTypes: ISidebarProps): ReactNode => {
  return (
    <SidebarDefault
      orientation='horizontal'
      submenuVersion='version2'
      {...argTypes}
      onOpenUser={() => {}}
      onLogout={() => {}}
      onLogin={() => {}}
    />
  );
};
SidebarHorizontalV2.storyName = 'Горизонтальный сайдбар с сабменю версия 2';

export const SidebarHorizontalV3 = (argTypes: ISidebarProps): ReactNode => {
  return (
    <SidebarDefault
      orientation='horizontal'
      submenuVersion='version3'
      {...argTypes}
      onOpenUser={() => {}}
      onLogout={() => {}}
      onLogin={() => {}}
    />
  );
};
SidebarHorizontalV3.storyName = 'Горизонтальный сайдбар с сабменю версия 3';
