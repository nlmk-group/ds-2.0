import React from 'react';

import { Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';

import styles from '../Pagination.module.scss';

const EmptyButton = () => (
  <div className={styles.btn}>
    <Typography variant={ETypographyVariants['Body1Mono-Medium']} color="var(--steel-90)" className={styles.btnTitle}>
      ...
    </Typography>
  </div>
);

export default EmptyButton;
