import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChemical24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.61882 4H17.9938V6H15.7438V10C15.7438 11.603 16.579 12.7112 17.6903 14.1858L17.7091 14.2106C18.7927 15.6485 20.0771 17.3865 20.0771 20V21H5.07715V20C5.07715 17.7091 6.1607 15.9952 7.08175 14.5384C7.09709 14.5141 7.11239 14.4899 7.12763 14.4658C8.09293 12.9383 8.86882 11.6709 8.86882 10V6H6.61882V4ZM10.8688 6V10C10.8688 12.2909 9.78526 14.0048 8.86421 15.4616C8.84887 15.4859 8.83358 15.5101 8.81833 15.5342C8.0546 16.7428 7.40944 17.7884 7.1733 19H17.9887C17.7395 17.6344 16.992 16.5822 16.1119 15.4144C16.066 15.3535 16.0196 15.2921 15.9728 15.2302C14.9524 13.8812 13.7438 12.2833 13.7438 10V6H10.8688Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5771 15.5H8.57715V13.5H16.5771V15.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChemical24;
