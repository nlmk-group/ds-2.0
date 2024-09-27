import React, { FC } from 'react';

import { Badge } from '@components/index';
import { clsx } from 'clsx';

import { IImageHelper } from './types';

import styles from './ContentExample.module.scss';

import ImagePicture from '../../ImagePicture';

const ImageHelper: FC<IImageHelper> = ({ imageURL, badges }) => {
  return (
    <div className={clsx(styles['image-wrapper'], styles[`image-container`])}>
      {imageURL.length > 0 ? (
        <img data-testid="CARD_IMAGE" className={styles['image-content']} src={imageURL} alt="Card Icon" />
      ) : (
        <ImagePicture className={styles[`image-content`]} />
      )}
      {badges.length !== 0 && (
        <div data-testid="BADGES_WRAPPER" className={styles['badges-wrapper']}>
          {badges.map((badge: string, index: number) => (
            <Badge key={index} className={styles['badges-bg-color']}>
              {badge}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageHelper;
