import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPeopleCheckDoneFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9.842 4.91c0 1.606-1.319 2.908-2.947 2.908-1.629 0-2.948-1.302-2.948-2.909C3.947 3.302 5.267 2 6.895 2s2.947 1.302 2.947 2.91Zm-1.474 0c0-.8-.663-1.455-1.473-1.455S5.42 4.109 5.42 4.909c0 .8.663 1.455 1.474 1.455.81 0 1.473-.655 1.473-1.455Zm-5.894 7.272c.147-.458 1.893-1.222 3.654-1.411l1.504-1.455a6.972 6.972 0 0 0-.737-.043C4.927 9.273 1 10.247 1 12.182v1.454h6.632l-1.474-1.454H2.474Zm7.714-.24 3.78-3.76L15 9.207 10.188 14l-2.556-2.546 1.031-1.025 1.525 1.513Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPeopleCheckDoneFilled16;
