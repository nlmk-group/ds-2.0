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
  'Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание на сроки согласования.';
const body2 =
  'Открыта запись на курс «Эффективное общение в команде». Обучение состоится онлайн 20 апреля с 10:00 до 17:00. Количество мест ограничено — успейте записаться до 18 апреля.';
const body3 =
  'Бухгалтерия сформировала справку 2-НДФЛ за 2025 год. Документ доступен для скачивания в личном кабинете. Электронная подпись действительна в течение 30 дней.';
const body4 =
  'Ваша заявка на удалённую работу 15 апреля одобрена руководителем. Не забудьте заранее подготовить доступ к корпоративным сервисам через VPN.';

const cards = [
  <NotificationCard
    key="1"
    title="Планирование графика отпусков на следующий год"
    body={body1}
    timestamp="сегодня, 14:13"
    unread
  />,
  <NotificationCard
    key="2"
    title="Новый корпоративный курс доступен для записи"
    body={body2}
    timestamp="сегодня, 12:00"
    unread
  />,
  <NotificationCard key="3" title="Справка 2-НДФЛ за 2025 год готова" body={body3} timestamp="вчера, 18:30" />
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
          title="Заявка на удалённую работу одобрена"
          body={body4}
          timestamp="сегодня, 14:13"
          unread
        />
        <NotificationCard
          title="Подтвердите участие в тренинге"
          body="Требуется подтверждение участия в тренинге по тайм-менеджменту 22 апреля."
          timestamp="сегодня, 12:00"
        />
      </NotificationGroup>
    </Box>
  );
};

NotificationGroupTwo.storyName = 'NotificationGroup из 2 карточек';
NotificationGroupTwo.parameters = { controls: { disable: true } };

const vacationBody =
  'Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание на сроки согласования — до 30 апреля.';

const mockNotificationGroups = [
  {
    id: '1',
    category: 'График отпусков',
    title: 'Планирование графика отпусков на следующий год',
    unread: true,
    cards: [
      {
        title: 'Планирование графика отпусков на следующий календарный год',
        body: vacationBody,
        timestamp: 'сегодня, 14:13',
        unread: true
      },
      {
        title: 'Напоминание о согласовании графика',
        body: 'Напоминаем, что до окончания срока согласования графика отпусков на 2026 год осталось 5 рабочих дней. Пожалуйста, не забудьте подтвердить даты.',
        timestamp: 'вчера, 10:00',
        unread: true
      },
      {
        title: 'Обновление регламента согласования',
        body: 'Обновлён регламент согласования графика отпусков: теперь подтверждение возможно в том числе из мобильного приложения.',
        timestamp: '14 апреля, 18:30'
      }
    ]
  },
  {
    id: '2',
    category: 'График отпусков',
    title: 'Планирование графика отпусков на следующий год сотрудника',
    unread: true,
    cards: [
      {
        title: 'Планирование графика отпусков на следующий календарный год',
        body: vacationBody,
        timestamp: 'сегодня, 14:13',
        unread: true
      },
      {
        title: 'Запрос на перенос дат отпуска',
        body: 'Сотрудник Соколов А.В. запросил перенос отпуска с июля на сентябрь. Пожалуйста, согласуйте или отклоните запрос в сервисе.',
        timestamp: 'сегодня, 11:42',
        unread: true
      }
    ]
  }
];

const tabItems = [
  { label: 'Требуется сделать', count: 2, badgeColor: EBadgeColors.error },
  { label: 'Важно ознакомиться', count: 7, badgeColor: EBadgeColors.error },
  { label: 'Для информации', count: 115, badgeColor: EBadgeColors.brand }
];

export const NotificationGroupInDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState(0);
  const [unreadOnly, setUnreadOnly] = React.useState(true);

  return (
    <Box st={{ position: 'relative', width: '100%' }}>
      <Header
        title="Портал сотрудника"
        showNotification
        notificationAmount={115}
        onNotificationClick={() => setIsOpen((prev) => !prev)}
      />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="820px">
        <Box flexDirection="column" gap={32} st={{ padding: '32px 32px 48px' }} color="var(--steel-90)">
          <Typography variant="Heading2">Уведомления</Typography>

          <Box flexDirection="column" gap={16}>
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

          <Box flexDirection="column" gap={32}>
            {mockNotificationGroups.map((group) => (
              <Box key={group.id} flexDirection="column" gap={16}>
                <Box flexDirection="column" gap={8} py={12}>
                  <Box>
                    <Badge color={EBadgeColors.brand} variant="solid" size="l">
                      {group.category}
                    </Badge>
                  </Box>
                  <Box alignItems="center" justifyContent="space-between">
                    <Box alignItems="center">
                      <Typography variant="Subheading3-Medium" color="var(--brand-sapphire-50)">
                        {group.title}
                      </Typography>
                    </Box>
                    <Button type="button" size="xs" variant="primary" color="ghost">
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
