import React, { FC } from 'react';

import { Button } from '@components/.';

import { IActionBtn } from './types';

import { colorMapping } from './enums';

const ActionButton: FC<IActionBtn> = ({ actionButton, actionButtonText, color }) => {
  const redGreenCondition = [colorMapping.green, colorMapping.red];

  return (
    <Button
      data-testid="SNACKBAR_ACTION"
      variant={redGreenCondition.includes(color as colorMapping) ? 'bar' : 'text'}
      size="s"
      onClick={actionButton}
    >
      {actionButtonText.length > 0 ? actionButtonText : 'Посмотреть'}
    </Button>
  );
};

export default ActionButton;
