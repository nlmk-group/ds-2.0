import React, { FC, useState } from 'react';

import Icon from '@components/Icon';
import clsx from 'clsx';

import { IImagePicture } from './types';

import styles from './ImagePicture.module.scss';

import { ImagePictureRadius, ImagePictureRatios } from './enums';

/**
 * Компонент ImagePicture отображает изображение с возможностью зумирования при наведении,
 * различными аспектными отношениями и радиусами закругления углов.
 *
 * @param {object} props - Свойства компонента.
 * @param {string} props.src - URL изображения для отображения.
 * @param {`${ImagePictureRatios}`} [props.aspectRatio=ImagePictureRatios['ratio-1x1']] - Аспектное отношение изображения.
 * @param {`${ImagePictureRadius}`} [props.radius=ImagePictureRadius['radius-none']] - Радиус закругления углов изображения.
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @param {boolean} [props.zoom=true] - Включает эффект зумирования при наведении.
 * @param {React.ImgHTMLAttributes<HTMLImageElement>} props.restImgProps - Дополнительные свойства для элемента `<img>`.
 */
const ImagePicture: FC<IImagePicture> = ({
  src,
  aspectRatio = ImagePictureRatios['ratio-1x1'],
  radius = ImagePictureRadius['radius-none'],
  className,
  zoom = true,
  ...restImgProps
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldShowZoomOverlay = zoom && src && isHovered;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={clsx(
        styles['image-wrapper'],
        styles[aspectRatio],
        styles[radius],
        {
          [styles['no-content']]: !src
        },
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="IMAGE_PICTURE"
    >
      {shouldShowZoomOverlay && (
        <>
          <div className={styles['hover-icon']}>
            <Icon name="IconZoomInOutlined24" containerSize={32} />
          </div>
          <div className={styles['hover-overlay']} />
        </>
      )}
      {src && <img src={src} className={styles.image} alt={restImgProps.alt} {...restImgProps} />}
      {!src && (
        <div className={styles['empty-icon']}>
          <Icon name="IconFactory32" htmlColor={'var(--steel-50)'} />
        </div>
      )}
    </div>
  );
};

export default ImagePicture;
