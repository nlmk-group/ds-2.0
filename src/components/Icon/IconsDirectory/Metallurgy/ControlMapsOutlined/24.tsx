import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconControlMapsOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.106 16.507a1.6 1.6 0 0 0 1.434-.92l10.805 3.203c.18.695.81 1.21 1.556 1.21.875 0 1.599-.725 1.599-1.616a1.64 1.64 0 0 0-.99-1.5l-.3-7.283a1.631 1.631 0 0 0 1.053-1.529c0-.89-.717-1.615-1.591-1.615a1.6 1.6 0 0 0-1.377.79l-5.98-1.66c0-.855-.717-1.587-1.591-1.587-.882 0-1.607.732-1.607 1.623 0 .478.208.913.538 1.21l-3.32 6.45c-.078-.015-.15-.015-.229-.015-.882 0-1.606.725-1.606 1.616 0 .891.724 1.623 1.606 1.623Zm4.618-9.26a1.58 1.58 0 0 0 1.283-.675l6.066 1.689a1.62 1.62 0 0 0 1.125 1.362l.259 7.196c-.474.145-.86.5-1.047.956L6.676 14.587a1.643 1.643 0 0 0-.401-.804l3.327-6.544c.035 0 .079.007.122.007Z"
      />
    </svg>
  );
};

export default IconControlMapsOutlined24;
