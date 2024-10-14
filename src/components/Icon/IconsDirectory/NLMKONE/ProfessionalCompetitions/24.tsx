import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProfessionalCompetitions24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12.857 1.484a1 1 0 0 0-1.714 0L10.045 3.31l-2.075.48a1 1 0 0 0-.53 1.63l1.397 1.609-.184 2.122a1 1 0 0 0 1.386 1.007L12 9.326l1.961.83a1 1 0 0 0 1.386-1.006l-.184-2.122 1.396-1.609a1 1 0 0 0-.53-1.63l-2.074-.48-1.098-1.825Zm-1.317 3.22.46-.765.46.764a1 1 0 0 0 .631.459l.869.201-.585.674a1 1 0 0 0-.24.742l.076.888-.82-.348a1 1 0 0 0-.781 0l-.821.348.077-.888a1 1 0 0 0-.241-.742l-.585-.674.869-.201a1 1 0 0 0 .631-.459ZM9 11a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-5v-5a1 1 0 0 0-1-1H9Zm5 7v3h-4v-8h4v5Zm6 3h-4v-2h4v2ZM8 21v-4H4v4h4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconProfessionalCompetitions24;
