import React, { FC } from 'react';

import { Button, IconVideoCameraOffOutlined24 } from '@components/index';
import clsx from 'clsx';

import { IButtonVideoProps } from './types';

import styles from '../../Header.module.scss';

const BtnFavorite: FC<IButtonVideoProps> = ({ video }): JSX.Element => {
  return (
    <div className={clsx(styles['button-padding-unset'], styles['btn-icon-size'])}>
      <Button
        data-testid="HEADER_VIDEO"
        onClick={video}
        className={styles['video-icon-color']}
        iconButton={<IconVideoCameraOffOutlined24 htmlColor={'var(--steel-80)'} />}
        color="ghost"
        variant="secondary"
        size="xs"
      />
    </div>
  );
};

export default BtnFavorite;
