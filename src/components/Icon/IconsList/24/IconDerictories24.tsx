import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDerictories24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.8916 18.7148H18.3281C19.6465 18.7148 20.4082 17.9531 20.4082 16.4443V8.73193C20.4082 7.22314 19.6392 6.46875 18.1084 6.46875H10.9819C10.4839 6.46875 10.1909 6.34424 9.82471 6.03662L9.37793 5.66309C8.89453 5.26025 8.51367 5.12109 7.7959 5.12109H5.61328C4.33154 5.12109 3.5918 5.85352 3.5918 7.33301V16.4443C3.5918 17.9604 4.36084 18.7148 5.8916 18.7148ZM4.771 7.3916C4.771 6.6665 5.15186 6.30029 5.85498 6.30029H7.48828C7.979 6.30029 8.27197 6.41748 8.64551 6.73975L9.09229 7.10596C9.56836 7.50146 9.95654 7.64795 10.6816 7.64795H18.0938C18.8188 7.64795 19.229 8.03613 19.229 8.79785V9.2373H4.771V7.3916ZM5.90625 17.5356C5.17383 17.5356 4.771 17.1475 4.771 16.3857V10.3433H19.229V16.3931C19.229 17.1475 18.8188 17.5356 18.0938 17.5356H5.90625Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDerictories24;
