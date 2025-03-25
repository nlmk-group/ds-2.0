import React, { FC } from 'react';

import { Button, IconChevronArrowLeftOutlined24 } from '@components/index';

import { IButtonBackProps } from './types';

import styles from '../../Header.module.scss';

const ButtonBack: FC<IButtonBackProps> = ({ back }): JSX.Element => {
  return (
    <div>
      <Button
        type="button"
        data-testid="HEADER_BACK"
        onClick={back}
        className={styles['btn-wrapper']}
        iconButton={<IconChevronArrowLeftOutlined24 />}
        variant="primary"
        color="ghost"
      />
    </div>
  );
};

export default ButtonBack;
