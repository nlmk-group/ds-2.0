import React, { FC } from 'react';

import { Icon } from '@components/index';
import clsx from 'clsx';

import { IMultiTagProps } from './types';

import styles from './MultiTag.module.scss';

const MultiTag: FC<IMultiTagProps> = ({ label, onRemove, className, disabled }) => {
  return (
    <div className={clsx(styles.tag, className, disabled && styles.disabled)} data-ui-multi-tag>
      <span className={styles.label}>{label}</span>
      {!disabled && (
        <button
          type="button"
          className={styles.removeButton}
          onClick={onRemove}
          aria-label={`Удалить ${label}`}
          data-ui-multi-tag-remove
        >
          <Icon name="IconCancelOutlined16" containerSize={16} />
        </button>
      )}
    </div>
  );
};

export default MultiTag;