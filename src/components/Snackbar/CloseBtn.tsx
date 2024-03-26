import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './Snackbar.module.scss'
import { Button, Icon } from '@components/.';
import { ICloseBtn } from './types';
import { colorMapping } from './enums';

const CloseBtn: FC<ICloseBtn> = ({ close, color }) => {
  const lightGreenPinkDarkCondition = [colorMapping.green, colorMapping.red];

  return (
    <Button
      className={clsx(
        lightGreenPinkDarkCondition.includes(color as colorMapping)
          ? styles['btn-icon-white']
          : styles['btn-icon-grey']
      )}
      data-testid='SNACKBAR_CLOSE'
      variant='primary'
      fill='clear'
      size='m'
      onClick={close}
      iconButton={
        <Icon
          name='IconCloseOutlined24'
          containerSize={24}
        />
      }
    />
  );
};

export default CloseBtn;
