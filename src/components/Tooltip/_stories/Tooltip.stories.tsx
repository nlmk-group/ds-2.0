import React from 'react';

import { Button, IconDoneCheckOutlined24, Tooltip } from '@components/index';
import Typography from '@components/Typography';
import { Args } from '@storybook/react';
import clsx from 'clsx';

import styles from './Tooltip.stories.module.scss';

import { argsTypes } from './argsTypes';

export default {
  title: 'Components/Tooltip/Stories',
  component: Tooltip,
  argTypes: argsTypes
};

export const TooltipDefault = (argsTypes: Args): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tooltip description='Тултип по умолчанию' {...argsTypes}>
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>
  );
};
TooltipDefault.storyName = 'Тултип по умолчанию';

export const TooltipWithDescription = (argsTypes: Args): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента" {...argsTypes}>
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>
  );
};
TooltipWithDescription.storyName = 'Тултип с текстом';

export const TooltipWrappedDisabled = (argsTypes: Args): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента" {...argsTypes}>
        <span>
          <Button variant="secondary" disabled>
            Наведи на меня курсор!
          </Button>
        </span>
      </Tooltip>
    </div>
  );
};
TooltipWrappedDisabled.storyName = 'Тултип обернутый вокруг disabled элемента';

export const TooltipWithFull = (argsTypes: Args): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, styles['wrapper-height'])}>
      <Tooltip
        title="Заголовок текста подсказки"
        description="Сюда вы можете добавить текст/подсказу для компонента"
        list={['Здесь, вы можете', 'добавить нужную вам', 'информацию по пунктам']}
        {...argsTypes}
      >
        <Button variant="secondary">Наведи на меня курсор!</Button>
      </Tooltip>
    </div>
  );
};
TooltipWithFull.storyName = 'Тултип с заголовком, текстом и списком';

export const TooltipPlacements = (argsTypes: Args): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.placements}>
        <div className={styles['tooltip-top']}>
          <Tooltip placement="top" description="Tooltip on top" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет сверху!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom']}>
          <Tooltip placement="bottom" description="Tooltip on bottom" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет снизу!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left']}>
          <Tooltip placement="left" description="Tooltip on left" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет слева!</Button>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right']}>
          <Tooltip placement="right" description="Tooltip on right" {...argsTypes}>
            <Button variant="secondary">Наведи, тултип будет справа!</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
TooltipPlacements.storyName = 'Варианты расположения тултипа';

export const TooltipBehaviors = (argsTypes: Args): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.behaviors}>
        <Tooltip placement="top" behavior="hover" description="Tooltip on hover" {...argsTypes}>
          <Button variant="secondary">Тултип появится при наведении!</Button>
        </Tooltip>
        <Tooltip placement="top" behavior="click" description="Tooltip on click" {...argsTypes}>
          <Button variant="secondary">Тултип появится при клике!</Button>
        </Tooltip>
        <Tooltip placement="top" behavior="focus" description="Tooltip on focus" {...argsTypes}>
          <Button variant="secondary">Тултип появится при фокусе!</Button>
        </Tooltip>
      </div>
    </div>
  );
};
TooltipBehaviors.storyName = 'Варианты поведения тултипа';

export const TooltipWithCustom = (argsTypes: Args): JSX.Element => {
  const renderCustom = () => {
    const customMap = ['Первый пункт', 'Второй пункт', 'Третий пункт'];
    return (
      <div className={styles.custom}>
        {customMap.map((item, index) => (
          <div key={`${item}-${index}`} className={styles['custom-item']}>
            <IconDoneCheckOutlined24 color="success" />
            <Typography variant="Caption-Medium">{item}</Typography>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={clsx(styles.wrapper, styles['wrapper-height'])}>
      <Tooltip
        behavior="click"
        title="Заголовок тултипа с кастомным элементом"
        description="за добавление кастомного элемента отвечает prop - render"
        list={['Внутри вы можете добавить', 'Нужную вам разметку']}
        render={renderCustom()}
        {...argsTypes}
      >
        <Button variant="secondary">Нажми на меня для появления тултипа!</Button>
      </Tooltip>
    </div>
  );
};
TooltipWithCustom.storyName = 'Тултип с кастомным элементом внутри';
