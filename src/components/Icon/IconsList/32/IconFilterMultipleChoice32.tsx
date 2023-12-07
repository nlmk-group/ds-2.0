import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterMultipleChoice32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M28 10.684H17.2V13.084H28V10.684ZM28 20.284H17.2V22.684H28V20.284ZM8.248 15.484L4 11.236L5.692 9.544L8.236 12.088L13.324 7L15.016 8.692L8.248 15.484ZM8.248 25.084L4 20.836L5.692 19.144L8.236 21.688L13.324 16.6L15.016 18.292L8.248 25.084Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterMultipleChoice32;
