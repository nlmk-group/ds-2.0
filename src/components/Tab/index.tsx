import React, { FC } from 'react';

import { Badge } from '@components/index';
import { clsx } from 'clsx';
import _get from 'lodash/get';

import { ITab } from './types';

import styles from './Tab.module.scss';

const Tab: FC<ITab> = ({ label, active, children, badgeNumber, ...props }) => {
  const { name: toolTipName } = _get(children, 'type') ?? {};
  const { name: iconName } = _get(children, 'props.children.props') ?? {};
  return (
    <div
      className={clsx(styles['tab-wrapper'], active && styles['tab-active'])}
      {...props}
    >
      <span className={clsx(styles.text, active && styles['text-active'])}>
        {label}
      </span>
      {toolTipName === 'Tooltip' && iconName === 'IconInfo16' && (
        <div className={styles.tooltip}>{children}</div>
      )}
      {badgeNumber && (
        <div className={styles.badge}>
          <Badge color="secondary">{badgeNumber}</Badge>
        </div>
      )}
    </div>
  );
};

export default Tab;
