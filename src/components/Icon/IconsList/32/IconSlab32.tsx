import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconSlab32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.331 4.13702C18.6662 3.95405 19.0772 3.95434 19.4121 4.1378L27.4503 8.54147C27.7902 8.72768 27.9999 9.07422 27.9999 9.44954V14.5489C28 14.5577 28 14.5665 27.9999 14.5753V19.2477C27.9999 19.6241 27.7889 19.9715 27.4475 20.1573L13.285 27.8637C12.9429 28.0499 12.5226 28.045 12.1853 27.851L4.5299 23.4473C4.20132 23.2583 4.00027 22.9178 4.00027 22.5505V17.8879C3.99991 17.8726 3.99991 17.8572 4.00027 17.8417V12.5688C4.00027 12.1929 4.21065 11.846 4.55134 11.66L18.331 4.13702ZM6.18205 19.7131V21.9583L12.7618 25.7432L25.8181 18.6387V16.3592L13.2849 23.1791C12.9428 23.3653 12.5225 23.3604 12.1852 23.1663L6.18205 19.7131ZM25.8181 13.954L12.7617 21.0586L6.18205 17.2737V13.1768L18.8699 6.24994L25.2046 9.72037L12.7932 16.339L8.36397 13.5174L8.36384 16.0275L12.1479 18.435C12.4872 18.6485 12.9221 18.6638 13.2768 18.4746L25.8181 11.7867V13.954Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSlab32;
