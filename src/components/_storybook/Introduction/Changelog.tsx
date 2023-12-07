import React from 'react';

import { Typography } from '@components/index';

import styles from './Welcome.module.scss';

export const Changelog = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.main}>
        <div className={styles.description}>
          <Typography
            variant="Heading1"
            className={styles['description-header']}
          >
            История изменений уже в пути!
          </Typography>                   
        </div>        
      </div>
    </div>
  );
};
