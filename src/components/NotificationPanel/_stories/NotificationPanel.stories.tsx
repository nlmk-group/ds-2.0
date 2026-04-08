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
    <div style={{ position: 'relative', width: '100%' }}>
      <Header
        title="Заголовок страницы"
        showNotification
        notificationAmount={108}
        onNotificationClick={() => setShowPanel((prev) => !prev)}
      />
      {showPanel && (
        <ClickAwayListener onClickAway={() => setShowPanel(false)} excludeRef={notifButtonRef}>
          <div style={{ position: 'absolute', top: '60px', right: '24px', zIndex: 100 }}>
            <NotificationPanel items={items} onItemClick={(value) => console.log('Click:', value)} />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

NotificationPanelWithHeader.storyName = 'Использование с Header';

export const StandaloneNotificationItems = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '270px' }}>
      <NotificationItem label="Требуется сделать" count={2} active onClick={(v) => console.log(v)} />
      <NotificationItem label="Важно ознакомиться" count={7} onClick={(v) => console.log(v)} />
      <NotificationItem label="Для информации" count={150} badgeColor={EBadgeColors.brand} onClick={(v) => console.log(v)} />
      <NotificationItem label="Без уведомлений" count={0} />
    </div>
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
  const notifButtonRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = document.querySelector('[data-testid="HEADER_NOTIFICATION"]');
    if (el) notifButtonRef.current = el.parentElement as HTMLElement;
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '600px' }}>
      <Header
        title="Заголовок страницы"
        showNotification
        notificationAmount={108}
        onNotificationClick={() => setIsOpen((prev) => !prev)}
      />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="820px">
        <div style={{ padding: '32px 48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <Typography variant="Heading2">Уведомления</Typography>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Switch checked={unreadOnly} onChange={() => setUnreadOnly((prev) => !prev)} />
                <Typography variant="Body1-Medium">Только непрочитанные</Typography>
              </div>
            </div>
          </div>

          {mockNotifications.map((group, groupIdx) => (
            <React.Fragment key={group.id}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px 0' }}>
                  <Badge color={EBadgeColors.brand} variant="solid" size="l">
                    {group.category}
                  </Badge>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {group.unread && (
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: 'var(--brand-sapphire-50)'
                          }}
                        />
                      )}
                      <Typography variant="Subheading3-Medium" style={{ color: 'var(--brand-sapphire-50)' }}>
                        {group.title}
                      </Typography>
                    </div>
                    <Button type="button" size="xs" variant="secondary" color="brand">
                      Отметить все как прочитанные
                    </Button>
                  </div>
                </div>

                <NotificationCard
                  title={group.title}
                  body={group.body}
                  timestamp={group.timestamp}
                  unread={group.unread}
                  expanded={expandedId === group.id}
                  onExpand={() => setExpandedId(expandedId === group.id ? null : group.id)}
                />
              </div>
              {groupIdx < mockNotifications.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

NotificationPanelInDrawer.storyName = 'Расширенный режим (Drawer)';
