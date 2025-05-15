import React, { FC } from 'react';

import clsx from 'clsx';

import { ESkeletonAnimation, ISkeletonLoadingProps } from './types';

import styles from './SkeletonLoader.module.scss';

/**
 * Компонент SkeletonLoader
 *
 * Отображает анимированные заглушки для контента во время загрузки данных.
 * Поддерживает два типа анимации: волна (wave) и пульсация (pulse).
 *
 * @param {Object} props - Свойства компонента
 * @param {string} [props.id] - Уникальный идентификатор компонента
 * @param {string} [props.className] - Дополнительные CSS классы
 * @param {number} [props.count=1] - Количество отображаемых элементов скелетона
 * @param {string} [props.width='200px'] - Ширина элемента скелетона
 * @param {string} [props.height='100px'] - Высота элемента скелетона
 * @param {ESkeletonAnimation} [props.animation='wave'] - Тип анимации ('wave' или 'pulse')
 *
 */
const SkeletonLoader: FC<ISkeletonLoadingProps> = ({
  id,
  className,
  animation = ESkeletonAnimation.wave,
  count = 1,
  width = '200px',
  height = '100px'
}) => {
  return (
    <span id={id} className={clsx('skeleton-loading', className)} data-ui-skeleton>
      {Array.from({ length: count }).map((_, i) => (
        <span
          className={clsx(styles['loading-wrapper'], styles[`loading-wrapper-${animation}`])}
          key={i}
          style={{ width, height }}
          data-ui-skeleton-item
          aria-hidden="true"
        />
      ))}
    </span>
  );
};

export default SkeletonLoader;
