import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

import { LEVEL_MAPPING_ENUM } from '@components/DatePicker/helpers';
import {
  Button,
  IconChevronArrowDownOutlined24,
  IconChevronArrowLeftOutlined24,
  IconChevronArrowRightOutlined24,
  Typography
} from '@components/index';
import clsx from 'clsx';

import { IPeriodPickerProps } from './types';

import styles from './PeriodPicker.module.scss';

export const PeriodPicker: FC<IPeriodPickerProps & PropsWithChildren> = ({
  disableContent,
  onContentClick,
  onLeftClick,
  onRightClick,
  children,
  isHideYear,
  selectedPanel
}) => {
  const handleClick =
    disableContent || (isHideYear && selectedPanel === LEVEL_MAPPING_ENUM.month) ? undefined : onContentClick;

  const [shouldShowIcon, setShouldShowIcon] = useState(
    !disableContent && !(isHideYear && selectedPanel === LEVEL_MAPPING_ENUM.month)
  );

  useEffect(() => {
    setShouldShowIcon(!disableContent && !(isHideYear && selectedPanel === LEVEL_MAPPING_ENUM.month));
  }, [disableContent, isHideYear, selectedPanel]);

  return (
    <div className={clsx(styles.root, disableContent && styles.disableContent)}>
      <Button
        type="button"
        className={styles['btn-icon-arrow']}
        onClick={onLeftClick}
        color="ghost"
        variant="secondary"
        iconButton={<IconChevronArrowLeftOutlined24 data-testid="left-panel-icon" />}
      />
      <div data-testid="level-switcher" className={styles.content} onClick={handleClick}>
        <div className={styles.contentText}>
          <Typography variant="Body1-Medium" color="var(--steel-90)">
            {children}
          </Typography>
        </div>
        {shouldShowIcon && (
          <Button
            type="button"
            className={styles['btn-icon-middle']}
            onClick={onLeftClick}
            color="ghost"
            variant="secondary"
            iconButton={<IconChevronArrowDownOutlined24 data-testid="middle-panel-icon" />}
          />
        )}
      </div>
      <Button
        type="button"
        className={styles['btn-icon-arrow']}
        onClick={onRightClick}
        color="ghost"
        variant="secondary"
        iconButton={<IconChevronArrowRightOutlined24 data-testid="right-panel-icon" />}
      />
    </div>
  );
};

export default PeriodPicker;
