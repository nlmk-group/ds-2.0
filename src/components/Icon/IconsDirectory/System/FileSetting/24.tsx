import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileSetting24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.703 2h5.187v7.427h6.733v1.546a6.063 6.063 0 0 0-3.406.613v-.546H7.406v1.809h5.121a6.04 6.04 0 0 0-1.174 1.807H7.406v1.809h3.505a5.99 5.99 0 0 0 .842 3.616H5.694C4.758 20.08 4 19.267 4 18.273V3.808C4 2.814 4.766 2 5.703 2Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="m12.912 2.422 4.702 4.992h-4.702V2.422Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.826 13.034a4.49 4.49 0 0 0-1.74 0 1.61 1.61 0 0 1-.832 1.152c-.448.245-.99.284-1.471.105-.39.414-.687.9-.871 1.426.404.305.64.768.64 1.257 0 .49-.235.952-.64 1.257.183.527.48 1.013.87 1.427a1.786 1.786 0 0 1 1.472.105c.448.244.755.668.832 1.153a4.49 4.49 0 0 0 1.74-.002 1.61 1.61 0 0 1 .832-1.151c.448-.245.99-.284 1.471-.105.39-.414.687-.9.871-1.426a1.576 1.576 0 0 1-.64-1.257c0-.49.235-.952.64-1.258a3.973 3.973 0 0 0-.87-1.426 1.786 1.786 0 0 1-1.472-.105 1.61 1.61 0 0 1-.832-1.152Zm.407 3.94c0 .668-.572 1.208-1.277 1.208s-1.277-.54-1.277-1.207.572-1.208 1.277-1.208 1.277.54 1.277 1.208Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFileSetting24;
