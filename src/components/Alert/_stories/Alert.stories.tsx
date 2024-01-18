import React, { ReactNode } from 'react';

import { Alert } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { IAlert } from '../types';
import argsTypes from './argsTypes';
import { DEFAULT_ALERT } from './text';

export default {
  title: 'Components/Alert/Stories',
  component: Alert,
  argTypes: argsTypes
};

export const AlertDefault = (argTypes: IAlert): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Alert {...argTypes} />
    </div>
  );
};

AlertDefault.storyName = DEFAULT_ALERT;
AlertDefault.args = {
  title: DEFAULT_ALERT
};
