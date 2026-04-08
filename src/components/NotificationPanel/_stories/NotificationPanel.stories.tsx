import React from 'react';

import { EBadgeColors } from '@components/Badge/enums';
import {
  Badge,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Drawer,
  Header,
  NotificationItem,
  NotificationPanel,
  Switch,
  Tabs,
  Typography
} from '@components/index';
import { NotificationCard } from '../subcomponents';

import styles from '@components/_storybook/styles.module.scss';

import panelStyles from '../NotificationPanel.module.scss';
import { INotificationPanelProps } from '../types';
import { argsTypes } from './argsTypes';

const WrapperDecorator = (Story: any) => {
  return (
    <Box
      alignItems="flex-start"
      justifyContent="center"
      st={{ minHeight: '300px', marginTop: '40px', borderRadius: '10px', overflow: 'visible' }}
      className={styles.wrapper}
    >
      <Story />
    </Box>
  );
};

export default {
  title: 'Components/NotificationPanel/Stories',
  component: NotificationPanel,
  decorators: [WrapperDecorator],
  argTypes: argsTypes
};

const defaultItems = [
  { label: 'Требуется сделать', count: 2, badgeColor: EBadgeColors.error, active: true },
  { label: 'Важно ознакомиться', count: 7, badgeColor: EBadgeColors.error },
  { label: 'Для информации', count: 150, badgeColor: EBadgeColors.brand }
];

export const DefaultNotificationPanel = (argTypes: INotificationPanelProps) => {
  return <NotificationPanel {...argTypes} items={defaultItems} onItemClick={(value) => console.log('Click:', value)} />;
};

DefaultNotificationPanel.storyName = 'NotificationPanel по умолчанию';

export const NotificationPanelNoActive = (argTypes: INotificationPanelProps) => {
  const items = [
    { label: 'Требуется сделать', count: 5, badgeColor: EBadgeColors.error },
    { label: 'Важно ознакомиться', count: 12, badgeColor: EBadgeColors.error },
    { label: 'Для информации', count: 3, badgeColor: EBadgeColors.brand }
  ];

  return <NotificationPanel {...argTypes} items={items} />;
};

NotificationPanelNoActive.storyName = 'Без активного элемента';

export const NotificationPanelEmpty = (argTypes: INotificationPanelProps) => {
  const items = [
    { label: 'Требуется сделать', count: 0 },
    { label: 'Важно ознакомиться', count: 0 },
    { label: 'Для информации', count: 0 }
  ];

  return <NotificationPanel {...argTypes} items={items} />;
};

NotificationPanelEmpty.storyName = 'Без уведомлений';

export const NotificationPanelWithHeader = () => {
  const [showPanel, setShowPanel] = React.useState(false);
  const notifButtonRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = document.querySelector('[data-testid="HEADER_NOTIFICATION"]');
    if (el) notifButtonRef.current = el.parentElement as HTMLElement;
  }, []);

  const items = [
    { label: 'Требуется сделать', count: 2, badgeColor: EBadgeColors.error, active: true },
    { label: 'Важно ознакомиться', count: 7, badgeColor: EBadgeColors.error },
    { label: 'Для информации', count: 99, badgeColor: EBadgeColors.brand }
  ];

  return (
    <Box st={{ position: 'relative', width: '100%' }}>
      <Header
        title="Заголовок страницы"
        showNotification
        notificationAmount={108}
        onNotificationClick={() => setShowPanel((prev) => !prev)}
      />
      {showPanel && (
        <ClickAwayListener
          onClickAway={() => setShowPanel(false)}
          excludeRef={notifButtonRef}
          className={panelStyles['dropdown-wrapper']}
        >
          <NotificationPanel items={items} onItemClick={(value) => console.log('Click:', value)} />
        </ClickAwayListener>
      )}
    </Box>
  );
};

NotificationPanelWithHeader.storyName = 'Использование с Header';

export const StandaloneNotificationItems = () => {
  return (
    <Box flexDirection="column" gap={4} maxWidth={270}>
      <NotificationItem label="Требуется сделать" count={2} active onClick={(v) => console.log(v)} />
      <NotificationItem label="Важно ознакомиться" count={7} onClick={(v) => console.log(v)} />
      <NotificationItem label="Для информации" count={150} badgeColor={EBadgeColors.brand} onClick={(v) => console.log(v)} />
      <NotificationItem label="Без уведомлений" count={0} />
    </Box>
  );
};

