import React, { FC } from 'react';

import { Typography } from '@components/index';
import { IProgressBarProps } from '@components/ProgressBar/types';
import clsx from 'clsx';

import styles from './ProgressBar.module.scss';

const ProgressBar: FC<IProgressBarProps> = ({ percentage = 0, label, className }) => {
  const validPercentage = Math.min(Math.max(percentage, 0), 100);

  if (percentage < 0) console.error(`Percentage must be a number more or equal 0`);

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles['progress']} role="progressBar">
        <div className={styles['progress-fill']} style={{ width: `${validPercentage}%` }} />
        {label && (
          <Typography className={styles['progress-label']} variant="Body1-Medium">
            {label}
          </Typography>
        )}
      </div>
      <Typography variant="Subheading3-Medium" className={styles['progress-percentage']}>
        {validPercentage}%
      </Typography>
    </div>
  );
};

export default ProgressBar;
