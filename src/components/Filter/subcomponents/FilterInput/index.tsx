import React, { FC, useMemo, useRef } from 'react';

import { generateUUID } from '@components/declaration';
import { Icon, Typography } from '@components/index';
import clsx from 'clsx';

import { IFilterInputProps } from './types';

import styles from './FilterInput.module.scss';

const FilterInput: FC<IFilterInputProps> = ({
  id,
  value,
  label,
  icon,
  reset = false,
  onReset,
  className,
  inputRef,
  ...props
}) => {
  const defaultRef = useRef<HTMLInputElement>(null);
  const ref = inputRef || defaultRef;
  id = useMemo(() => `FilterInput-${(id && id.toString()) || generateUUID()}`, [id]);

  const hasResetFeature = reset && onReset;
  const hasValue = Boolean(value && value.length > 0);
  const isEnabled = !props.disabled;
  const isResetIconVisible = hasResetFeature && hasValue && isEnabled;

  const isCustomIconVisible = Boolean(icon);

  return (
    <div className={clsx(styles.filterInput, className)} data-ui-filter-input>
      {isCustomIconVisible && (
        <div className={styles.icon} data-ui-input-custom-icon>
          {icon}
        </div>
      )}
      <input ref={ref} id={id} className={styles.textfield} data-ui-textfield value={value} {...props} />
      {label && (
        <label className={styles.label} htmlFor={id} data-ui-input-label>
          <Typography variant="Body2-Medium" className={styles.typography}>
            {label}
          </Typography>
        </label>
      )}
      {isResetIconVisible && (
        <div className={styles.reset} data-ui-input-reset-icon data-testid="RESET_ICON" onClick={onReset}>
          <Icon htmlColor="var(--steel-70)" containerSize={24} name="IconCloseOutlined24" />
        </div>
      )}
    </div>
  );
};

export default FilterInput;
