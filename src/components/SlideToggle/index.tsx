import React, { FC, useMemo } from 'react';

import { generateUUID } from '@components/declaration';
import { ESizeMapping } from '@components/SlideToggle/enum';
import clsx from 'clsx';

import { ISlideToggleProps } from './types';

import styles from './SlideToggle.module.scss';

import { IconStackCollapsed16, IconStackCollapsed24, Typography } from '..';

const SlideToggle: FC<ISlideToggleProps> = ({
  title,
  children,
  className,
  onToggle = () => {},
  isShow,
  size = ESizeMapping.default,
  after,
  toggleContainerShadow = false,
  iconWrapperId,
  titleWrapperId,
  afterWrapperId,
  contentWrapperId
}) => {
  const renderIcon = () => {
    return size === ESizeMapping.default ? (
      <IconStackCollapsed24 htmlColor="var(--ac-subtitle-default)" />
    ) : (
      <IconStackCollapsed16 htmlColor="var(--ac-subtitle-default)" />
    );
  };

  const renderTitle = () => {
    const titleId = useMemo(() => `titleId-${titleWrapperId || generateUUID()}`, [titleWrapperId]);
    const actionId = useMemo(() => `titleId-${afterWrapperId || generateUUID()}`, [afterWrapperId]);

    return (
      <div className={styles['title-container']} id={titleId}>
        {typeof title === 'string' ? (
          <Typography
            className={styles['label-wrapper']}
            variant={size === ESizeMapping.default ? 'Heading3' : 'Body1-Bold'}
            color="primary"
          >
            {title}
          </Typography>
        ) : (
          <div className={styles['label-wrapper']}>{title}</div>
        )}
        {after && (
          <div className={styles['action-block']} id={actionId}>
            {after}
          </div>
        )}
      </div>
    );
  };

  const iconId = useMemo(() => `titleId-${iconWrapperId || generateUUID()}`, [iconWrapperId]);
  const contentId = useMemo(() => `titleId-${contentWrapperId || generateUUID()}`, [contentWrapperId]);

  return (
    <div className={clsx(styles['slide-toggle-wrapper'], className)} data-testid="slide-toggle-wrapper">
      <div className={clsx(styles['title-wrapper'], styles[`title-wrapper-${size}`])} onClick={onToggle}>
        <div
          className={clsx(
            styles['icon-wrapper'],
            styles[`icon-wrapper-${size}`],
            isShow && styles['icon-wrapper-show']
          )}
          id={iconId}
        >
          {renderIcon()}
        </div>
        {renderTitle()}
      </div>
      {isShow && (
        <div
          id={contentId}
          className={clsx(styles['content-wrapper'], toggleContainerShadow && styles['content-wrapper-shadow'])}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default SlideToggle;
