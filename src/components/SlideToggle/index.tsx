import React, { FC, useMemo } from 'react';

import { generateUUID } from '@components/declaration';
import { ESizeMapping } from '@components/SlideToggle/enum';
import clsx from 'clsx';

import { ISlideToggleProps } from './types';

import styles from './SlideToggle.module.scss';

import { IconStackCollapsed16, IconStackCollapsed24, Typography } from '..';

/**
 * Компонент SlideToggle используется для отображения развертывающегося контента с заголовком и дополнительными элементами.
 *
 * @param {object} props - Свойства компонента.
 * @param {string | JSX.Element} props.title - Заголовок свайдера.
 * @param {ReactNode} [props.after] - Элемент после заголовка.
 * @param {boolean} props.isShow - Показан ли контент.
 * @param {() => void} [props.onToggle] - Функция, вызываемая при переключении.
 * @param {string} [props.className] - Дополнительные CSS классы.
 * @param {TSize} [props.size=ESizeMapping.default] - Размер свайдера.
 * @param {string} [props.iconWrapperId] - ID обертки для иконки.
 * @param {string} [props.titleWrapperId] - ID обертки для заголовка.
 * @param {string} [props.afterWrapperId] - ID обертки для элемента после заголовка.
 * @param {string} [props.contentWrapperId] - ID обертки для контента.
 * @returns {JSX.Element} - Компонент SlideToggle.
 */

const SlideToggle: FC<ISlideToggleProps> = ({
  title,
  children,
  className,
  onToggle = () => {},
  isShow,
  size = ESizeMapping.default,
  after,
  iconWrapperId,
  titleWrapperId,
  afterWrapperId,
  contentWrapperId
}) => {
  const renderIcon = () => {
    return size === ESizeMapping.default ? (
      <IconStackCollapsed24 htmlColor="var(--steel-90)" />
    ) : (
      <IconStackCollapsed16 htmlColor="var(--steel-90)" />
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
            color="var(--steel-90)"
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
          className={clsx(
            styles['content-wrapper'],
            size === ESizeMapping.compact && styles['content-wrapper-compact']
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default SlideToggle;
