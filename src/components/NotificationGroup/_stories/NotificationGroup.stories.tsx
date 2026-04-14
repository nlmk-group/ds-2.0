import React from 'react';

import { EBadgeColors } from '@components/Badge/enums';
import {
  Badge,
  Box,
  Button,
  Drawer,
  Header,
  NotificationCard,
  NotificationGroup,
  Switch,
  Tabs,
  Typography
} from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { INotificationGroupProps } from '../types';
import { argsTypes } from './argsTypes';

const WrapperDecorator = (Story: any) => {
  return (
    <Box
      alignItems="flex-start"
      justifyContent="center"
      st={{ minHeight: '400px', marginTop: '40px', borderRadius: '10px', padding: '24px' }}
      className={styles.wrapper}
    >
      <Story />
    </Box>
  );
};

export default {
  title: 'Components/NotificationGroup/Stories',
  component: NotificationGroup,
  decorators: [WrapperDecorator],
  argTypes: argsTypes
};

const body1 =
  'Сервис «Контроль качества» сообщает об отклонении содержания углерода в плавке №4512 на конвертере К-3. Фактическое значение 0,42% при нормативе 0,35–0,40%. Технологу ЛПЦ-2 требуется принять решение о корректировке режима продувки и подтвердить возможность дальнейшего передела металла.';
const body2 =
  'Сервис «Производственный план» уведомляет о плановой остановке стана горячей прокатки 2000 с 18.04.2026 на 72 часа для замены опорных валков. Объём выпуска на период ремонта перераспределён на ЛПЦ-2.';
const body3 =
  'Технологический регламент для стали S355J2 обновлён. Изменены требования к ударной вязкости при −40°C и микроструктуре после термической обработки. Ознакомьтесь с новой редакцией и подтвердите.';
const body4 =
  'Датчики доменной печи №6 зафиксировали превышение температуры футеровки на горизонте +9,2 м. Сработала предупредительная сигнализация. Требуется внеплановый осмотр бригадой ремонтной службы.';

const cards = [
  <NotificationCard
    key="1"
    title="Отклонение химсостава плавки №4512"
    body={body1}
    timestamp="сегодня, 14:13"
    unread
  />,
  <NotificationCard
    key="2"
    title="Плановый ремонт прокатного стана 2000"
    body={body2}
    timestamp="сегодня, 12:00"
    unread
  />,
  <NotificationCard key="3" title="Обновление регламента стали S355J2" body={body3} timestamp="вчера, 18:30" />
];

export const DefaultNotificationGroup = (argTypes: INotificationGroupProps) => {
  const [open, setOpen] = React.useState<boolean>(argTypes.open ?? false);

  React.useEffect(() => {
    setOpen(argTypes.open ?? false);
  }, [argTypes.open]);

  return (
    <Box st={{ maxWidth: 772, width: '100%' }}>
      <NotificationGroup open={open} onOpenChange={setOpen}>
        {cards}
      </NotificationGroup>
    </Box>
  );
};

DefaultNotificationGroup.storyName = 'NotificationGroup по умолчанию';
DefaultNotificationGroup.args = {
  open: false
};

export const NotificationGroupOpen = () => {
  return (
    <Box st={{ maxWidth: 772, width: '100%' }}>
      <NotificationGroup defaultOpen>{cards}</NotificationGroup>
    </Box>
  );
};

NotificationGroupOpen.storyName = 'NotificationGroup раскрытый по умолчанию';
NotificationGroupOpen.parameters = { controls: { disable: true } };

export const NotificationGroupTwo = () => {
  return (
    <Box st={{ maxWidth: 772, width: '100%' }}>
      <NotificationGroup>
        <NotificationCard
          title="Превышение температуры кладки"
          body={body4}
          timestamp="сегодня, 14:13"
          unread
        />
        <NotificationCard
          title="Смена опорных валков"
          body="Требуется согласование времени остановки стана."
          timestamp="сегодня, 12:00"
        />
      </NotificationGroup>
    </Box>
  );
};

NotificationGroupTwo.storyName = 'NotificationGroup из 2 карточек';
NotificationGroupTwo.parameters = { controls: { disable: true } };

const mockNotificationGroups = [
  {
    id: '1',
    category: 'Контроль качества',
    title: 'Отклонения по плавкам и прокату требуют внимания технолога',
    unread: true,
    cards: [
      {
        title: 'Отклонение химсостава плавки №4512',
        body: body1,
        timestamp: 'сегодня, 14:13',
        unread: true
      },
      {
        title: 'Несоответствие толщины листа в партии П-8897',
        body: 'Контролёр ОТК ЛПЦ-2 зафиксировал отклонение толщины листа в партии П-8897 на ±0,3 мм от допуска. Требуется решение по переделу или отгрузке как некондиции.',
        timestamp: 'сегодня, 12:00',
        unread: true
      },
      {
        title: 'Обновление регламента стали S355J2',
        body: body3,
        timestamp: 'вчера, 18:30',
        unread: false
      }
    ]
  },
  {
    id: '2',
    category: 'Технологические процессы',
    title: 'Плановые ремонты и сервисные работы',
    unread: true,
    cards: [
      {
        title: 'Плановый ремонт прокатного стана 2000',
        body: body2,
        timestamp: 'сегодня, 11:45',
        unread: true
      },
      {
        title: 'Утверждение графика ППР на май 2026',
        body: 'Главный механик направил на согласование график планово-предупредительных ремонтов по всем цехам на май 2026. Требуется согласование до 25.04.2026.',
        timestamp: 'вчера, 16:20',
        unread: true
      }
    ]
  }
];

const tabItems = [
  { label: 'Контроль качества', count: 4, badgeColor: EBadgeColors.error },
  { label: 'Технологические процессы', count: 12, badgeColor: EBadgeColors.error },
  { label: 'Производственные задания', count: 99, badgeColor: EBadgeColors.brand }
];

export const NotificationGroupInDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState(0);
  const [unreadOnly, setUnreadOnly] = React.useState(true);

  return (
    <Box st={{ position: 'relative', width: '100%' }}>
      <Header
        title="АСУ НЛМК"
        showNotification
        notificationAmount={115}
        onNotificationClick={() => setIsOpen((prev) => !prev)}
      />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="820px">
        <Box flexDirection="column" gap={32} st={{ padding: '32px 32px 48px' }} color="var(--steel-90)">
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

          <Box flexDirection="column" gap={32} st={{ padding: '0 16px 16px' }}>
            {mockNotificationGroups.map((group) => (
              <Box key={group.id} flexDirection="column" gap={16}>
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
                            background: 'var(--spectrum-red-40)'
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
                <NotificationGroup>
                  {group.cards.map((card, idx) => (
                    <NotificationCard
                      key={idx}
                      title={card.title}
                      body={card.body}
                      timestamp={card.timestamp}
                      unread={card.unread}
                    />
                  ))}
                </NotificationGroup>
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

NotificationGroupInDrawer.storyName = 'NotificationGroup в Drawer';
NotificationGroupInDrawer.parameters = { controls: { disable: true } };
