import React, { FC, MouseEventHandler } from 'react';

import { Button, Icon } from '@components/index';

import styles from './Header.module.scss';

const BtnFavorite: FC<{
  favorite: MouseEventHandler<HTMLButtonElement>;
}> = ({ favorite }): JSX.Element => {
  return (
    <div className={styles['button-padding-unset']}>
      <Button
        data-testid="HEADER_FAVORITE"
        onClick={favorite}
        iconButton={<Icon name="IconStarBorder24" containerSize={24} htmlColor={'var(--text-grey-400)'} />}
        variant="text"
        size="xs"
      />
    </div>
  );
};

export default BtnFavorite;
