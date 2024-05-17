import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

import { LEVEL_MAPPING_ENUM } from '@components/DatePicker/helpers';
import { PeriodPickerProps } from '@components/DatePicker/subcomponents/PeriodPicker/types';
import clsx from 'clsx';
import {
  Button,
  IconChevronArrowLeftOutlined24,
  IconChevronArrowRightOutlined24,
  IconChevronArrowDownOutlined24,
  Typography
} from '@components/.'

import styles from './PeriodPicker.module.scss';

export const PeriodPicker: FC<PeriodPickerProps & PropsWithChildren> = ({
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
        className={styles['btn-icon-arrow']}
        onClick={onLeftClick} 
        fill='clear'
        variant='grey'
        iconButton={<IconChevronArrowLeftOutlined24 data-testid="left-panel-icon"/>}
      />
      <div data-testid="level-switcher" className={styles.content} onClick={handleClick}>
        <div className={styles.contentText}>
          <Typography variant='Body1-Medium'>
            {children}
          </Typography>
        </div>
        {shouldShowIcon && (
          <Button
            className={styles['btn-icon-arrow']}
            onClick={onLeftClick} 
            fill='clear'
            iconButton={<IconChevronArrowDownOutlined24 data-testid="left-panel-icon"/>}
          />
        )}
      </div>
      <Button
        className={styles['btn-icon-arrow']}
        onClick={onRightClick} 
        fill='clear'
        variant='grey'
        iconButton={<IconChevronArrowRightOutlined24 data-testid="left-panel-icon"/>}
      />
    </div>
  );
};

export default PeriodPicker;
