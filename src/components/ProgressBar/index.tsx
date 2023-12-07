import React, { FC } from 'react';

import { Typography } from '@components/index';
import { IProgressBarProps } from '@components/ProgressBar/types';

import styles from './ProgressBar.module.scss';

const ProgressBar: FC<IProgressBarProps> = ({ percentage = 0, label }) => {
  const validPercentage = Math.min(Math.max(percentage, 0), 100);
  return (
    <div className={styles.root}>
      <div className={styles['progress']} role="progressBar">
        <div className={styles['progress-fill']} style={{ width: `${validPercentage}%` }} />
        {label && (
          <Typography className={styles['progress-label']} variant="Body1-Medium">
            {label}
          </Typography>
        )}
      </div>
      <Typography variant="Subheading3-Medium" className={styles['progress-percentage']}>
        {percentage}%
      </Typography>
    </div>
  );
};

export default ProgressBar;
