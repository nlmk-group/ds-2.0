import React, { ReactNode } from 'react';

import { Button, Divider, Icon, Link, Typography } from '@components/index';
import { clsx } from 'clsx';

import style from './Divider.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { EDividerOrientation, EDividerType } from '../enums';
import { IDividerProps } from '../types';
import argsTypes from './argsTypes';

export default {
  title: 'Components/Divider/Stories',
  component: Divider,
  argTypes: argsTypes
};

export const DividerDefault = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>
  );
};

DividerDefault.storyName = 'Divider по умолчанию';
DividerDefault.args = {
  children: <Typography>Divider по умолчанию</Typography>
};

export const DividerDashed = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>
  );
};

DividerDashed.storyName = 'Divider с пунктирной линией';
DividerDashed.args = {
  children: <Typography className={style['divider-content']}>Divider с пунктирной линией</Typography>,
  dashed: true
};

export const DividerOrientation = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={EDividerOrientation.left}>
        <Typography className={style['divider-content']}>Left</Typography>
      </Divider>
      <Divider {...argTypes} orientation={EDividerOrientation.center}>
        <Typography className={style['divider-content']}>Center</Typography>
      </Divider>
      <Divider {...argTypes} orientation={EDividerOrientation.right}>
        <Typography className={style['divider-content']}>Right</Typography>
      </Divider>
    </div>
  );
};

DividerOrientation.storyName = 'Варианты ориентаций Divider';
DividerOrientation.args = {};

export const DividerOrientationWithCustomSpace = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={EDividerOrientation.left} orientationSpace={68} />
      <Divider {...argTypes} orientation={EDividerOrientation.right} orientationSpace={72} />
    </div>
  );
};

DividerOrientationWithCustomSpace.storyName = 'Кастомизация размера пространства';
DividerOrientationWithCustomSpace.args = {
  children: <Typography className={style['divider-content']}>Кастомизация размера пространства</Typography>
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

DividerVertical.storyName = 'Вертикальный Divider';

export const DividerCustomClassName = (argTypes: IDividerProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={EDividerOrientation.left} className={style['test-classname']}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography className={style['divider-content']}>Экспертиза</Typography>
          <Button
            type="button"
            size="m"
            className={style['btn-divider-handler']}
            iconButton={<Icon name="IconChemical24" containerSize={16} htmlColor="var(--unique-white)" />}
          />
        </div>
      </Divider>
    </div>
  );
};

DividerCustomClassName.storyName = 'Divider с кастомным классом';

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
        <Button type="button">
          <span>Нажать</span>
        </Button>
      </Divider>

      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography className={style['divider-content']}>Текст №1</Typography>
        </div>
        <Divider {...argTypes} type={EDividerType.vertical} className={style.space} />
        <Button type="button" variant="secondary">
          <span>Нажать</span>
        </Button>
        <Divider {...argTypes} type={EDividerType.vertical} dashed className={style.space} />
        <Button
          type="button"
          variant="primary"
          color="ghost"
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
            type="button"
            variant="primary"
            color="ghost"
            iconButton={<Icon name="IconChemical24" containerSize={24} htmlColor="var(--brand-sapphire-60)" />}
          />
        </div>
      </Divider>
    </div>
  );
};

DividerType.storyName = 'Типы Divider';
