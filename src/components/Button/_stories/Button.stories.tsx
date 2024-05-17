import React from 'react';

import { Button } from '@components/Button';
import { IButtonProps } from '@components/Button/types';
import { IconArticleOutlined24 } from '@root/src/components';
import { StoryFn } from '@storybook/react';

import styles from './Button.module.scss';

import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{Story()}</div>;

export default {
  title: 'Components/Button/Stories',
  component: Button,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const ButtonDefault = (argTypes: IButtonProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {argTypes.iconButton ? (
        <Button {...argTypes} iconButton={<IconArticleOutlined24 />} />
      ) : (
        <Button
          {...argTypes}
          startIcon={argTypes.startIcon && <IconArticleOutlined24 />}
          endIcon={argTypes.endIcon && <IconArticleOutlined24 />}
        >
          Button
        </Button>
      )}
    </div>
  );
};
ButtonDefault.storyName = 'Кнопка по умолчанию';
