import React, { FC } from 'react';

import { Button, IconStarFilled24, IconStarOutlined24 } from '@components/index';
import clsx from 'clsx';

import { IButtonFavoriteProps } from './types';

import styles from '../../Header.module.scss';

const ButtonFavorite: FC<IButtonFavoriteProps> = ({ onClick, isFavorite = false }) => {
  return (
    <div data-ui-header-button-favorite className={styles['button-padding-unset']}>
      <Button
        type="button"
        data-testid="HEADER_FAVORITE"
        onClick={onClick}
        disabled={!onClick}
        className={clsx(styles['favorite-icon-color'], styles['button-padding-unset'])}
        iconButton={
          isFavorite ? (
            <IconStarFilled24 htmlColor={'var(--spectrum-yellow-60)'} />
          ) : (
            <IconStarOutlined24 htmlColor={'var(--steel-80)'} />
          )
        }
        color="ghost"
        variant="secondary"
        size="xs"
      />
    </div>
  );
};

export default ButtonFavorite;
