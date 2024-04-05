import React, { forwardRef } from 'react';

import { Icon, Typography } from '@components/index';
import { ICollapseButtonProps } from '@components/Sidebar/types';
import { clsx } from 'clsx';

import styles from './CollapseButton.module.scss';

// Оборачиваем компонент в forwardRef
const CollapseButton = forwardRef<HTMLDivElement, ICollapseButtonProps>(({ isExpanded, onClick }, ref) => {
  return (
    <div ref={ref} className={styles.root} onClick={onClick} title={isExpanded ? 'Свернуть' : 'Развернуть'}>
      <div className={clsx(styles.arrow, { [styles['arrow-expanded']]: isExpanded })}>
        <Icon name={'IconChevronArrowRightOutlined32'} containerSize={32} htmlColor="var(--ac-icon-white)" />
      </div>
      {isExpanded && (
        <Typography variant="Body1-Medium" className={styles.text}>
          Свернуть
        </Typography>
      )}
    </div>
  );
});

export default CollapseButton;
