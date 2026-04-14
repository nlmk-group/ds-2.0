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
        description="Большая карточка уведомления для истории в Drawer или Dialog. Содержит заголовок, текст и время, красной точкой помечает непрочитанные. Длинный текст автоматически сворачивается до двух строк — кнопка «Показать больше / Свернуть» появляется только если текст действительно обрезается, и раскрывает содержимое плавной анимацией в обе стороны."
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
            description="Базовая карточка с длинным текстом уведомления АСУ НЛМК. Кнопка «Показать больше» появляется автоматически, если текст обрезается в preview."
            code={`import { Box, NotificationCard } from '@nlmk/ds-2.0';

export default App = () => (
  <Box st={{ maxWidth: 772 }}>
    <NotificationCard
      title="Отклонение химсостава плавки №4512"
      body="Сервис «Контроль качества» сообщает об отклонении содержания углерода в плавке №4512 на конвертере К-3. Фактическое значение 0,42% при нормативе 0,35–0,40%. Технологу ЛПЦ-2 требуется принять решение о корректировке режима продувки и подтвердить возможность дальнейшего передела металла до окончания смены."
      timestamp="сегодня, 14:13"
      unread
    />
  </Box>
)`}
          />
          <Editor
            minHeight={200}
            description="Короткий текст — кнопка «Показать больше» не появляется."
            code={`import { Box, NotificationCard } from '@nlmk/ds-2.0';

export default App = () => (
  <Box st={{ maxWidth: 772 }}>
    <NotificationCard
      title="Конвертер К-3 выведен на рабочий режим"
      body="Плавка принята ОТК."
      timestamp="сегодня, 14:13"
    />
  </Box>
)`}
          />
          <Editor
            minHeight={500}
            description="Использование внутри Drawer «История уведомлений» АСУ НЛМК: табы по категориям, свитч «Только непрочитанные», группы с заголовком и NotificationCard внутри."
            code={`import { useState } from 'react';
import { Badge, Box, Button, Drawer, Header, NotificationCard, Switch, Tabs, Typography } from '@nlmk/ds-2.0';

const tabItems = [
  { label: 'Контроль качества', count: 4, badgeColor: 'error' },
  { label: 'Технологические процессы', count: 12, badgeColor: 'error' },
  { label: 'Производственные задания', count: 99, badgeColor: 'brand' }
];

const groups = [
  {
    id: '1',
    category: 'Контроль качества',
    title: 'Отклонения по плавкам и прокату требуют внимания технолога',
    unread: true,
    body: 'Сервис «Контроль качества» сообщает об отклонении содержания углерода в плавке №4512 на конвертере К-3. Фактическое значение 0,42% при нормативе 0,35–0,40%. Технологу ЛПЦ-2 требуется принять решение о корректировке режима продувки.',
    timestamp: 'сегодня, 14:13'
  },
  {
    id: '2',
    category: 'Технологические процессы',
    title: 'Плановые ремонты и сервисные работы',
    unread: true,
    body: 'Сервис «Производственный план» уведомляет о плановой остановке стана горячей прокатки 2000 с 18.04.2026 на 72 часа для замены опорных валков. Объём выпуска перераспределён на ЛПЦ-2.',
    timestamp: 'сегодня, 11:45'
  }
];

export default App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [unreadOnly, setUnreadOnly] = useState(true);

  return (
    <Box st={{ position: 'relative', width: '100%' }}>
      <Header title="АСУ НЛМК" showNotification notificationAmount={115} onNotificationClick={() => setIsOpen((p) => !p)} />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="820px">
        <Box flexDirection="column" gap={32} st={{ padding: '32px 32px 48px' }} color="var(--steel-90)">
          <Typography variant="Heading2">Уведомления</Typography>

          <Box flexDirection="column" gap={24}>
            <Tabs>
              {tabItems.map((item, idx) => (
                <Tabs.Tab key={item.label} label={item.label} hasBadge badgeChildren={item.count > 99 ? '99+' : item.count} badgeColor={item.badgeColor} active={activeTab === idx} onClick={() => setActiveTab(idx)} />
              ))}
            </Tabs>

            <Box alignItems="center" justifyContent="flex-end" gap={8}>
              <Switch checked={unreadOnly} onChange={() => setUnreadOnly((p) => !p)} />
              <Typography variant="Body1-Medium">Только непрочитанные</Typography>
            </Box>
          </Box>

          <Box flexDirection="column" gap={32} st={{ padding: '0 16px 16px' }}>
            {groups.map((group) => (
              <Box key={group.id} flexDirection="column" gap={16}>
                <Box flexDirection="column" gap={8} py={12}>
                  <Box>
                    <Badge color="brand" variant="solid" size="l">{group.category}</Badge>
                  </Box>
                  <Box alignItems="center" justifyContent="space-between">
                    <Box alignItems="center" gap={8}>
                      {group.unread && <Box st={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--spectrum-red-40)' }} />}
                      <Typography variant="Subheading3-Medium" color="var(--brand-sapphire-50)">{group.title}</Typography>
                    </Box>
                    <Button type="button" size="xs" variant="secondary" color="brand">Отметить все как прочитанные</Button>
                  </Box>
                </Box>
                <NotificationCard title={group.title} body={group.body} timestamp={group.timestamp} unread={group.unread} />
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}`}
          />
          <Editor
            minHeight={220}
            description="Controlled режим с внешним состоянием раскрытия."
            code={`import { useState } from 'react';
import { Box, NotificationCard } from '@nlmk/ds-2.0';

export default App = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box st={{ maxWidth: 772 }}>
      <NotificationCard
        title="Плановый ремонт прокатного стана 2000"
        body="Сервис «Производственный план» уведомляет о плановой остановке стана горячей прокатки 2000 с 18.04.2026 на 72 часа для замены опорных валков. Объём выпуска на период ремонта перераспределён на ЛПЦ-2."
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
