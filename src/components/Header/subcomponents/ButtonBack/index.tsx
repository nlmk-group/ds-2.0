import React, { FC } from 'react';

import { Button, IconChevronArrowLeftOutlined24 } from '@components/index';

import { IButtonBackProps } from './types';

import styles from '../../Header.module.scss';

const ButtonBack: FC<IButtonBackProps> = ({ onClick }) => {
  return (
    <Button
      type="button"
      data-testid="HEADER_BACK"
      onClick={onClick}
      disabled={!onClick}
      className={styles['button-wrapper']}
      iconButton={<IconChevronArrowLeftOutlined24 />}
      variant="primary"
      color="ghost"
    />
  );
};

export default ButtonBack;
