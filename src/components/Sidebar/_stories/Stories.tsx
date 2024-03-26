import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Sidebar';
const FIGMA_URL =
  'https://www.figma.com/file/NVWvbpDg0KxYpZOlCMFXdy/DS2.0-Sidebar?type=design&node-id=0-1&mode=design&t=Qh3zxP2KDdKIeZpx-0';

const sidebarDefault = `
import { useState } from 'react';
import { Sidebar, MenuItem, SubmenuItem, Avatar } from '@nlmk/ds-2.0';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const path = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <Sidebar
      isLoggedIn={isLoggedIn}
      onOpenUser={() => {}}
      onLogout={() => setIsLoggedIn(false)}
      onLogin={() => setIsLoggedIn(true)}
    >
      <Avatar
        userName='User'
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
          <SubmenuItem label="supra"/>
          <SubmenuItem label="tundra"/>
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
      <MenuItem label="search" position="bottom" icon='IconSearchOutlined32' />
    </Sidebar>
  );
}
export default App;`

const sidebarHorizontal = `
import { Sidebar, MenuItem, SubmenuItem } from '@nlmk/ds-2.0';

const App = () => {
  return (
    <Sidebar>
      <Sidebar.MenuItem label="Продукция" icon='IconBoxOutlined32'>
        <Sidebar.SubmenuItem label="Новинки">
          <Sidebar.SubmenuItem label="Продукт 1" />
          <Sidebar.SubmenuItem label="Продукт 2" />
        </Sidebar.SubmenuItem>
        <Sidebar.SubmenuItem label="Популярные">
          <Sidebar.SubmenuItem label="Продукт 3" />
          <Sidebar.SubmenuItem label="Продукт 4" />
        </Sidebar.SubmenuItem>
      </Sidebar.MenuItem>
      <Sidebar.MenuItem label="Услуги" icon='IconServicesOutlined32'>
        <Sidebar.SubmenuItem label="Консультации" />
        <Sidebar.SubmenuItem label="Доставка" />
      </Sidebar.MenuItem>
      <Sidebar.MenuItem label="Контакты" icon='IconPhoneOutlined32' />
    </Sidebar>
  );
}
export default App;
`

const SidebarStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description={`Компонент для навигации и организации контента в интерфейсе.`}
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
        figmaLink={FIGMA_URL}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={isActive(TabIds.dev)} onClick={() => setActiveTab(TabIds.dev)} />
          <Tabs.Tab label="Дизайнеру" active={isActive(TabIds.design)} onClick={() => setActiveTab(TabIds.design)} />
          <Tabs.Tab label="Тестирование" active={isActive(TabIds.tests)} onClick={() => setActiveTab(TabIds.tests)} />
        </Tabs>
      </div>
      {activeTab == TabIds.dev && (
        <>
          <Editor
            height={400}
            description="Пример Sidebar"
            code={sidebarDefault}
          />
          <Editor
            height={600}
            description="Горизонтальный Sidebar"
            code={sidebarHorizontal}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}

      {activeTab == TabIds.design && <FigmaEmbed url={FIGMA_URL} />}
      {activeTab == TabIds.tests && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName={COMPONENT_NAME} />
        </Typography>
      )}
    </div>
  );
};

export default SidebarStories;
