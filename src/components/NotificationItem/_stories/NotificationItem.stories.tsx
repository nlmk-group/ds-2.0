import React from 'react';

import { EBadgeColors } from '@components/Badge/enums';
import { Box, Header, NotificationItem, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';

import styles from '@components/_storybook/styles.module.scss';

import { INotificationItemProps } from '../types';
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
  title: 'Components/NotificationItem/Stories',
  component: NotificationItem,
  decorators: [WrapperDecorator],
  argTypes: argsTypes
};

export const DefaultNotificationItem = (argTypes: INotificationItemProps) => {
  return (
    <Box flexDirection="column" gap={4} maxWidth={270}>
      <NotificationItem {...argTypes} />
    </Box>
  );
};

DefaultNotificationItem.storyName = 'NotificationItem по умолчанию';
DefaultNotificationItem.args = {
  label: 'Контроль качества',
  count: 4,
  badgeColor: EBadgeColors.error,
  active: true
};

export const NotificationItemEmpty = () => {
  return (
    <Box flexDirection="column" gap={4} maxWidth={270}>
      <NotificationItem label="Конвертерное производство" count={0} />
      <NotificationItem label="Доменное производство" count={0} />
      <NotificationItem label="Прокатное производство" count={0} />
    </Box>
  );
};

NotificationItemEmpty.storyName = 'NotificationItem без уведомлений';
NotificationItemEmpty.parameters = { controls: { disable: true } };

export const NotificationItemWithHeader = () => {
  const [showPanel, setShowPanel] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const bell = document.querySelector('[data-testid="HEADER_NOTIFICATION"]') as HTMLElement | null;
    const amount = document.querySelector('[data-testid="HEADER_NOTIFICATION_AMOUNT"]') as HTMLElement | null;
    if (!bell) return;

    const prevBellCursor = bell.style.cursor;
    const prevAmountPointer = amount?.style.pointerEvents ?? '';
    bell.style.cursor = 'pointer';
    if (amount) {
      amount.style.pointerEvents = 'none';
    }

    const pointInRect = (x: number, y: number, rect?: DOMRect) =>
      !!rect && x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

    const handleMove = (e: MouseEvent) => {
      const bellRect = bell.getBoundingClientRect();
      const amountRect = amount?.getBoundingClientRect();
      const panelRect = panelRef.current?.getBoundingClientRect();

      const inside =
        pointInRect(e.clientX, e.clientY, bellRect) ||
        pointInRect(e.clientX, e.clientY, amountRect) ||
        pointInRect(e.clientX, e.clientY, panelRect);

      if (inside) {
        if (closeTimer.current) {
          clearTimeout(closeTimer.current);
          closeTimer.current = null;
        }
        setShowPanel(true);
      } else if (!closeTimer.current) {
        closeTimer.current = setTimeout(() => {
          setShowPanel(false);
          closeTimer.current = null;
        }, 200);
      }
    };

    document.addEventListener('mousemove', handleMove);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      bell.style.cursor = prevBellCursor;
      if (amount) amount.style.pointerEvents = prevAmountPointer;
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const items = [
    { label: 'Контроль качества', count: 4, badgeColor: EBadgeColors.error },
    { label: 'Технологические процессы', count: 12, badgeColor: EBadgeColors.error },
    { label: 'Производственные задания', count: 999, badgeColor: EBadgeColors.brand }
  ];

  return (
    <Box st={{ position: 'relative', width: '100%' }}>
      <Header title="АСУ НЛМК" showNotification notificationAmount={115} />
      {showPanel && (
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
              <Typography variant={ETypographyVariants.Heading4}>Уведомления</Typography>
            </Box>
            {items.map((item, idx) => (
              <NotificationItem
                key={item.label}
                label={item.label}
                count={item.count}
                badgeColor={item.badgeColor}
                onClick={(value: string) => console.log('Click:', value, idx)}
              />
            ))}
          </Box>
        </div>
      )}
    </Box>
  );
};

NotificationItemWithHeader.storyName = 'Сборка панели с Header';
NotificationItemWithHeader.parameters = { controls: { disable: true } };
