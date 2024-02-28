import React, { FC } from 'react';

import { Badge, Typography } from '@components/index';
import { clsx } from 'clsx';
import _get from 'lodash/get';
import { ITab } from './types';
import styles from './Tab.module.scss';

const Tab: FC<ITab> = ({
  label,
  active,
  children,
  badgeNumber,
  className,
  ...props
}) => {
  const { name: toolTipName } = _get(children, 'type') ?? {};
  const { name: iconName } = _get(children, 'props.children.props') ?? {};
  return (
    <div
      className={clsx(
        styles['tab-wrapper'],
        active && styles['tab-active'],
        className
      )}
      {...props}
    >
      <span
        className={clsx(
          styles.text,
          active && styles['text-active']
        )}
      >
        <Typography variant={active ? 'Body1-Bold' : 'Body1-Medium'}>
          {label}
        </Typography>
      </span>
      {toolTipName === 'Tooltip' && iconName === 'IconInfoOutlined16' && (
        <div className={styles.tooltip}>{children}</div>
      )}
      {badgeNumber && (
        <div className={styles.badge}>
          <Badge color='secondary'>{badgeNumber}</Badge>
        </div>
      )}
    </div>
  );
};

export default Tab;
