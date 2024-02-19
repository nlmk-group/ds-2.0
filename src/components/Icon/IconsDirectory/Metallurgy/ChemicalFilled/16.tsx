import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChemicalFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.85 3.15H4v-1.3h8v1.3h-1.85V6.5c0 .424.171.823.463 1.263.146.22.31.435.489.666l.012.015c.169.22.352.457.511.699l.254.38c.804 1.192 1.771 2.628 1.771 4.977v.65H2.35v-.65c0-2.35.967-3.785 1.771-4.978.087-.129.172-.255.254-.38.159-.241.342-.478.511-.698l.012-.015c.178-.231.343-.446.49-.666.291-.44.462-.839.462-1.263V3.15Zm1.3 0V6.5c0 .794-.326 1.449-.679 1.981a8.74 8.74 0 0 1-.26.37H9.79a8.748 8.748 0 0 1-.26-.37c-.352-.532-.679-1.187-.679-1.98V3.15h-1.7Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconChemicalFilled16;
