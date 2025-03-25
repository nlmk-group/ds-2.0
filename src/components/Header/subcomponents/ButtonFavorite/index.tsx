import React, { FC } from 'react';

import { Button, IconStarOutlined24 } from '@components/index';

import { IButtonFavoriteProps } from './types';

import styles from '../../Header.module.scss';

const ButtonFavorite: FC<IButtonFavoriteProps> = ({ favorite }): JSX.Element => {
  return (
    <div className={styles['button-padding-unset']}>
      <Button
        data-testid="HEADER_FAVORITE"
        onClick={favorite}
        className={styles['favorite-icon-color']}
        iconButton={<IconStarOutlined24 htmlColor={'var(--steel-80)'} />}
        color="ghost"
        variant="secondary"
        size="xs"
      />
    </div>
  );
};

export default ButtonFavorite;
