import React, { FC } from 'react';

import { Button, IconChevronArrowLeftFilled24 } from '@components/index';
import clsx from 'clsx';

import { IButtonBackProps } from './types';

import styles from '../../Header.module.scss';

const BtnBack: FC<IButtonBackProps> = ({ back }): JSX.Element => {
  return (
    <div className={clsx(styles['btn-wrapper'], styles['btn-back-icon'])}>
      <Button
        data-testid="HEADER_BACK"
        onClick={back}
        iconButton={<IconChevronArrowLeftFilled24 />}
        variant="primary"
        color="ghost"
      />
    </div>
  );
};

export default BtnBack;
