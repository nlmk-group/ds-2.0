import React, {FC} from 'react';
import styles from './Rail.module.scss';
import clsx from 'clsx';
import {IControlRailProps} from './types';

export const Rail: FC<IControlRailProps> = ({maxPosition, minPosition, disabled}) => {
  return (
    <div className={clsx(styles.rail, disabled && styles['rail-disabled'])}>
      <div
        className={clsx(
          styles['inner-rail'],
          disabled && styles['inner-rail-disabled']
        )}
        style={{ left: `${minPosition}%`, right: `${100 - maxPosition}%` }}
      />
    </div>
  )
}