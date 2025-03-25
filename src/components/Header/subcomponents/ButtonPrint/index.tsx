import React, { FC } from 'react';

import { Button, IconPrintOutlined24 } from '@components/index';
import clsx from 'clsx';

import { IButtonPrintProps } from './types';

import styles from '../../Header.module.scss';

const ButtonPrint: FC<IButtonPrintProps> = ({ print }): JSX.Element => {
  return (
    <div className={clsx(styles['button-padding-unset'], styles['btn-icon-size'])}>
      <Button
        data-testid="HEADER_PRINT"
        onClick={print}
        className={styles['print-icon-color']}
        iconButton={<IconPrintOutlined24 htmlColor={'var(--steel-80)'} />}
        color="ghost"
        variant="secondary"
        size="xs"
      />
    </div>
  );
};

export default ButtonPrint;
