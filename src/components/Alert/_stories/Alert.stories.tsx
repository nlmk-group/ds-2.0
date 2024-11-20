import React, { ReactNode } from 'react';

import { Alert, Box, Button, Icon, Typography } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { IAlertProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => (
  <Box justifyContent="center" alignItems="center" className={styles.wrapper}>
    {<Story />}
  </Box>
);

export default {
  title: 'Components/Alert/Stories',
  component: Alert,
  decorators: [withWrapper],
  parameters: {
    actions: { argTypesRegex: '^(close|onActionClick)$' }
  },
  argTypes: {
    ...argsTypes
  }
};

interface IAlertStoryProps extends IAlertProps {
  showChildren?: boolean;
  showCloseButton?: boolean;
  showActionButton?: boolean;
  actionLabel?: string;
  onActionClick?: () => void;
}

export const AlertDefault = ({
  showChildren,
  showCloseButton = true,
  showActionButton = false,
  actionLabel,
  onActionClick,
  close,
  action,
  ...argTypes
}: IAlertStoryProps): ReactNode => {
  const actionElement = showActionButton ? (
    <Button variant="primary" size="s" onClick={onActionClick}>
      {actionLabel || 'Действие'}
    </Button>
  ) : undefined;

  const closeHandler = showCloseButton ? close : undefined;

  return (
    <Alert {...argTypes} close={closeHandler} action={actionElement}>
      {showChildren && (
        <ul style={{ paddingLeft: '16px', paddingBottom: '4px', margin: 'unset' }}>
          <li>Первый пункт списка</li>
          <li>Второй пункт списка</li>
          <li>Третий пункт списка</li>
        </ul>
      )}
    </Alert>
  );
};
AlertDefault.storyName = 'Alert по умолчанию';
AlertDefault.args = {
  title: 'Alert по умолчанию',
  showChildren: false,
  showCloseButton: true,
  showActionButton: false,
  actionLabel: 'Действие'
};
AlertDefault.argTypes = {
  showChildren: {
    description: 'Показать дополнительный контент в виде списка',
    control: { type: 'boolean' }
  },
  showCloseButton: {
    description: 'Показать кнопку закрытия',
    control: { type: 'boolean' }
  },
  showActionButton: {
    description: 'Показать кнопку действия',
    control: { type: 'boolean' }
  },
  actionLabel: {
    description: 'Текст кнопки действия',
    control: { type: 'text' }
  },
  onActionClick: {
    description: 'Функция для обработки нажатия на кнопку действия',
    action: 'actionClick',
    control: { type: null }
  }
};

export const AlertVariants = ({
  close,
  showCloseButton = true,
  ...argTypes
}: IAlertProps & { showCloseButton?: boolean }): ReactNode => {
  const closeHandler = showCloseButton ? close : undefined;

  return (
    <Box display="flex" flexDirection="column" gap={16} width="100%">
      <Alert severity="success" title="Успешное действие" close={closeHandler}>
        Операция успешно выполнена
      </Alert>

      <Alert severity="error" title="Ошибка" close={closeHandler}>
        Произошла ошибка при выполнении операции
      </Alert>

      <Alert severity="warning" title="Предупреждение" close={closeHandler}>
        Внимание! Это важное предупреждение
      </Alert>

      <Alert severity="info" title="Информация" close={closeHandler}>
        Дополнительная информация о процессе
      </Alert>
    </Box>
  );
};
AlertVariants.storyName = 'Варианты Alert';
AlertVariants.parameters = {
  controls: { exclude: ['title', 'severity', 'className', 'action'] }
};
AlertVariants.args = {
  showCloseButton: true
};
AlertVariants.argTypes = {
  showCloseButton: {
    description: 'Показать кнопку закрытия',
    control: { type: 'boolean' }
  },
  close: {
    action: 'close',
    control: { type: null }
  }
};

export const AlertWithActions = ({
  close,
  onActionClick,
  actionLabel,
  showCloseButton = true,
  showActionButton = true,
  ...argTypes
}: IAlertProps & {
  onActionClick?: () => void;
  actionLabel?: string;
  showCloseButton?: boolean;
  showActionButton?: boolean;
}): ReactNode => {
  const actionElement = showActionButton ? (
    <Button variant="primary" size="s" onClick={onActionClick}>
      {actionLabel || 'Действие'}
    </Button>
  ) : undefined;

  const closeHandler = showCloseButton ? close : undefined;

  return (
    <Box display="flex" flexDirection="column" gap={16} width="100%">
      <Alert severity="success" title="С кнопкой действия" action={actionElement} close={closeHandler}>
        Alert с дополнительным действием
      </Alert>

      <Alert severity="info" title="Только кнопка закрытия" close={closeHandler} />

      <Alert severity="warning" title="Без кнопок">
        Alert без кнопок действий
      </Alert>
    </Box>
  );
};
AlertWithActions.storyName = 'Alert с действиями';
AlertWithActions.parameters = {
  controls: { exclude: ['title', 'severity', 'className', 'action'] }
};
AlertWithActions.args = {
  showCloseButton: true,
  showActionButton: true,
  actionLabel: 'Действие'
};
AlertWithActions.argTypes = {
  close: {
    action: 'close',
    control: { type: null }
  },
  onActionClick: {
    action: 'actionClick',
    control: { type: null }
  },
  actionLabel: {
    description: 'Текст кнопки действия',
    control: { type: 'text' }
  },
  showCloseButton: {
    description: 'Показать кнопку закрытия',
    control: { type: 'boolean' }
  },
  showActionButton: {
    description: 'Показать кнопку действия',
    control: { type: 'boolean' }
  }
};

export const AlertWithCustomContent = ({
  close,
  showCloseButton = true,
  ...argTypes
}: IAlertProps & { showCloseButton?: boolean }): ReactNode => {
  const closeHandler = showCloseButton ? close : undefined;

  return (
    <Box display="flex" flexDirection="column" gap={16} width="100%">
      <Alert severity="info" title="Alert со списком" close={closeHandler}>
        <ul style={{ margin: 0, paddingLeft: '16px', paddingBottom: '4px' }}>
          <li>Первый пункт</li>
          <li>Второй пункт</li>
          <li>Третий пункт</li>
        </ul>
      </Alert>

      <Alert severity="success" title="Alert с кастомной разметкой" close={closeHandler}>
        <Box display="flex" alignItems="center" gap={8}>
          <Icon name="IconSuccessOutlined24" />
          <Typography variant="Body2">Кастомный контент</Typography>
        </Box>
      </Alert>
    </Box>
  );
};
AlertWithCustomContent.storyName = 'Alert с кастомным контентом';
AlertWithCustomContent.parameters = {
  controls: { exclude: ['title', 'severity', 'className', 'action'] }
};
AlertWithCustomContent.args = {
  showCloseButton: true
};
AlertWithCustomContent.argTypes = {
  close: {
    action: 'close',
    control: { type: null }
  },
  showCloseButton: {
    description: 'Показать кнопку закрытия',
    control: { type: 'boolean' }
  }
};
