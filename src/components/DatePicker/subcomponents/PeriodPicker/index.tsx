import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

import { LEVEL_MAPPING_ENUM } from '@components/DatePicker/helpers';
import { PeriodPickerProps } from '@components/DatePicker/subcomponents/PeriodPicker/types';
import {
  DatePickerArrowDownSvgIcon,
  DatePickerArrowLeftSvgIcon,
  DatePickerArrowRightSvgIcon
} from '@components/Icon/icons_internal';
import clsx from 'clsx';

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
      <DatePickerArrowLeftSvgIcon data-testid="left-panel-icon" className={styles.icon} onClick={onLeftClick} />
      <div data-testid="level-switcher" className={styles.content} onClick={handleClick}>
        <div className={styles.contentText}>{children}</div>
        {shouldShowIcon && <DatePickerArrowDownSvgIcon className={styles.icon} />}
      </div>
      <DatePickerArrowRightSvgIcon data-testid="right-panel-icon" className={styles.icon} onClick={onRightClick} />
    </div>
  );
};

export default PeriodPicker;
