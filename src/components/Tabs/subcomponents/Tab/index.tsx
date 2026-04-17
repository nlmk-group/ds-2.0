import React, { FC, useEffect, useRef, useState } from 'react';

import Badge from '@components/Badge';
import { IconStarOutlined16 } from '@components/Icon/IconsDirectory';
import DSTooltip from '@components/Tooltip';
import Typography from '@components/Typography';
import { clsx } from 'clsx';

import { ETabsIndicatorPosition, ETabsOrientation } from '../../enums';
import { ITabProps } from './types';

import styles from './Tab.module.scss';

const Tab: FC<ITabProps> = ({
  label,
  hasIcon,
  badgeChildren,
  badgeColor,
  active,
  children,
  className,
  hasBadge,
  orientation = ETabsOrientation.horizontal,
  indicatorPosition = ETabsIndicatorPosition.bottom,
  fixedWidth = false,
  ...props
}: ITabProps) => {
  const isTooltipChild = (children as any)?.type === DSTooltip;
  const iconName = (children as any)?.props?.children?.props?.name;

  const isVertical = orientation === ETabsOrientation.vertical;
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);

  useEffect(() => {
    if (isVertical && fixedWidth && labelRef.current) {
      setIsOverflowed(labelRef.current.scrollWidth > labelRef.current.clientWidth);
    }
  }, [label, isVertical, fixedWidth]);

  const indicatorClass = `tab-indicator--${indicatorPosition}`;

  const labelContent = (
    <Typography
      variant={active ? 'Body1-Bold' : 'Body1-Medium'}
      data-ui-tab-label
      className={clsx(isVertical && styles['label--vertical'])}
    >
      <span ref={labelRef} className={clsx(isVertical && styles['label-text--vertical'])}>
        {label}
      </span>
    </Typography>
  );

  return (
    <div
      className={clsx(
        styles['tab-wrapper'],
        indicatorPosition === ETabsIndicatorPosition.top && styles['tab-wrapper--top'],
        active && styles['tab-active'],
        active && styles[indicatorClass],
        isVertical && styles['tab-wrapper--vertical'],
        className
      )}
      {...props}
      data-ui-tab
    >
      <span className={clsx(styles.text, active && styles['text-active'], isVertical && styles['text--vertical'], isVertical && fixedWidth && styles['text--vertical-fixed'])}>
        {isVertical && fixedWidth && isOverflowed ? (
          <DSTooltip
            render={<Typography variant="Caption-Medium">{label}</Typography>}
          >
            {labelContent}
          </DSTooltip>
        ) : (
          labelContent
        )}
      </span>
      {isTooltipChild && iconName === 'IconInfoOutlined16' && (
        <div className={styles.tooltip} data-ui-tab-tooltip>
          {children}
        </div>
      )}
      {hasIcon && (
        <div className={styles.icon} data-ui-tab-icon>
          <IconStarOutlined16 htmlColor="var(--brand-sapphire-60)"></IconStarOutlined16>
        </div>
      )}
      {hasBadge && (
        <div className={styles.badge} data-ui-tab-badge>
          <Badge color={badgeColor}>{badgeChildren}</Badge>
        </div>
      )}
    </div>
  );
};

export default Tab;
