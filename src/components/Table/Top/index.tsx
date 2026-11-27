import React, { forwardRef } from 'react';

import ArrowDown from '@components/Icon/IconsDirectory/System/ArrowDownOutlined/16';
import ArrowUp from '@components/Icon/IconsDirectory/System/ArrowUpOutlined/16';
import IconContainer from '@components/Icon/subcomponent/IconContainer';
import Typography from '@components/Typography';
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
    const SortArrow = sortDirection === 'asc' ? ArrowUp : ArrowDown;

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
                !disable && onClick && styles.clickable,
                number && styles.number,
                sort && number && styles['sort-with-number'],
                sort && sortDirection && styles.sort,
                right && styles.right
              )}
            >
              <div className={styles.label}>
                <Typography variant="Body2-Medium">{title}</Typography>
              </div>
              {sort && sortDirection && (
                <div className={styles.arrow}>
                  <IconContainer containerSize={16}>
                    <SortArrow htmlColor="currentColor" />
                  </IconContainer>
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
