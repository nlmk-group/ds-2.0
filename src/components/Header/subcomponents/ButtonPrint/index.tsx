import React, { FC } from 'react';

import { Button, IconPrintOutlined24 } from '@components/index';

import { IButtonPrintProps } from './types';

import styles from '../../Header.module.scss';

const ButtonPrint: FC<IButtonPrintProps> = ({ onClick }) => {
  return (
    <Button
      type="button"
      data-testid="HEADER_PRINT"
      onClick={onClick}
      disabled={!onClick}
      className={styles['button-padding-unset']}
      iconButton={<IconPrintOutlined24 htmlColor={'var(--steel-80)'} />}
      color="ghost"
      variant="secondary"
      size="xs"
    />
  );
};

export default ButtonPrint;
