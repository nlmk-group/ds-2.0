import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsPartiallySecuredLater16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'var(--spectrum-yellow-50)'}
        d="M1.333 12.737v-6h5l7.282 6.16c.457.387.168 1.103-.444 1.103H2.666c-.736 0-1.333-.566-1.333-1.263Z"
      />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M2.666 5.158v7.578h10.667V5.159h1.333v7.579c0 .697-.597 1.263-1.333 1.263H2.666c-.736 0-1.333-.566-1.333-1.263v-7.58h1.333Z"
        clipRule="evenodd"
      />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M13.333 7.684H2.666V6.421h10.667v1.263Z"
        clipRule="evenodd"
      />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M12.519 12.737 5.99 7.684h.562l.344-.947 6.436 4.987v1.013h-.814Z"
        clipRule="evenodd"
      />
      <path
        fill={'var(--steel-10)'}
        d="M14.666 6.421c0 2.093-1.79 3.79-4 3.79-2.209 0-4-1.697-4-3.79s1.791-3.79 4-3.79c2.21 0 4 1.697 4 3.79Z"
      />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M10.662 2C8.086 2 6 3.98 6 6.421c0 2.44 2.086 4.421 4.662 4.421 2.58 0 4.671-1.98 4.671-4.421 0-2.44-2.09-4.421-4.671-4.421Zm.004 7.958c-2.062 0-3.733-1.583-3.733-3.537s1.67-3.537 3.733-3.537S14.4 4.467 14.4 6.421s-1.671 3.537-3.734 3.537ZM10.2 4.21h.7v2.32L13 7.713l-.35.544-2.45-1.393V4.211Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsPartiallySecuredLater16;
