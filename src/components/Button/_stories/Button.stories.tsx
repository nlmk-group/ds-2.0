import React from 'react';

import { IconStarOutlined16, IconStarOutlined24, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import styles from './Button.module.scss';

import { EButtonColor, EButtonSize, EButtonVariant } from '../enums';
import { Button } from '../index';
import { IButtonProps } from '../types';
import argsTypes from './argsTypes';

export default {
  title: 'Components/Button/Stories',
  component: Button,
  argTypes: argsTypes
};

export const ButtonDefault = (args: IButtonProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Button {...args}>{args.children}</Button>
    </div>
  );
};
ButtonDefault.storyName = 'Button по умолчанию';
ButtonDefault.args = {
  children: 'Button'
};

const sizeToIcon = {
  [EButtonSize.m]: <IconStarOutlined24 />,
  [EButtonSize.s]: <IconStarOutlined24 />,
  [EButtonSize.xs]: <IconStarOutlined16 />
};

export const IconButtons = () => {
  return (
    <div className={clsx(styles.container, styles['container--grid'])}>
      {Object.values(EButtonColor).map(color => (
        <div key={color} className={styles.section}>
          <Typography variant={ETypographyVariants.Heading3} color="var(--steel-90)">
            {color}
          </Typography>
          {Object.values(EButtonVariant).map(variant => (
            <div key={`${color}-${variant}`} className={styles.row}>
              <Typography variant={ETypographyVariants.Body1} color="var(--steel-90)">
                {variant}
              </Typography>
              {Object.values(EButtonSize).map(size => (
                <Button
                  key={`${color}-${variant}-${size}`}
                  color={color}
                  variant={variant}
                  size={size}
                  iconButton={sizeToIcon[size]}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
IconButtons.storyName = 'Кнопки-иконки';
IconButtons.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const ButtonsWithElements = () => {
  return (
    <div className={styles.container}>
      {Object.values(EButtonColor).map(color => (
        <div key={color} className={styles.section}>
          <Typography variant={ETypographyVariants.Heading3} color="var(--steel-90)">
            {color}
          </Typography>
          {Object.values(EButtonVariant).map(variant => (
            <div key={`${color}-${variant}`} className={styles.section}>
              <Typography variant={ETypographyVariants.Heading4} color="var(--steel-90)">
                {variant}
              </Typography>
              {Object.values(EButtonSize).map(size => (
                <div key={`${color}-${variant}-${size}`} className={styles.row}>
                  <Typography variant={ETypographyVariants.Body1} color="var(--steel-90)">
                    {size}
                  </Typography>
                  <Button
                    color={color}
                    variant={variant}
                    size={size}
                    startIcon={sizeToIcon[size]}
                    endIcon={sizeToIcon[size]}
                  >
                    With Icons
                  </Button>
                  <Button color={color} variant={variant} size={size} startBadge="1" endBadge="2">
                    With Badges
                  </Button>
                  <Button
                    color={color}
                    variant={variant}
                    size={size}
                    startIcon={sizeToIcon[size]}
                    endIcon={sizeToIcon[size]}
                    startBadge="1"
                    endBadge="2"
                  >
                    All Elements
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
ButtonsWithElements.storyName = 'Button с элементами';
ButtonsWithElements.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
