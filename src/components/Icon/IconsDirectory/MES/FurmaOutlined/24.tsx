import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFurmaOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M17.571 2.04a2 2 0 0 0-2.296 1.348l-2.62 8.149a2 2 0 0 0-2.19-.804l-7 1.945A2 2 0 0 0 2 14.605v2.48a2 2 0 0 0 1.465 1.927l7 1.944A2 2 0 0 0 13 19.03v-.184h2.586A2 2 0 0 0 17 18.259l1.526-1.526a2 2 0 0 0 .506-.854l.697-2.39 2.087-.696a1 1 0 1 0-.632-1.897l-.774.258 1.745-5.983a2 2 0 0 0-1.528-2.52l-3.056-.612ZM17.18 4l3.056.611-3.123 10.708-1.526 1.526H13a2 2 0 0 0-2 2v.184l-7-1.945v-2.48l7-1.944v.995c0 1.711 2.405 2.088 2.928.46L17.178 4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFurmaOutlined24;
