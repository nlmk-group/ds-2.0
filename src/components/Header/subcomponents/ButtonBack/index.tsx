import React, { FC } from 'react';

import { Button, IconChevronArrowLeftOutlined24 } from '@components/index';

import { IButtonBackProps } from './types';

import styles from '../../Header.module.scss';

const ButtonBack: FC<IButtonBackProps> = ({ back }) => {
  return (
    <Button
      type="button"
      data-testid="HEADER_BACK"
      onClick={back}
      className={styles['button-wrapper']}
      iconButton={<IconChevronArrowLeftOutlined24 />}
      variant="primary"
      color="ghost"
    />
  );
};

export default ButtonBack;
