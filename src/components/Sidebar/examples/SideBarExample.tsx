import React from 'react';

import Icon from '@components/Icon';
import Sidebar from '@components/Sidebar';

import s from './s.module.scss';

export const CustomIcon = () => {
  return (
    <div className={s.iconBox}>
      <Icon name="IconCalendarOutlined32" containerSize={32} htmlColor={'var(--steel-10)'} />
      <div className={s.indicator}></div>
    </div>
  );
};

export const SideBarExample = () => {
  return (
    <Sidebar overlay currentPath="" isLoggedIn={true} userName="Mike" userSurname="S.">
      <Sidebar.MenuItem
        label="Пункт меню"
        icon={<CustomIcon />}
        path=""
        key="SideBarExampleKey"
        position="top"
        onClick={() => null}
      />
    </Sidebar>
  );
};
