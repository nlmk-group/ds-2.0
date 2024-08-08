import React, { FC } from 'react';

import { customInputColors } from '@components/declaration';
import { Typography } from '@components/index';
import clsx from 'clsx';

import type { IPseudoInputProps } from './types';

import styles from './PseudoInput.module.scss';

const PseudoInput: FC<IPseudoInputProps> = ({
  label,
  children,
  size = 'm',
  labelColor = customInputColors.default
}) => {
  const compact = size === 's';
  const colorClassName = styles[labelColor as keyof typeof styles];

  return (
    <div className={styles.root}>
      <Typography variant={compact ? 'Caption-Medium' : 'Body2-Medium'} className={clsx(styles.label, colorClassName)}>
        {label}
      </Typography>
      <Typography variant={compact ? 'Caption-Bold' : 'Body1-Medium'} color="var(--steel-90)" className={styles.text}>
        {children}
      </Typography>
    </div>
  );
};

export default PseudoInput;
