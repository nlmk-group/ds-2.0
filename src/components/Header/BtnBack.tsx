import React, { FC, MouseEventHandler } from 'react';

import { Button, IconChevronArrowLeftFilled24 } from '@components/index';
import clsx from 'clsx';

import styles from './Header.module.scss';

const BtnBack: FC<{
  back: MouseEventHandler<HTMLButtonElement>;
}> = ({ back }): JSX.Element => {
  return (
    <div className={clsx(styles['btn-wrapper'], styles['btn-back-icon'])}>
      <Button
        type="button"
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
