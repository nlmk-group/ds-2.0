import React, { forwardRef } from 'react';

import { TIconName } from '@components/Icon/IconsDirectory/unionType';
import { Icon, Typography } from '@components/index';
import clsx from 'clsx';

import { ESize, ITopProps } from './types';

import styles from './Top.module.scss';

const Top = forwardRef<HTMLTableCellElement, ITopProps>(
  (
    {
      size = ESize.M,
      title = '',
      disable = false,
      sort = false,
      right = false,
      number = false,
      lastInGroup = false,
      drag = false,
      onClick,
      sortDirection = false,
      filtered = false,
      children,
      className,
      style,
      onMouseDown,
      onTouchStart,
      onDoubleClick,
      ...props
    },
    ref
  ) => {
    let arrowIcon: TIconName | null = null;
    if (sortDirection === 'asc') {
      arrowIcon = 'IconArrowUpOutlined16';
    } else if (sortDirection === 'desc') {
      arrowIcon = 'IconArrowDownOutlined16';
    }

    const handleClick = () => {
      if (!disable && onClick) {
        onClick();
      }
    };

    return (
      <th
        ref={ref}
        className={clsx(
          styles.top,
          styles[size],
          disable && styles.disabled,
          number && styles.numberCol,
          filtered && styles.filtered,
          lastInGroup && styles['last-in-group'],
          className
        )}
        style={style}
        {...props}
      >
        <div className={styles.wrapper}>
          {title && (
            <div
              onClick={handleClick}
              className={clsx(
                styles.content,
                number && styles.number,
                sort && number && styles['sort-with-number'],
                sort && sortDirection && styles.sort,
                right && styles.right
              )}
            >
              <div className={styles.label}>
                <Typography variant="Body2-Medium">{title}</Typography>
              </div>
              {sort && arrowIcon && (
                <div className={styles.arrow}>
                  <Icon name={arrowIcon} containerSize={16} htmlColor="currentColor" />
                </div>
              )}
            </div>
          )}
          {children}
        </div>
        {/* Drag для ресайза */}
        {drag && (
          <div
            className={styles.drag}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onDoubleClick={onDoubleClick}
          />
        )}
      </th>
    );
  }
);

Top.displayName = 'Top';
export default Top;
