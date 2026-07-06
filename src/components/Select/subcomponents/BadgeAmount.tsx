import React, { FC } from 'react';

import { sizesMapping } from '@components/declaration';
import { Badge } from '@components/index';

import styles from '../Select.module.scss';

import { IBadgeAmount } from '../types';

const BadgeAmount: FC<IBadgeAmount> = ({ children }) => {
  return (
    <div data-testid="badge-amount" className={styles['badge-amount-wrapper']}>
      <Badge size={sizesMapping.s}>{children}</Badge>
    </div>
  );
};

export default BadgeAmount;
