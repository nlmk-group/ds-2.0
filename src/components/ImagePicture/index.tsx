import React, { FC, useState } from 'react'
import clsx from 'clsx'
import { ImagePictureRadius, ImagePictureRatios } from './enums'
import { IImagePicture } from './types'
import styles from './ImagePicture.module.scss'
import EmptyIcon from './subcomponents/EmptyIcon'
import Icon from '@components/Icon'

const ImagePicture: FC<IImagePicture> = ({
  src,
  aspectRatio = ImagePictureRatios['ratio-1x1'],
  radius = ImagePictureRadius['radius-none'],
  className,
  zoom = true,
  ...restImgProps
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const shouldShowZoomOverlay = zoom && src && isHovered

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={clsx(styles['image-wrapper'], className, styles[aspectRatio], styles[radius], {
        [styles['no-content']]: !src
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="IMAGE_PICTURE"
    >
      {shouldShowZoomOverlay && <>
        <div className={styles['hover-icon']}><Icon name='IconZoomIn24' containerSize={32} /></div>
        <div className={styles['hover-overlay']} />
      </>}
      {src && <img src={src} className={styles.image} alt={restImgProps.alt} {...restImgProps} />}
      {!src && <div className={styles['empty-icon']}><EmptyIcon /></div>}
    </div>
  )
}

export default ImagePicture;
