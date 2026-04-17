import React from 'react';

import { Box, NotificationCard } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { INotificationCardProps } from '../types';
import { argsTypes } from './argsTypes';

const WrapperDecorator = (Story: any) => {
  return (
    <Box
      alignItems="flex-start"
      justifyContent="center"
      st={{ minHeight: '300px', marginTop: '40px', borderRadius: '10px', padding: '24px' }}
      className={styles.wrapper}
    >
      <Story />
    </Box>
  );
};

export default {
  title: 'Components/NotificationCard/Stories',
  component: NotificationCard,
  decorators: [WrapperDecorator],
  argTypes: argsTypes
};

const longBody =
  'Сервис «График отпусков». Добрый день, Иван Петрович. Мария Смирнова делегировала вам согласование графика отпусков на 2026 год по сотрудникам отдела маркетинга. Подробная информация доступна по ссылке. Обратите, пожалуйста, внимание на сроки согласования — до 30 апреля.';

export const DefaultNotificationCard = (argTypes: INotificationCardProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(argTypes.expanded ?? false);

  React.useEffect(() => {
    setExpanded(argTypes.expanded ?? false);
  }, [argTypes.expanded]);

  return (
    <Box st={{ maxWidth: 772, width: '100%' }}>
      <NotificationCard
        title={argTypes.title}
        body={argTypes.body}
        timestamp={argTypes.timestamp}
        unread={argTypes.unread}
        showMoreLabel={argTypes.showMoreLabel}
        hideLabel={argTypes.hideLabel}
        expanded={expanded}
        onExpandedChange={setExpanded}
      />
    </Box>
  );
};

DefaultNotificationCard.storyName = 'NotificationCard по умолчанию';
DefaultNotificationCard.args = {
  title: 'Планирование графика отпусков на следующий год',
  body: longBody,
  timestamp: 'сегодня, 14:13',
  unread: true,
  expanded: false
};

export const NotificationCardShort = () => {
  return (
    <Box st={{ maxWidth: 772, width: '100%' }}>
      <NotificationCard
        title="Заявка на отпуск одобрена"
        body="Руководитель согласовал ваш отпуск с 12 по 25 мая."
        timestamp="сегодня, 14:13"
      />
    </Box>
  );
};

NotificationCardShort.storyName = 'Короткий текст';
NotificationCardShort.parameters = { controls: { disable: true } };

export const NotificationCardExpanded = () => {
  return (
    <Box st={{ maxWidth: 772, width: '100%' }}>
      <NotificationCard
        title="Новый корпоративный курс доступен для записи"
        body={longBody}
        timestamp="сегодня, 14:13"
        unread
        defaultExpanded
      />
    </Box>
  );
};

NotificationCardExpanded.storyName = 'NotificationCard развёрнутый контент';
NotificationCardExpanded.parameters = { controls: { disable: true } };

export const NotificationCardRead = () => {
  return (
    <Box st={{ maxWidth: 772, width: '100%' }}>
      <NotificationCard
        title="Справка 2-НДФЛ за 2025 год готова"
        body={longBody}
        timestamp="вчера, 10:00"
      />
    </Box>
  );
};

NotificationCardRead.storyName = 'NotificationCard прочитанное уведомление';
NotificationCardRead.parameters = { controls: { disable: true } };
