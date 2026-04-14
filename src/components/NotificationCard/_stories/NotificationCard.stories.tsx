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
  'Сервис «Контроль качества» сообщает об отклонении содержания углерода в плавке №4512 на конвертере К-3. Фактическое значение 0,42% при нормативе 0,35–0,40%. Технологу ЛПЦ-2 требуется принять решение о корректировке режима продувки и подтвердить возможность дальнейшего передела металла до окончания смены.';

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
  title: 'Отклонение химсостава плавки №4512',
  body: longBody,
  timestamp: 'сегодня, 14:13',
  unread: true,
  expanded: false
};

export const NotificationCardShort = () => {
  return (
    <Box st={{ maxWidth: 772, width: '100%' }}>
      <NotificationCard
        title="Конвертер К-3 выведен на рабочий режим"
        body="Плавка принята ОТК."
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
        title="Плановый ремонт прокатного стана 2000"
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
        title="Обновление технологической инструкции ТИ-ЛПЦ-15"
        body={longBody}
        timestamp="вчера, 10:00"
      />
    </Box>
  );
};

NotificationCardRead.storyName = 'NotificationCard прочитанное уведомление';
NotificationCardRead.parameters = { controls: { disable: true } };
