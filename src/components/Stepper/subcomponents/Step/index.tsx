import React from 'react';

import { Badge, Button, Typography } from '@components/index';

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
export const Step = ({ stepName, index, state }: IStepProps) => {
  return (
    <Button fill="clear" variant="black" className={styles['step-button']} size="s">
      <Badge color={StepStateToBadgeColor[state]}>{index + 1}</Badge>
      <Typography variant="Body1-Bold" className={styles['step-name']}>
        {stepName}
      </Typography>
    </Button>
  );
};
