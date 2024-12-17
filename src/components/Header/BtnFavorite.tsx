import React, { FC, MouseEventHandler } from 'react';

import { Button, IconStarOutlined24 } from '@components/index';
import clsx from 'clsx';

import styles from './Header.module.scss';

const BtnFavorite: FC<{
  favorite: MouseEventHandler<HTMLButtonElement>;
}> = ({ favorite }): JSX.Element => {
  return (
    <div className={clsx(styles['button-padding-unset'], styles['btn-icon-size'])}>
      <Button
        data-testid="HEADER_FAVORITE"
        onClick={favorite}
        className={styles['favorite-icon-color']}
        iconButton={<IconStarOutlined24 htmlColor={'var(--text-grey-400)'} />}
        color="ghost"
        variant="secondary"
        size="xs"
      />
    </div>
  );
};

export default BtnFavorite;
