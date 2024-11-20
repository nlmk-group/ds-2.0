import React from 'react';

import { Link, Typography } from '@components/index';

import styles from './Welcome.module.scss';

const License = () => (
  <div className={styles['license-wrapper']}>
    <Typography variant="Body1" color="textSecondary">
      Лицензия:{' '}
      <Link href="https://opensource.org/license/mit/" target="blank">
        MIT
      </Link>
      .
    </Typography>
  </div>
);

export default License;
