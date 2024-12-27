import React, { FC, ReactNode } from 'react';

import { Typography } from '@components/index';

import styles from '../ToggleButton.module.scss';

export const ToggleButtonLabel: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles['label-wrapper']}>
      <Typography variant="Body1-Bold">{children}</Typography>
    </div>
  );
};

export default ToggleButtonLabel;
