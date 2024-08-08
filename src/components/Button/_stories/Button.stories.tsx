import React from 'react';

import { Button } from '@components/Button';
import { IButtonProps } from '@components/Button/types';
import { Meta } from '@storybook/react';

import styles from './Button.module.scss';

import argsTypes from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{Story()}</div>;

export default {
  title: 'Components/Button/Stories',
  component: Button,
  decorators: [withPadding],
  argTypes: argsTypes
} as Meta<typeof Button>;

export const ButtonDefault = (argTypes: IButtonProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Button {...argTypes}>Button</Button>
    </div>
  );
};
ButtonDefault.storyName = 'Кнопка по умолчанию';
