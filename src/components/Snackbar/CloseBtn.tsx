import React, { FC } from 'react';
import { ICloseBtn } from './types';
import { Button, Icon } from '@components/.';
import { colorMapping } from './enums';

const CloseBtn: FC<ICloseBtn> = ({ close, color }) => {
  const lightGreenPinkDarkCondition = [
    colorMapping.green,
    colorMapping.red
  ]

  return (
    <Button
      data-testid='SNACKBAR_CLOSE'
      variant='bar'
      size='s'
      onClick={close}
      iconButton={(
        <Icon
          name='IconClose24'
          containerSize={24}
          htmlColor={
            lightGreenPinkDarkCondition.includes(color as colorMapping)
              ? 'var(--ac-icon-white)'
              : 'var(--ac-icon-grey)'
          }
        />
      )}
    />
  )
}

export default CloseBtn