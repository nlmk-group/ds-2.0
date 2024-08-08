import React, { ReactNode } from 'react';

import { Button, Divider, Icon, Link, Typography } from '@components/index';
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
  children: <Typography className={style['divider-content']}>{DASHED_DIVIDER}</Typography>,
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
  children: <Typography className={style['divider-content']}>{DIVIDER_ORIENTATION}</Typography>
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
  children: <Typography className={style['divider-content']}>{DIVIDER_ORIENTATION_CUSTOM_SPACE}</Typography>
};

export const DividerVertical = (argTypes: IDivider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <div style={{ display: 'flex' }}>
        <Typography className={style['divider-content']}>Текст №1</Typography>
        <Divider {...argTypes} type={typeMapping.vertical} className={style.space} />
        <Typography className={style['divider-content']}>Текст №2</Typography>
        <Divider {...argTypes} type={typeMapping.vertical} dashed className={style.space} />
        <Typography className={style['divider-content']}>Текст №3</Typography>
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
          <Typography className={style['divider-content']}>Экспертиза</Typography>
          <Button
            variant="primary"
            fill="clear"
            size="xs"
            className={style['btn-divider-handler']}
            iconButton={<Icon name="IconChemical24" containerSize={16} htmlColor="var(--ac-icon-blue)" />}
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

export const DividerType = (argTypes: IDivider): ReactNode => {
  return (
    <div className={clsx(styles.wrapper, style['show-divider-group'])}>
      <Divider {...argTypes} dashed />

      <div style={{ display: 'flex', gap: 'var(--16-size)' }}>
        <Typography className={style['divider-content']}>Текст №1</Typography>
        <Divider {...argTypes} type={typeMapping.vertical} />
        <Typography className={style['divider-content']}>Текст №2</Typography>
        <Divider {...argTypes} type={typeMapping.vertical} dashed />
        <Typography className={style['divider-content']}>Текст №3</Typography>
      </div>

      <Divider {...argTypes} dashed>
        <Button>
          <span>Нажать</span>
        </Button>
      </Divider>

      <div style={{ display: 'flex', gap: 'var(--16-size)' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography className={style['divider-content']}>Текст №1</Typography>
        </div>
        <Divider {...argTypes} type={typeMapping.vertical} className={style.space} />
        <Button variant="secondary">
          <span>Нажать</span>
        </Button>
        <Divider {...argTypes} type={typeMapping.vertical} dashed className={style.space} />
        <Button
          variant="primary"
          fill="clear"
          iconButton={<Icon name="IconChemical24" containerSize={24} htmlColor="var(--ac-icon-blue)" />}
        />
        <Divider {...argTypes} type={typeMapping.vertical} dashed className={style.space} />
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="#">Ссылка</Link>
        </span>
      </div>

      <Divider {...argTypes} orientation={orientationMapping.left}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography className={style['divider-content']}>Экспертиза</Typography>
          <Button
            variant="primary"
            fill="clear"
            iconButton={<Icon name="IconChemical24" containerSize={24} htmlColor="var(--ac-icon-blue)" />}
          />
        </div>
      </Divider>
    </div>
  );
};

DividerType.storyName = DIVIDER_TYPE;
DividerType.args = {};
