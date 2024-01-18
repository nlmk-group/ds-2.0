import React, { FC } from 'react';

import { Badge, Icon } from '@components/index';
import { clsx } from 'clsx';

import { IImageHelper } from './types';

import styles from './ContentExample.module.scss';

const ImageHelper: FC<IImageHelper> = ({ orientation, imageURL, badges }) => {
  return (
    <div className={clsx(styles['image-wrapper'], styles[`image-${orientation}`])}>
      {imageURL.length ? (
        <img data-testid="CARD_IMAGE" className={styles['image-content']} src={imageURL} alt="Card Icon" />
      ) : (
        <div data-testid="IMAGE_BLANK" className={styles['icon-wrapper']}>
          <Icon name="IconFactory32" htmlColor="var(--dark-primary-navyblue-200)" />
        </div>
      )}
      {badges.length !== 0 && (
        <div data-testid="BADGES_WRAPPER" className={styles['badges-wrapper']}>
          {badges.map((badge: string, index: number) => (
            <Badge key={index}>{badge}</Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageHelper;
