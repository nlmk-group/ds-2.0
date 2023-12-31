import React, { ReactNode } from 'react'

import { Divider, Button, Icon } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';
import style from '../Divider.module.scss';
import { clsx } from 'clsx';
import { withDesign } from 'storybook-addon-designs';


import { IDivider } from '../types'
import argsTypes from './argsTypes';
import {
  DEFAULT_DIVIDER,
  DASHED_DIVIDER,
  DIVIDER_ORIENTATION,
  DIVIDER_ORIENTATION_CUSTOM_SPACE,
  DIVIDER_TYPE,
  VERTICAL_DIVIDER,
  DIVIDER_CUSTOM_CLASSNAME
} from './text';
import { orientationMapping, typeMapping } from '../enums';

export default {
  title: 'Components/Divider/Stories',
  component: Divider,
  decorators: [withDesign],
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
  children: (<span className={style['divider-content']}>{DEFAULT_DIVIDER}</span>)
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
  children: (<span className={style['divider-content']}>{DASHED_DIVIDER}</span>),
  dashed: true
};

export const DividerOrientation = (argTypes: IDivider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      {Object.values(orientationMapping).map((orientation: orientationMapping) => (
        <Divider {...argTypes} orientation={orientation} key={orientation}/>
      ))}
    </div>
  );
};

DividerOrientation.storyName = DIVIDER_ORIENTATION;
DividerOrientation.args = {
  children: (<span className={style['divider-content']}>{DIVIDER_ORIENTATION}</span>),
};

export const DividerOrientationWithCustomSpace = (argTypes: IDivider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider
        {...argTypes}
        orientation={orientationMapping.left}
        orientationSpace={68}
      />
      <Divider
        {...argTypes}
        orientation={orientationMapping.right}
        orientationSpace={72}
      />
    </div>
  );
};

DividerOrientationWithCustomSpace.storyName = DIVIDER_ORIENTATION_CUSTOM_SPACE;
DividerOrientationWithCustomSpace.args = {
  children: (<span className={style['divider-content']}>{DIVIDER_ORIENTATION_CUSTOM_SPACE}</span>),
};

export const DividerVertical = (argTypes: IDivider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <div style={{ display: 'flex' }}>
        <span className={style['divider-content']}>Текст №1</span>
        <Divider {...argTypes} type={typeMapping.vertical} />
        <span className={style['divider-content']}>Текст №2</span>
        <Divider {...argTypes} type={typeMapping.vertical} dashed />
        <span className={style['divider-content']}>Текст №3</span>
      </div>
    </div>
  );
};

DividerVertical.storyName = VERTICAL_DIVIDER;
DividerVertical.args = {
};

export const DividerCustomClassName = (argTypes: IDivider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Divider
        {...argTypes}
        orientation={orientationMapping.left}
        className={style['test-classname']}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className={style['divider-content']}>Экспертиза</span>
          <Button variant="text">
            <Icon
              name="IconChemical24"
              containerSize={24}
              htmlColor='var(--primary-blue-600)'
            />
          </Button>
        </div>
      </Divider>
    </div>
  );
};

DividerCustomClassName.storyName = DIVIDER_CUSTOM_CLASSNAME;
DividerCustomClassName.args = {
  children: DIVIDER_CUSTOM_CLASSNAME,
};

export const DividerType = (argTypes: IDivider): ReactNode => {
  return (
    <div className={clsx(styles.wrapper, style['show-divider-group'])}>
      <Divider {...argTypes} dashed />

      <div style={{ display: 'flex' }}>
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

      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className={style['divider-content']}>Текст №1</span>
        </div>
        <Divider {...argTypes} type={typeMapping.vertical} />
        <Button variant="secondary">
          <span>Нажать</span>
        </Button>
        <Divider {...argTypes} type={typeMapping.vertical} dashed />
        <Button variant="text">
          <Icon
            name="IconChemical24"
            containerSize={24}
            htmlColor='var(--primary-blue-600)'
          />
        </Button>
      </div>

      <Divider {...argTypes} orientation={orientationMapping.left}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className={style['divider-content']}>Экспертиза</span>
          <Button variant="text">
            <Icon
              name="IconChemical24"
              containerSize={24}
              htmlColor='var(--primary-blue-600)'
            />
          </Button>
        </div>
      </Divider>
    </div>
  );
};

DividerType.storyName = DIVIDER_TYPE;
DividerType.args = {
};