import React, { FC } from 'react';

import { Button, IconHelperMailOutlined24 } from '@components/index';

import { IButtonMessageProps } from './types';

import styles from '../../Header.module.scss';

const ButtonMessage: FC<IButtonMessageProps> = ({ message }): JSX.Element => {
  return (
    <div>
      <Button
        type="button"
        onClick={message}
        className={styles['btn-message']}
        iconButton={<IconHelperMailOutlined24 />}
        variant="primary"
        color="brand"
      />
    </div>
  );
};

export default ButtonMessage;
