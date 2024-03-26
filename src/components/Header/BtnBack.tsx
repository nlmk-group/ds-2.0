import React, { FC, MouseEventHandler } from 'react';

import { Button, IconChevronArrowLeftFilled24 } from '@components/index';

import styles from './Header.module.scss';
import clsx from 'clsx';
const BtnBack: FC<{
  back: MouseEventHandler<HTMLButtonElement>;
}> = ({ back }): JSX.Element => {
  return (
    <div className={clsx(styles['btn-wrapper'], styles['btn-back-icon'])}>
      <Button
        data-testid='HEADER_BACK'
        onClick={back}
        iconButton={
          <IconChevronArrowLeftFilled24 />
        }
        variant='primary'
        fill='outline'
      />
    </div>
  );
};

export default BtnBack;
