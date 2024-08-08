import React, { ReactNode } from 'react';

import { Alert, Box } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { IAlertProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => (
  <Box justifyContent="center" alignItems="center" className={styles.wrapper}>
    {Story()}
  </Box>
);

export default {
  title: 'Components/Alert/Stories',
  component: Alert,
  decorators: [withWrapper],
  argTypes: {
    ...argsTypes,
    showChildren: {
      description: 'Показать дополнительный контент в виде списка',
      control: { type: 'boolean' }
    }
  }
};

interface IAlertStoryProps extends IAlertProps {
  showChildren?: boolean;
}

export const AlertDefault = ({ showChildren, ...argTypes }: IAlertStoryProps): ReactNode => {
  return (
    <Alert {...argTypes}>
      {showChildren && (
        <ul style={{ paddingLeft: '16px', margin: 'unset' }}>
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
  showChildren: false
};
