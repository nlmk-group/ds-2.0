import React, { FC } from 'react';

import { Badge, IconStarOutlined16, Typography } from '@components/index';
import { clsx } from 'clsx';
import _get from 'lodash/get';

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
  ...props
}: ITabProps) => {
  const { name: toolTipName } = _get(children, 'type') ?? {};
  const { name: iconName } = _get(children, 'props.children.props') ?? {};
  return (
    <div className={clsx(styles['tab-wrapper'], active && styles['tab-active'], className)} {...props} data-ui-tab>
      <span className={clsx(styles.text, active && styles['text-active'])}>
        <Typography variant={active ? 'Body1-Bold' : 'Body1-Medium'} data-ui-tab-label>
          {label}
        </Typography>
      </span>
      {toolTipName === 'Tooltip' && iconName === 'IconInfoOutlined16' && (
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
