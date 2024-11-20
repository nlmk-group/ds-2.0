import React from 'react';

import { Status } from '@components/Status';
import { IStatusProps } from '@components/Status/types';
import type { Meta } from '@storybook/react';

import styles from './Status.module.scss';

import { argsTypes } from './argsTypes';
import { CustomIcon } from './CustomIcon';

const meta: Meta<IStatusProps> = {
  title: 'Components/Status/Stories',
  component: Status,
  argTypes: argsTypes
};

export default meta;

export const StatusDefault = (props: IStatusProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Status {...props}>{props.children}</Status>
    </div>
  );
};
StatusDefault.storyName = 'Status по умолчанию';
StatusDefault.args = {
  children: 'Published',
  icon: 'IconCloudDoneOutlined24'
};

export const StatusColors = (props: IStatusProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Status {...props} icon="IconCloudDoneOutlined24" color="default">
        Published
      </Status>
      <Status {...props} icon="IconBlockCloseOutlined24" color="error">
        Cancelled
      </Status>
      <Status {...props} icon="IconAllDoneDoubleCheckOutlined24" color="success">
        Pinned
      </Status>
      <Status {...props} icon="IconPeopleCheckDoneOutlined24" color="warning">
        In progress
      </Status>
      <Status {...props} icon="IconEditPenOutlined24" color="grey">
        Draft
      </Status>
    </div>
  );
};
StatusColors.storyName = 'Status с разными цветами';

export const StatusFills = (props: IStatusProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Status {...props} fill="solid">
        {props.children}
      </Status>
      <Status {...props} fill="clear">
        {props.children}
      </Status>
    </div>
  );
};
StatusFills.storyName = 'Status с разными заливками фона';
StatusFills.args = {
  children: 'Pinned',
  icon: 'IconAllDoneDoubleCheckOutlined24',
  color: 'success'
};

export const StatusSizes = (props: IStatusProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Status {...props} size="s" icon="IconBlockCloseOutlined16">
        Small
      </Status>
      <Status {...props} size="m" icon="IconBlockCloseOutlined24">
        Medium
      </Status>
      <Status {...props} size="l" icon="IconBlockCloseOutlined24">
        Large
      </Status>
    </div>
  );
};
StatusSizes.storyName = 'Status с разными размерами';
StatusSizes.args = {
  color: 'error'
};

export const StatusCustomIcon = (props: IStatusProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Status {...props} icon={<CustomIcon htmlColor="var(--spectrum-yellow-60)" />}>
        {props.children}
      </Status>
    </div>
  );
};
StatusCustomIcon.storyName = 'Status с нестандартной иконкой';
StatusCustomIcon.args = {
  children: 'Partial drain',
  color: 'warning',
  fill: 'clear'
};
