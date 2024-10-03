import React, { ReactNode } from 'react';

import { Button, Divider, Icon, Link, Typography } from '@components/index';
import { clsx } from 'clsx';

import style from './Divider.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { EDividerOrientation, EDividerType } from '../enums';
import { IDividerProps } from '../types';
import argsTypes from './argsTypes';
import {
  DASHED_DIVIDER,
  DEFAULT_DIVIDER,
  DIVIDER_CUSTOM_CLASSNAME,
  DIVIDER_ORIENTATION,
  DIVIDER_ORIENTATION_CUSTOM_SPACE,
  DIVIDER_TYPE,
  VERTICAL_DIVIDER
} from './text';

export default {
  title: 'Components/Divider/Stories',
  component: Divider,
  argTypes: argsTypes
};

export const DefaultDivider = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>
  );
};

DefaultDivider.storyName = DEFAULT_DIVIDER;
DefaultDivider.args = {
  children: <Typography>{DEFAULT_DIVIDER}</Typography>
};

export const DashedDivider = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>
  );
};

DashedDivider.storyName = DASHED_DIVIDER;
DashedDivider.args = {
  children: <Typography className={style['divider-content']}>{DASHED_DIVIDER}</Typography>,
  dashed: true
};

export const DividerOrientation = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      {Object.values(EDividerOrientation).map((orientation: EDividerOrientation) => (
        <Divider {...argTypes} orientation={orientation} key={orientation} />
      ))}
    </div>
  );
};

DividerOrientation.storyName = DIVIDER_ORIENTATION;
DividerOrientation.args = {
  children: <Typography className={style['divider-content']}>{DIVIDER_ORIENTATION}</Typography>
};

export const DividerOrientationWithCustomSpace = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={EDividerOrientation.left} orientationSpace={68} />
      <Divider {...argTypes} orientation={EDividerOrientation.right} orientationSpace={72} />
    </div>
  );
};

DividerOrientationWithCustomSpace.storyName = DIVIDER_ORIENTATION_CUSTOM_SPACE;
DividerOrientationWithCustomSpace.args = {
  children: <Typography className={style['divider-content']}>{DIVIDER_ORIENTATION_CUSTOM_SPACE}</Typography>
};

export const DividerVertical = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <div style={{ display: 'flex' }}>
        <Typography className={style['divider-content']}>Текст №1</Typography>
        <Divider {...argTypes} type={EDividerType.vertical} className={style.space} />
        <Typography className={style['divider-content']}>Текст №2</Typography>
        <Divider {...argTypes} type={EDividerType.vertical} dashed className={style.space} />
        <Typography className={style['divider-content']}>Текст №3</Typography>
      </div>
    </div>
  );
};

DividerVertical.storyName = VERTICAL_DIVIDER;
DividerVertical.args = {};

export const DividerCustomClassName = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={EDividerOrientation.left} className={style['test-classname']}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography className={style['divider-content']}>Экспертиза</Typography>
          <Button
            variant="primary"
            fill="solid"
            size="m"
            className={style['btn-divider-handler']}
            iconButton={<Icon name="IconChemical24" containerSize={16} htmlColor="var(--unique-white)" />}
          />
        </div>
      </Divider>
    </div>
  );
};

DividerCustomClassName.storyName = DIVIDER_CUSTOM_CLASSNAME;
DividerCustomClassName.args = {
  children: DIVIDER_CUSTOM_CLASSNAME
};

export const DividerType = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={clsx(styles.wrapper, style['show-divider-group'])}>
      <Divider {...argTypes} dashed />

      <div style={{ display: 'flex', gap: '16px' }}>
        <Typography className={style['divider-content']}>Текст №1</Typography>
        <Divider {...argTypes} type={EDividerType.vertical} />
        <Typography className={style['divider-content']}>Текст №2</Typography>
        <Divider {...argTypes} type={EDividerType.vertical} dashed />
        <Typography className={style['divider-content']}>Текст №3</Typography>
      </div>

      <Divider {...argTypes} dashed>
        <Button>
          <span>Нажать</span>
        </Button>
      </Divider>

      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography className={style['divider-content']}>Текст №1</Typography>
        </div>
        <Divider {...argTypes} type={EDividerType.vertical} className={style.space} />
        <Button variant="secondary">
          <span>Нажать</span>
        </Button>
        <Divider {...argTypes} type={EDividerType.vertical} dashed className={style.space} />
        <Button
          variant="primary"
          fill="clear"
          iconButton={<Icon name="IconChemical24" containerSize={24} htmlColor="var(--brand-sapphire-60)" />}
        />
        <Divider {...argTypes} type={EDividerType.vertical} dashed className={style.space} />
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="#">Ссылка</Link>
        </span>
      </div>

      <Divider {...argTypes} orientation={EDividerOrientation.left}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography className={style['divider-content']}>Экспертиза</Typography>
          <Button
            variant="primary"
            fill="clear"
            iconButton={<Icon name="IconChemical24" containerSize={24} htmlColor="var(--brand-sapphire-60)" />}
          />
        </div>
      </Divider>
    </div>
  );
};

DividerType.storyName = DIVIDER_TYPE;
DividerType.args = {};
