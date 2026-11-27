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
import { inboxExample } from './inboxExample';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'NotificationCard';
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16720-15828';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Большая карточка уведомления для истории в Drawer или Dialog. Содержит заголовок, текст и время, точкой помечает непрочитанные. Длинный текст автоматически сворачивается до двух строк — кнопка «Показать больше / Свернуть» появляется только если текст действительно обрезается, и раскрывает содержимое плавной анимацией в обе стороны."
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
            minHeight={260}
            description="NotificationCard по умолчанию."
            code={`import { Box, NotificationCard } from '@nlmk/ds-2.0';

export default () => (
  <Box st={{ maxWidth: 772 }}>
    <NotificationCard
      title="Планирование графика отпусков на следующий год"
      body="Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание на сроки согласования — до 30 апреля."
      timestamp="сегодня, 14:13"
      unread
    />
  </Box>
)`}
          />
          <Editor
            minHeight={200}
            description="Пример с коротким текстом."
            code={`import { Box, NotificationCard } from '@nlmk/ds-2.0';

export default () => (
  <Box st={{ maxWidth: 772 }}>
    <NotificationCard
      title="Заявка на отпуск одобрена"
      body="Руководитель согласовал ваш отпуск с 12 по 25 мая."
      timestamp="сегодня, 14:13"
    />
  </Box>
)`}
          />
          <Editor
            stacked
            minHeight={260}
            description="Центр уведомлений. Откройте панель, выберите раздел и отметьте сообщения как прочитанные."
            code={inboxExample}
          />
          <Editor
            minHeight={220}
            description="Controlled режим с внешним состоянием раскрытия."
            code={`import { useState } from 'react';
import { Box, NotificationCard } from '@nlmk/ds-2.0';

export default () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box st={{ maxWidth: 772 }}>
      <NotificationCard
        title="Новый корпоративный курс доступен для записи"
        body="Открыта запись на курс «Эффективное общение в команде». Обучение состоится онлайн 20 апреля с 10:00 до 17:00. Количество мест ограничено — успейте записаться до 18 апреля."
        timestamp="сегодня, 14:13"
        expanded={expanded}
        onExpandedChange={setExpanded}
      />
    </Box>
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
