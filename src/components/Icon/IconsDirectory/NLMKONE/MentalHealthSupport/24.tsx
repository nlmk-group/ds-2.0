import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMentalHealthSupport24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g fill={htmlColor || 'currentColor'} clipPath="url(#a)">
        <path d="M18.497 5.898v3h-1.8v-3h1.8Zm.102-1.998c0-.552-.45-1.002-1.002-1.002s-1.002.45-1.002 1.002.45 1.002 1.002 1.002 1.002-.45 1.002-1.002Z" />
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M11.699 5.898A5.897 5.897 0 0 1 17.597 0a5.897 5.897 0 0 1 5.898 5.898 5.897 5.897 0 0 1-5.898 5.898 5.897 5.897 0 0 1-5.898-5.898ZM17.597 1.8a4.1 4.1 0 0 0-4.098 4.098 4.1 4.1 0 0 0 4.098 4.098 4.1 4.1 0 0 0 4.098-4.098A4.1 4.1 0 0 0 17.597 1.8Z"
          clipRule="evenodd"
        />
        <path d="M8.925 5.375C7.289 5.757 6.34 6.72 5.773 7.851c-.585 1.168-.76 2.522-.76 3.567v.324l-1.858 2.564H5.56v3.775c0 .063.008.16.033.266a.967.967 0 0 0 .101.266.298.298 0 0 0 .09.105c.013.008.05.03.145.03h4.557v3.054H16.7V14.1h1.998v9.7H8.488v-3.054H5.93c-.963 0-1.604-.522-1.954-1.115a3.152 3.152 0 0 1-.413-1.55v-1.777h-1.19c-1.305 0-2.06-1.48-1.295-2.537l1.941-2.679c.035-1.188.262-2.723.968-4.132.791-1.58 2.185-2.99 4.484-3.526l.454 1.945Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconMentalHealthSupport24;
