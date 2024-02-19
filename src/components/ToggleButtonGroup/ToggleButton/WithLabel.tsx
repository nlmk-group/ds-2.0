import React, { FC, ReactElement } from 'react';
import styles from '../ToggleButtonGroup.module.scss';
import { Typography } from '@components/index';

export const WithLabel: FC<{children: string | ReactElement}> = ({ children }) => {

  return (
    <div className={styles['label-wrapper']}>
      <Typography variant='Body1-Bold'>
        {children}
      </Typography>
    </div>
  )
}

export default WithLabel
