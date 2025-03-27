import React, { FC } from 'react';

import { Button, IconVideoCameraOffOutlined24 } from '@components/index';

import { IButtonVideoProps } from './types';

import styles from '../../Header.module.scss';

const ButtonVideo: FC<IButtonVideoProps> = ({ onClick }) => {
  return (
    <Button
      type="button"
      data-testid="HEADER_VIDEO"
      onClick={onClick}
      disabled={!onClick}
      className={styles['button-padding-unset']}
      iconButton={<IconVideoCameraOffOutlined24 htmlColor={'var(--steel-80)'} />}
      color="ghost"
      variant="secondary"
      size="xs"
    />
  );
};

export default ButtonVideo;
