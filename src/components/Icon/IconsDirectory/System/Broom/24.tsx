import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBroom24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M20.255 2a1.736 1.736 0 0 0-1.233.508l-6.887 6.886c-.006.006-.01.014-.017.02l-.02-.02a1.307 1.307 0 0 0-1.84 0l-1.253 1.253c-.058.059-.11.123-.156.192-1.813-.12-4.227.436-6.728 2.938a.417.417 0 0 0 0 .587l1.808 1.81a.416.416 0 0 0 .14.139l1.738 1.738a.416.416 0 0 0 .14.14l1.738 1.738a.416.416 0 0 0 .138.139l1.809 1.81a.417.417 0 0 0 .59 0c2.501-2.502 3.058-4.918 2.939-6.73.066-.046.13-.097.19-.155l1.252-1.254a1.306 1.306 0 0 0 0-1.84l-.022-.022c.007-.006.015-.01.021-.017l6.886-6.883a1.753 1.753 0 0 0 0-2.47A1.74 1.74 0 0 0 20.255 2Zm-.002.827a.908.908 0 0 1 .645.27.901.901 0 0 1 0 1.29l-6.883 6.886c-.006.006-.016.01-.022.015l-1.283-1.282c.006-.006.01-.015.016-.021l6.884-6.888a.904.904 0 0 1 .643-.27Zm-9.075 7.015c.118 0 .236.048.33.142l1.43 1.429.704.706a.4.4 0 0 0 .016.014l.356.356a.456.456 0 0 1 0 .661l-1.253 1.253a.487.487 0 0 1-.142.096.437.437 0 0 0-.031.009.475.475 0 0 1-.488-.105l-.002-.002-2.504-2.503a.482.482 0 0 1-.098-.514.48.48 0 0 1 .098-.148l1.254-1.252a.468.468 0 0 1 .33-.142ZM8.24 11.694c.138-.003.268.005.4.01.026.259.13.503.298.7.018.03.04.057.066.084l2.507 2.504c.211.208.488.338.783.366.067 1.496-.438 3.427-2.425 5.575l-1.23-1.23 1.578-1.578a.416.416 0 1 0-.588-.59l-1.58 1.58-1.289-1.288 1.58-1.58a.417.417 0 1 0-.59-.588l-1.58 1.579-1.288-1.29 1.579-1.578a.416.416 0 0 0-.301-.716.417.417 0 0 0-.29.126l-1.578 1.58-1.233-1.233c1.96-1.814 3.746-2.395 5.18-2.433Z"
      />
    </svg>
  );
};

export default IconBroom24;
