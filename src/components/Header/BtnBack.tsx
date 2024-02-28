import React, { FC, MouseEventHandler } from 'react';

import { Button, IconChevronArrowLeftFilled24 } from '@components/index';

import styles from './Header.module.scss';

const BtnBack: FC<{
  back: MouseEventHandler<HTMLButtonElement>;
}> = ({ back }): JSX.Element => {
  return (
    <div className={styles['btn-wrapper']}>
      <Button
        data-testid='HEADER_BACK'
        onClick={back}
        iconButton={
          <IconChevronArrowLeftFilled24
            htmlColor={'var(--primary-blue-600)'}
          />
        }
        variant='outline'
      />
    </div>
  );
};

export default BtnBack;
