import React, { forwardRef } from 'react';

import { Icon, Typography } from '@components/index';
import { ICollapseButtonProps } from '@components/Sidebar/types';
import { ELocaleMapping } from '@components/declaration';

import { COLLAPSE_TEXTS } from '../../constants';
import styles from './CollapseButton.module.scss';

const CollapseButton = forwardRef<HTMLButtonElement, ICollapseButtonProps>(
  ({ isExpanded, onClick, locale = ELocaleMapping.ru }, ref) => {
    const texts = COLLAPSE_TEXTS[locale];
    const buttonText = isExpanded ? texts.collapse : texts.expand;

    return (
      <button
        ref={ref}
        type="button"
        className={styles.collapse}
        onClick={onClick}
        title={buttonText}
        data-ui-sidebar-collapse-button
      >
        <div className={styles.arrow} data-expanded={isExpanded}>
          <Icon name="IconChevronArrowRightOutlined32" containerSize={32} htmlColor="var(--unique-white)" />
        </div>

        {isExpanded && (
          <Typography variant="Body1-Medium" className={styles['collapse-text']}>
            {buttonText}
          </Typography>
        )}
      </button>
    );
  }
);

CollapseButton.displayName = 'CollapseButton';

export default CollapseButton;
