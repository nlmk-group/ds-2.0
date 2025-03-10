import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPentool16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.879 14H7.405a2.208 2.208 0 0 1-1.533-.615L2 9.578l1.098-.915c.329-.275.811-.33 1.199-.135l1.278.64V4.391c0-.69.594-1.25 1.326-1.25.09 0 .18.01.27.024C7.22 2.515 7.791 2 8.491 2c.457 0 .855.215 1.093.545.154-.06.324-.09.499-.09.732 0 1.326.56 1.326 1.25v.14c.085-.014.175-.024.265-.024.732 0 1.326.56 1.326 1.25V12C13 13.105 12.05 14 10.879 14ZM3.527 9.638l3.108 3.052c.202.194.478.31.764.31h3.48c.583 0 1.06-.45 1.06-1V5.07c0-.14-.116-.25-.265-.25-.148 0-.265.11-.265.25v2.926h-1.06V3.706c0-.14-.118-.25-.266-.25-.149 0-.265.11-.265.25v4.291H8.757V3.251c0-.14-.117-.25-.265-.25-.149 0-.265.11-.265.25v4.746H7.166V4.391c0-.14-.117-.25-.265-.25a.259.259 0 0 0-.266.25v6.438L3.798 9.413l-.27.225Z"
      />
    </svg>
  );
};

export default IconPentool16;