StandaloneNotificationItems.storyName = 'NotificationItem standalone';

const mockNotifications = [
  {
    id: '1',
    category: 'График отпусков',
    title: 'Планирование графика отпусков на следующий календарный год',
    body: 'Сервис «График отпусков» Добрый день, Иванов И.И. Петров П.П. делегировал вам согласование графика отпусков на 2027 по сотрудникам подразделения ДИТ. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание, что Вам необходимо завершить согласование графика отпусков до 01.12.2026.',
    timestamp: 'сегодня, 14:13',
    unread: true
  },
  {
    id: '2',
    category: 'График отпусков',
    title: 'Планирование графика отпусков на следующий год сотрудника',
    body: 'Сервис «График отпусков» Добрый день, Иванов И.И. Петров П.П. делегировал вам согласование графика отпусков на 2027 по сотрудникам подразделения ДИТ. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание, что Вам необходимо завершить согласование графика отпусков до 01.12.2026.',
    timestamp: 'сегодня, 14:13',
    unread: true
  }
];

const tabItems = [
  { label: 'Требуется сделать', count: 2, badgeColor: EBadgeColors.error },
  { label: 'Важно ознакомиться', count: 7, badgeColor: EBadgeColors.error },
  { label: 'Для информации', count: 99, badgeColor: EBadgeColors.brand }
];

export const NotificationPanelInDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState(0);
  const [unreadOnly, setUnreadOnly] = React.useState(true);
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  return (
    <Box st={{ position: 'relative', width: '100%' }}>
      <Header
        title="Заголовок страницы"
        showNotification
        notificationAmount={108}
        onNotificationClick={() => setIsOpen((prev) => !prev)}
      />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="820px">
        <Box flexDirection="column" gap={32} p="32px 48px" color="var(--steel-90)">
          <Typography variant="Heading2">Уведомления</Typography>

          <Box flexDirection="column" gap={24}>
            <Tabs>
              {tabItems.map((item, index) => (
                <Tabs.Tab
                  key={item.label}
                  label={item.label}
                  hasBadge
                  badgeChildren={item.count > 99 ? '99+' : item.count}
                  badgeColor={item.badgeColor}
                  active={activeTab === index}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </Tabs>

            <Box alignItems="center" justifyContent="flex-end" gap={8}>
              <Switch checked={unreadOnly} onChange={() => setUnreadOnly((prev) => !prev)} />
              <Typography variant="Body1-Medium">Только непрочитанные</Typography>
            </Box>
          </Box>

          {mockNotifications.map((group, groupIdx) => (
            <React.Fragment key={group.id}>
              <Box flexDirection="column" gap={24}>
                <Box flexDirection="column" gap={8} py={12}>
                  <Box>
                    <Badge color={EBadgeColors.brand} variant="solid" size="l">
                      {group.category}
                    </Badge>
                  </Box>
                  <Box alignItems="center" justifyContent="space-between">
                    <Box alignItems="center" gap={8}>
                      {group.unread && (
                        <Box
                          st={{
                            width: 8,
                            height: 8,
                            minWidth: 8,
                            borderRadius: '50%',
                            background: 'var(--brand-sapphire-50)'
                          }}
                        />
                      )}
                      <Typography variant="Subheading3-Medium" color="var(--brand-sapphire-50)">
                        {group.title}
                      </Typography>
                    </Box>
                    <Button type="button" size="xs" variant="secondary" color="brand">
                      Отметить все как прочитанные
                    </Button>
                  </Box>
                </Box>

                <NotificationCard
                  title={group.title}
                  body={group.body}
                  timestamp={group.timestamp}
                  unread={group.unread}
                  expanded={expandedId === group.id}
                  onExpand={() => setExpandedId(expandedId === group.id ? null : group.id)}
                />
              </Box>
              {groupIdx < mockNotifications.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

NotificationPanelInDrawer.storyName = 'Использование с Drawer';
