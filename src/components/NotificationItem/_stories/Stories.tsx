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

const COMPONENT_NAME = 'NotificationItem';
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
        description="Строка категории уведомлений — текст слева, счётчик-бейдж справа. Кликабельна, доступна с клавиатуры. Чаще всего используется как кирпичик для собственной выпадающей панели, которая появляется при наведении на колокольчик в Header. Подойдёт и как самостоятельный элемент в любых списках — внутри Drawer, Dialog или собственного layout."
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
            minHeight={280}
            description="Откройте список уведомлений в шапке и выберите категорию."
            code={`import { useState } from 'react';
import { Box, Header, NotificationItem, Typography } from '@nlmk/ds-2.0';

export default function Notifications() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const items = [
    { label: 'На согласование', count: 2 },
    { label: 'Для ознакомления', count: 7 }
  ];

  return (
    <Box flexDirection="column" gap={12} width="100%">
      <Header title="Рабочий кабинет" showNotification notificationAmount={9}
        onNotificationClick={() => setOpen(current => !current)} />
      {open && items.map(item => (
        <NotificationItem key={item.label} label={item.label} count={item.count}
          active={category === item.label} onClick={setCategory} />
      ))}
      {category && <Typography>Выбрана категория «{category}»</Typography>}
    </Box>
  );
}`}
          />
          <Editor
            minHeight={200}
            description="NotificationItem по умолчанию."
            code={`import { NotificationItem } from '@nlmk/ds-2.0';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 270 }}>
    <NotificationItem label="Отпуска и отгулы" count={4} active onClick={(v) => console.log(v)} />
    <NotificationItem label="Обучение и развитие" count={12} onClick={(v) => console.log(v)} />
    <NotificationItem label="Корпоративные новости" count={150} badgeColor="brand" />
    <NotificationItem label="Прокатное производство" count={0} />
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
