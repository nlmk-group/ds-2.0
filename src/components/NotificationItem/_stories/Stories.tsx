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
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-23434&p=f';

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
            description="Сборка hover-панели уведомлений АСУ НЛМК: Header с кнопкой-колокольчиком, hover-детект через DOM, курсор-pointer на колокольчике и счётчике, список NotificationItem внутри. Основной кейс использования компонента."
            code={`import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Header, NotificationItem, Typography } from '@nlmk/ds-2.0';

const items = [
  { label: 'Контроль качества', count: 4, badgeColor: 'error' },
  { label: 'Технологические процессы', count: 12, badgeColor: 'error' },
  { label: 'Производственные задания', count: 99, badgeColor: 'brand' }
];

export default App = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const bell = document.querySelector('[data-testid="HEADER_NOTIFICATION"]');
    const amount = document.querySelector('[data-testid="HEADER_NOTIFICATION_AMOUNT"]');
    if (!bell) return;
    bell.style.cursor = 'pointer';
    if (amount) amount.style.pointerEvents = 'none';

    const pointIn = (x, y, r) => r && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;

    const handleMove = (e) => {
      const inside =
        pointIn(e.clientX, e.clientY, bell.getBoundingClientRect()) ||
        pointIn(e.clientX, e.clientY, amount?.getBoundingClientRect()) ||
        pointIn(e.clientX, e.clientY, panelRef.current?.getBoundingClientRect());

      if (inside) {
        if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
        setOpen(true);
      } else if (!closeTimer.current) {
        closeTimer.current = setTimeout(() => { setOpen(false); closeTimer.current = null; }, 200);
      }
    };

    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <Box st={{ position: 'relative', width: '100%' }}>
      <Header title="АСУ НЛМК" showNotification notificationAmount={115} />
      {open && (
        <div ref={panelRef} style={{ position: 'absolute', top: '100%', right: 0, zIndex: 1100 }}>
          <Box
            flexDirection="column"
            gap={4}
            st={{
              padding: '8px 0',
              minWidth: 270,
              background: 'var(--steel-10)',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)'
            }}
          >
            <Box st={{ padding: '6px 12px' }}>
              <Typography variant="Heading4">Уведомления</Typography>
            </Box>
            {items.map((item, idx) => (
              <NotificationItem
                key={item.label}
                label={item.label}
                count={item.count}
                badgeColor={item.badgeColor}
                onClick={(v) => console.log(v, idx)}
              />
            ))}
          </Box>
        </div>
      )}
    </Box>
  );
}`}
          />
          <Editor
            minHeight={200}
            description="NotificationItem как самостоятельный элемент в произвольном layout."
            code={`import { NotificationItem } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 270 }}>
    <NotificationItem label="Контроль качества" count={4} active onClick={(v) => console.log(v)} />
    <NotificationItem label="Технологические процессы" count={12} onClick={(v) => console.log(v)} />
    <NotificationItem label="Производственные задания" count={150} badgeColor="brand" />
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
