import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconQuestionMarkFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.05 7.521C8.205 4.041 11.369 1 15.985 1c3.774 0 6.465 1.745 7.856 4.032l.001.002c.6.991 1.052 2.365 1.143 3.817.09 1.46-.182 3.074-1.124 4.479l-.001.002c-.916 1.358-1.75 2.133-2.458 2.79l-.074.069c-.702.652-1.248 1.179-1.768 2.141-.153.284-.231.459-.289.785-.066.375-.104.956-.104 2.04v1h-6.22l-.013-.986-.01-.397c-.035-1.13-.095-3.05.837-4.741.755-1.369 1.677-2.272 2.516-3.03l.375-.337c.69-.616 1.254-1.121 1.72-1.79l.002-.004c.464-.661.577-1.655.223-2.464-.32-.732-1.072-1.414-2.598-1.414-1.822 0-2.79 1.35-3.254 2.76l-.339 1.033-5.644-2.39.29-.876Zm5.019 19.532c0-2.168 1.76-3.948 3.93-3.948 2.168 0 3.929 1.78 3.929 3.948 0 2.167-1.76 3.947-3.93 3.947-2.169 0-3.93-1.78-3.93-3.947Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconQuestionMarkFilled32;
