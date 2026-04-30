import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Header';
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-23434';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Header отображает заголовок страницы и набор управляющих действий. Компонент поддерживает навигацию назад, сервисные кнопки, дату, уведомления, хлебные крошки и пользовательский контент."
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
        figmaLink={FIGMA_LINK}
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
            minHeight={180}
            description="Базовый заголовок страницы."
            code={`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header title="Header по умолчанию" />
)`}
          />
          <Editor
            minHeight={200}
            description="Возврат к предыдущему экрану через showBack и onBackClick."
            code={`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header
    title='Header с кнопкой возвращения слева'
    showBack
    onBackClick={() => console.log('Back clicked')}
  />
)`}
          />
          <Editor
            minHeight={180}
            description="Отображение текущей даты и времени через showDate."
            code={`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header title='Header с датой и временем' showDate />
)`}
          />
          <Editor
            minHeight={180}
            description="Кнопка избранного с обработчиком onFavoriteClick."
            code={`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header
    title='Header с кнопкой добавления в избранное'
    showFavorite
    onFavoriteClick={() => console.log('Favorite clicked')}
  />
)`}
          />
          <Editor
            minHeight={180}
            description="Кнопка уведомлений с количеством непрочитанных элементов."
            code={`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header
    title='Header с кнопкой уведомления'
    showNotification
    onNotificationClick={() => console.log('Notification clicked')}
    notificationAmount={9}
  />
)`}
          />
          <Editor
            description="Интеграция с Breadcrumbs через проп breadcrumbs."
            code={`import { Header, Breadcrumbs, Link } from '@nlmk/ds-2.0';

const crumbs = [
  { href: '/main', label: 'Главная' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/catalog/sheet', label: 'Лист горячекатаный' }
];

export default App = () => (
  <Header
    title='Header с хлебными крошками'
    breadcrumbs={
      <Breadcrumbs>
        {crumbs.map(item => (
          <Breadcrumbs.Crumb key={item.href}>
            <Link to={item.href}>{item.label}</Link>
          </Breadcrumbs.Crumb>
        ))}
      </Breadcrumbs>
    }
  />
)`}
          />
          <Editor
            description="Пользовательское действие в children рядом с заголовком."
            code={`import { Header, Button, IconSettingsAltOutlined24 } from '@nlmk/ds-2.0';

export default App = () => (
  <Header title='Header с дочерней кнопкой и хлебными крошками'>
    <Button
      type="button"
      style={{ marginRight: '25px' }}
      color="grey"
      variant="secondary"
      startIcon={<IconSettingsAltOutlined24 />}
    >
      Настройки
    </Button>
  </Header>
)`}
          />
          <Editor
            minHeight={220}
            description="Сервисные действия в шапке: печать, видео и сообщения."
            code={`import { Header } from '@nlmk/ds-2.0';

export default App = () => (
  <Header
    title="Панель действий"
    showPrint
    showVideo
    showMessage
    onPrintClick={() => console.log('Print clicked')}
    onVideoClick={() => console.log('Video clicked')}
    onMessageClick={() => console.log('Message clicked')}
  />
)`}
          />
          <Editor
            description="Комплексная конфигурация Header со всеми основными возможностями."
            code={`import { Header, Breadcrumbs, Link } from '@nlmk/ds-2.0';

export default App = () => {
  const breadcrumbsLinks = [
    { href: '/main', label: 'Главная' },
    { href: '/settings', label: 'Настройки' },
    { href: '/header', label: 'Header' }
  ];

  return (
    <Header
      title="Заголовок"
      showDate
      showPrint
      showFavorite
      showBack
      showVideo
      showMessage
      showNotification
      onPrintClick={() => console.log('Print clicked')}
      onVideoClick={() => console.log('Video clicked')}
      onMessageClick={() => console.log('Message clicked')}
      onFavoriteClick={() => console.log('Favorite clicked')}
      onBackClick={() => console.log('Back clicked')}
      onNotificationClick={() => console.log('Notification clicked')}
      notificationAmount={9}
      breadcrumbs={
        <Breadcrumbs>
          {breadcrumbsLinks.map((link, index) => (
            <Breadcrumbs.Crumb key={index}>
              <Link to={link.href}>{link.label}</Link>
            </Breadcrumbs.Crumb>
          ))}
        </Breadcrumbs>
      }
    />
  );
}`}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.design && <FigmaEmbed url={FIGMA_LINK} />}
      {activeTab == TabIds.tests && <Tests componentName={COMPONENT_NAME} />}
    </div>
  );
};

export default Stories;
