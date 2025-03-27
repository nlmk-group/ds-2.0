import React, { FC } from 'react';

import { Button, IconHelperMailOutlined24 } from '@components/index';

import { IButtonMessageProps } from './types';

import styles from '../../Header.module.scss';

const ButtonMessage: FC<IButtonMessageProps> = ({ onClick }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={styles['button-message']}
      iconButton={<IconHelperMailOutlined24 />}
      variant="primary"
      color="brand"
    />
  );
};

export default ButtonMessage;
