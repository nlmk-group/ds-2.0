import React, { ReactNode } from 'react';

import { Button, Divider, Icon, Typography } from '@components/index';
import { clsx } from 'clsx';

import style from './Divider.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { orientationMapping, typeMapping } from '../enums';
import { IDivider } from '../types';
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

export const DefaultDivider = (argTypes: IDivider): ReactNode => {
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

export const DashedDivider = (argTypes: IDivider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} />
    </div>
  );
};

DashedDivider.storyName = DASHED_DIVIDER;
DashedDivider.args = {
  children: <span className={style['divider-content']}>{DASHED_DIVIDER}</span>,
  dashed: true
};

export const DividerOrientation = (argTypes: IDivider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      {Object.values(orientationMapping).map((orientation: orientationMapping) => (
        <Divider {...argTypes} orientation={orientation} key={orientation} />
      ))}
    </div>
  );
};

DividerOrientation.storyName = DIVIDER_ORIENTATION;
DividerOrientation.args = {
  children: <span className={style['divider-content']}>{DIVIDER_ORIENTATION}</span>
};

export const DividerOrientationWithCustomSpace = (argTypes: IDivider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={orientationMapping.left} orientationSpace={68} />
      <Divider {...argTypes} orientation={orientationMapping.right} orientationSpace={72} />
    </div>
  );
};

DividerOrientationWithCustomSpace.storyName = DIVIDER_ORIENTATION_CUSTOM_SPACE;
DividerOrientationWithCustomSpace.args = {
  children: <span className={style['divider-content']}>{DIVIDER_ORIENTATION_CUSTOM_SPACE}</span>
};

export const DividerVertical = (argTypes: IDivider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <div style={{ display: 'flex' }}>
        <span className={style['divider-content']}>Текст №1</span>
        <Divider {...argTypes} type={typeMapping.vertical} className={style.space} />
        <span className={style['divider-content']}>Текст №2</span>
        <Divider {...argTypes} type={typeMapping.vertical} dashed className={style.space} />
        <span className={style['divider-content']}>Текст №3</span>
      </div>
    </div>
  );
};

DividerVertical.storyName = VERTICAL_DIVIDER;
DividerVertical.args = {};

export const DividerCustomClassName = (argTypes: IDivider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider {...argTypes} orientation={orientationMapping.left} className={style['test-classname']}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className={style['divider-content']}>Экспертиза</span>
          <Button variant="primary" fill="clear">
            <Icon name="IconChemical24" containerSize={24} htmlColor="var(--primary-blue-600)" />
          </Button>
        </div>
      </Divider>
    </div>
  );
};

DividerCustomClassName.storyName = DIVIDER_CUSTOM_CLASSNAME;
DividerCustomClassName.args = {
  children: DIVIDER_CUSTOM_CLASSNAME
};

export const DividerType = (argTypes: IDivider): ReactNode => {
  return (
    <div className={clsx(styles.wrapper, style['show-divider-group'])}>
      <Divider {...argTypes} dashed />

      <div style={{ display: 'flex', gap: 'var(--16-size)' }}>
        <span className={style['divider-content']}>Текст №1</span>
        <Divider {...argTypes} type={typeMapping.vertical} />
        <span className={style['divider-content']}>Текст №2</span>
        <Divider {...argTypes} type={typeMapping.vertical} dashed />
        <span className={style['divider-content']}>Текст №3</span>
      </div>

      <Divider {...argTypes} dashed>
        <Button>
          <span>Нажать</span>
        </Button>
      </Divider>

      <div style={{ display: 'flex', gap: 'var(--16-size)' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className={style['divider-content']}>Текст №1</span>
        </div>
        <Divider {...argTypes} type={typeMapping.vertical} className={style.space} />
        <Button variant="secondary">
          <span>Нажать</span>
        </Button>
        <Divider {...argTypes} type={typeMapping.vertical} dashed className={style.space} />
        <Button variant="primary" fill="clear">
          <Icon name="IconChemical24" containerSize={24} htmlColor="var(--primary-blue-600)" />
        </Button>
      </div>

      <Divider {...argTypes} orientation={orientationMapping.left}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className={style['divider-content']}>Экспертиза</span>
          <Button variant="primary" fill="clear">
            <Icon name="IconChemical24" containerSize={24} htmlColor="var(--primary-blue-600)" />
          </Button>
        </div>
      </Divider>
    </div>
  );
};

DividerType.storyName = DIVIDER_TYPE;
DividerType.args = {};
