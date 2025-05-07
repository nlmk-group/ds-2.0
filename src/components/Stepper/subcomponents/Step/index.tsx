import React from 'react';

import { Badge, Button, Typography } from '@components/index';
import clsx from 'clsx';

import { IStepProps } from './types';

import styles from './Step.module.scss';

import { StepStateToBadgeColor } from './helpers';

/**
 * Компонент Step для отображения конкретного шага в Stepper'e.
 *
 * @param {IStepProps} props
 * @param {string} props.stepName - Название шага.
 * @param {number} props.index - Индекс шага.
 * @param {`${EStepState}`} props.state - Состояние шага.
 */
export const Step = ({ stepName, index, active, state, color }: IStepProps) => {
  return (
    <Button type="button" color="ghost" variant="secondary" className={styles['step-button']} size="s">
      <Badge
        className={clsx(styles.badge, styles[`badge-${color}`], active && styles[`active-${color}`])}
        color={StepStateToBadgeColor[state]}
      >
        {index + 1}
      </Badge>
      <Typography variant="Body1-Bold" className={clsx(styles['step-name'], styles[`step-name-${color}`])}>
        {stepName}
      </Typography>
    </Button>
  );
};
