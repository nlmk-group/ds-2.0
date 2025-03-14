import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUncheck32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m4.119 26.68-2.72 2.719 1.203 1.202 2.719-2.72c.212.077.44.119.679.119h20a2 2 0 0 0 2-2V6c0-.238-.042-.467-.118-.68l2.72-2.719L29.399 1.4l-2.72 2.72A1.997 1.997 0 0 0 26 4H6a2 2 0 0 0-2 2v20c0 .239.042.468.119.68Zm3.384-.98H25.7V7.503L7.503 25.7ZM24.498 6.3 6.3 24.498V6.3h18.198Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconUncheck32;
