import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHillsView32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M27.519 22.613h1.314A1.18 1.18 0 0 1 30 23.807 1.18 1.18 0 0 1 28.833 25H3.167A1.18 1.18 0 0 1 2 23.806a1.18 1.18 0 0 1 1.167-1.193h1.251l4.221-9.595a1.62 1.62 0 0 1 3.006.065l.884 2.26 2.51-6.303c.563-1.411 2.528-1.379 3.045.05l2.708 7.48.207-.566c.493-1.346 2.309-1.468 2.97-.2l3.55 6.81Zm-4.54 0h2.424l-2.838-5.444-.783 2.136 1.198 3.308Zm-16.514 0h3.17l1.88-4.722-1.399-3.577-3.65 8.3Zm5.185 0h9.34L16.541 10.33 11.65 22.614Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHillsView32;
