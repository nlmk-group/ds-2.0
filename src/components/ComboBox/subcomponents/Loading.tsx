import React from 'react';

import { Spinner } from '@components/index';

import styles from '../ComboBox.module.scss';

export const Loading = () => {
  return (
    <div className={styles.loadingSpinner}>
      <Spinner />
    </div>
  );
};
