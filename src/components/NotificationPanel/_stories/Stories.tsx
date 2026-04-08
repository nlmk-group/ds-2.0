import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'NotificationPanel';
const FIGMA_LINK = '';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="NotificationPanel отображает выпадающую панель уведомлений с категориями и счётчиками. Компонент поддерживает активное состояние элемента, кастомные цвета бейджей и использование как в dropdown, так и внутри Dialog/Drawer."
        isBeta
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
            minHeight={250}
            description="Базовая панель уведомлений с категориями."
            code={`import { NotificationPanel } from '@nlmk/ds-2.0';

const items = [
  { label: 'Требуется сделать', count: 2, badgeColor: 'error', active: true },
  { label: 'Важно ознакомиться', count: 7, badgeColor: 'error' },
  { label: 'Для информации', count: 150, badgeColor: 'brand' }
];

export default App = () => (
  <NotificationPanel
    items={items}
    onItemClick={(value, index) => console.log(value, index)}
  />
)`}
          />
          <Editor
            minHeight={350}
            description="Использование с Header: панель показывается по клику на кнопку уведомлений и закрывается по клику снаружи через ClickAwayListener."
            code={`import { useEffect, useRef, useState } from 'react';
import { ClickAwayListener, Header, NotificationPanel } from '@nlmk/ds-2.0';

const items = [
  { label: 'Требуется сделать', count: 2, badgeColor: 'error', active: true },
  { label: 'Важно ознакомиться', count: 7, badgeColor: 'error' },
  { label: 'Для информации', count: 99, badgeColor: 'brand' }
];

export default App = () => {
  const [open, setOpen] = useState(false);
  const notifButtonRef = useRef(null);

  useEffect(() => {
    const el = document.querySelector('[data-testid="HEADER_NOTIFICATION"]');
    if (el) notifButtonRef.current = el.parentElement;
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Header
        title="Страница"
        showNotification
        notificationAmount={108}
        onNotificationClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)} excludeRef={notifButtonRef}>
          <div style={{ position: 'absolute', top: 60, right: 24, zIndex: 100 }}>
            <NotificationPanel items={items} onItemClick={(v) => console.log(v)} />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}`}
          />
          <Editor
            minHeight={200}
            description="NotificationItem как самостоятельный компонент — для использования в Dialog или кастомных layout-ах."
            code={`import { NotificationItem } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 270 }}>
    <NotificationItem label="Требуется сделать" count={2} active onClick={(v) => console.log(v)} />
    <NotificationItem label="Важно ознакомиться" count={7} onClick={(v) => console.log(v)} />
    <NotificationItem label="Для информации" count={150} badgeColor="brand" />
  </div>
)`}
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
