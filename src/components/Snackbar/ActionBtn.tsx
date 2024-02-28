import React, { FC } from 'react';
import clsx from 'clsx';
import { Button } from '@components/.';
import { IActionBtn } from './types';
import { colorMapping } from './enums';
import styles from './Snackbar.module.scss'

const ActionButton: FC<IActionBtn> = ({ actionButton, actionButtonText, color }) => {
  const redGreenCondition = [colorMapping.green, colorMapping.red];

  return (
    <Button
      data-testid='SNACKBAR_ACTION'
      variant='text'
      size='m'
      onClick={actionButton}
      className={clsx(redGreenCondition.includes(color as colorMapping) && styles['btn-color-green-red'])}
    >
      {actionButtonText.length > 0 ? actionButtonText : 'Посмотреть'}
    </Button>
  );
};

export default ActionButton;
