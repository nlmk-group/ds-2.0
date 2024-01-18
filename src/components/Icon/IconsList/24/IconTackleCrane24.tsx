import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTackleCrane24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2499 2V6.92383H11.9999C12.4702 6.92383 12.9299 7.06328 13.3209 7.32456C13.7119 7.58583 14.0167 7.95719 14.1967 8.39168C14.3767 8.82616 14.4237 9.30426 14.332 9.7655C14.2402 10.2267 14.0138 10.6504 13.6812 10.983C13.3487 11.3155 12.925 11.542 12.4638 11.6337C12.0025 11.7255 11.5244 11.6784 11.09 11.4984C10.6555 11.3184 10.2841 11.0137 10.0228 10.6226C9.76156 10.2316 9.6221 9.7719 9.6221 9.30162H8.1221C8.1221 10.0686 8.34953 10.8183 8.77563 11.456C9.08144 11.9137 9.47974 12.2989 9.9422 12.5884L7.99988 17.25H2V18.75H22V17.25H16.0001L14.0578 12.5883C14.3044 12.4339 14.5341 12.2515 14.7419 12.0436C15.2842 11.5013 15.6535 10.8104 15.8032 10.0581C15.9528 9.30592 15.876 8.52623 15.5825 7.81765C15.289 7.10908 14.792 6.50345 14.1543 6.07735C13.7269 5.79182 13.2493 5.5955 12.7499 5.49705V2H11.2499ZM12.6558 13.1235C12.22 13.1983 11.7764 13.1977 11.3442 13.1236L9.62488 17.25H14.3751L12.6558 13.1235Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M2 21.75H22V20.25H2V21.75Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconTackleCrane24;
