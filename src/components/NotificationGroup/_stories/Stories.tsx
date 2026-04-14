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

const COMPONENT_NAME = 'NotificationGroup';
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16800-67696';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Группа карточек уведомлений для истории в Drawer. В свёрнутом виде показывает только верхнюю карточку и намекает на остальные визуальным эффектом «колоды» — двумя срезами из-под неё. Круглая кнопка-тумблер снизу раскрывает всю стопку: карточки появляются каскадом с плавной slide-down анимацией, а при сворачивании уходят обратно такой же slide-up."
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
            minHeight={320}
            description="Группа из 3 карточек-уведомлений АСУ НЛМК в свёрнутом виде (колода). Клик по тумблеру раскрывает."
            code={`import { Box, NotificationCard, NotificationGroup } from '@nlmk/ds-2.0';

const body1 = 'Сервис «Контроль качества» сообщает об отклонении содержания углерода в плавке №4512 на конвертере К-3.';
const body2 = 'Сервис «Производственный план» уведомляет о плановой остановке стана горячей прокатки 2000 с 18.04.2026 на 72 часа.';
const body3 = 'Технологический регламент для стали S355J2 обновлён. Изменены требования к ударной вязкости при −40°C.';

export default App = () => (
  <Box st={{ maxWidth: 772, padding: 24 }}>
    <NotificationGroup>
      <NotificationCard title="Отклонение химсостава плавки №4512" body={body1} timestamp="сегодня, 14:13" unread />
      <NotificationCard title="Плановый ремонт прокатного стана 2000" body={body2} timestamp="сегодня, 12:00" unread />
      <NotificationCard title="Обновление регламента стали S355J2" body={body3} timestamp="вчера, 18:30" />
    </NotificationGroup>
  </Box>
)`}
          />
          <Editor
            minHeight={400}
            description="Та же группа сразу в раскрытом виде. Карточки 2..N появляются с slide-down анимацией 0.3s."
            code={`import { Box, NotificationCard, NotificationGroup } from '@nlmk/ds-2.0';

const body1 = 'Сервис «Контроль качества» сообщает об отклонении содержания углерода в плавке №4512 на конвертере К-3.';
const body2 = 'Сервис «Производственный план» уведомляет о плановой остановке стана горячей прокатки 2000 с 18.04.2026 на 72 часа.';
const body3 = 'Технологический регламент для стали S355J2 обновлён. Изменены требования к ударной вязкости при −40°C.';

export default App = () => (
  <Box st={{ maxWidth: 772, padding: 24 }}>
    <NotificationGroup defaultOpen>
      <NotificationCard title="Отклонение химсостава плавки №4512" body={body1} timestamp="сегодня, 14:13" unread />
      <NotificationCard title="Плановый ремонт прокатного стана 2000" body={body2} timestamp="сегодня, 12:00" unread />
      <NotificationCard title="Обновление регламента стали S355J2" body={body3} timestamp="вчера, 18:30" />
    </NotificationGroup>
  </Box>
)`}
          />
          <Editor
            minHeight={320}
            description="Группа из 2 карточек — один peek-слой в свёрнутом виде."
            code={`import { Box, NotificationCard, NotificationGroup } from '@nlmk/ds-2.0';

export default App = () => (
  <Box st={{ maxWidth: 772, padding: 24 }}>
    <NotificationGroup>
      <NotificationCard title="Превышение температуры кладки доменной печи" body="Датчики доменной печи №6 зафиксировали превышение температуры футеровки." timestamp="сегодня, 14:13" unread />
      <NotificationCard title="Смена опорных валков" body="Требуется согласование времени остановки стана." timestamp="сегодня, 12:00" />
    </NotificationGroup>
  </Box>
)`}
          />
          <Editor
            minHeight={500}
            description="Главный прод-кейс: Drawer «История уведомлений» АСУ НЛМК с табами, свитчем «Только непрочитанные», категориями-группами. Каждая категория оборачивает карточки в NotificationGroup для колоды/раскрытия."
            code={`import { useState } from 'react';
import { Badge, Box, Button, Drawer, Header, NotificationCard, NotificationGroup, Switch, Tabs, Typography } from '@nlmk/ds-2.0';

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
    cards: [
      { title: 'Отклонение химсостава плавки №4512', body: 'Сервис «Контроль качества» сообщает об отклонении содержания углерода в плавке №4512 на конвертере К-3. Фактическое значение 0,42% при нормативе 0,35–0,40%.', timestamp: 'сегодня, 14:13', unread: true },
      { title: 'Несоответствие толщины листа П-8897', body: 'Контролёр ОТК ЛПЦ-2 зафиксировал отклонение толщины листа в партии П-8897 на ±0,3 мм от допуска.', timestamp: 'сегодня, 12:00', unread: true }
    ]
  },
  {
    id: '2',
    category: 'Технологические процессы',
    title: 'Плановые ремонты и сервисные работы',
    unread: true,
    cards: [
      { title: 'Плановый ремонт прокатного стана 2000', body: 'Остановка стана горячей прокатки 2000 с 18.04.2026 на 72 часа для замены опорных валков.', timestamp: 'сегодня, 11:45', unread: true }
    ]
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
                <NotificationGroup>
                  {group.cards.map((card, idx) => (
                    <NotificationCard key={idx} title={card.title} body={card.body} timestamp={card.timestamp} unread={card.unread} />
                  ))}
                </NotificationGroup>
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
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
