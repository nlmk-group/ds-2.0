import React, { FC } from 'react';

import { COLORS_MAPPING_ENUM, VARIANTS_MAPPING_ENUM } from '@components/Typography/constants';
import { ITypography } from '@components/Typography/types';
import clsx from 'clsx';

import styles from './Typography.module.scss';

const Typography: FC<ITypography> = ({ variant = 'Body1', color = 'inherit', children, className, ...props }) => {
  return (
    <span
      className={clsx(
        {
          [styles[`typography--variant-${VARIANTS_MAPPING_ENUM[variant]}` as keyof typeof styles]]: variant,
          [styles[`typography--color-${COLORS_MAPPING_ENUM[color]}` as keyof typeof styles]]: color
        },
        styles.typography,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Typography;
