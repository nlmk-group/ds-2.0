import React, { FC, PropsWithChildren, useState } from 'react';

import Tooltip from '@components/Tooltip';
import { TooltipPlacementType } from '@components/Tooltip/types';
import { copyToClipboard } from '@components/utils/copyToClipboard';
import Typography from '@components/Typography'

interface ICopyWrapper extends PropsWithChildren {
  copy: string;
  placement?: TooltipPlacementType;
}

export const CopyWrapper: FC<ICopyWrapper> = ({ copy, children, placement = 'top' }) => {
  const [isCopy, setCopy] = useState(false);

  const onClick = () => {
    if (isCopy) return;
    copyToClipboard(copy);
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  };

  return (
    <Tooltip
      render={
        <Typography variant='Body2-Bold'>
          {isCopy ? 'Скопировано в буфер обмена' : 'Копировать'}
        </Typography>
      }
      placement={placement}
    >
      <div onClick={onClick}>{children}</div>
    </Tooltip>
  );
};
