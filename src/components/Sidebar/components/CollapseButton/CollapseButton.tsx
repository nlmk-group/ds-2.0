import React, { forwardRef } from 'react';

import { Icon, Typography } from '@components/index';
import { ICollapseButtonProps } from '@components/Sidebar/types';

import styles from './CollapseButton.module.scss';

const CollapseButton = forwardRef<HTMLButtonElement, ICollapseButtonProps>(({ isExpanded, onClick }, ref) => {
  const buttonText = isExpanded ? 'Свернуть' : 'Развернуть';

  return (
    <button ref={ref} type="button" className={styles.collapse} onClick={onClick} title={buttonText}>
      <div className={styles.arrow} data-expanded={isExpanded}>
        <Icon name="IconChevronArrowRightOutlined32" containerSize={32} htmlColor="var(--ac-icon-white)" />
      </div>

      {isExpanded && (
        <Typography variant="Body1-Medium" className={styles['collapse-text']}>
          {buttonText}
        </Typography>
      )}
    </button>
  );
});

CollapseButton.displayName = 'CollapseButton';

export default CollapseButton;
