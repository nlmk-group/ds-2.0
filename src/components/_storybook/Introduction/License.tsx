import { Typography } from '@components/index';
import React from 'react';

import styles from './Welcome.module.scss';

const License = () => (
  <div style={{ textAlign: 'center' }}>
    <Typography variant="Body1" color="textSecondary">
        Лицензия: <a href="https://opensource.org/license/mit/" target="_blank" className={styles.license}>MIT</a>.
    </Typography>
  </div>
)

export default License;