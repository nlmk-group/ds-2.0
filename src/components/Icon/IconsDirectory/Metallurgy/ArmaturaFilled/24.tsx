import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArmaturaFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M20.251 4.867c2.167 2.167 2.944 4.904 1.735 6.112-1.209 1.21-3.945.433-6.112-1.734-2.167-2.167-2.944-4.903-1.735-6.112 1.21-1.209 3.946-.433 6.112 1.734Zm-6.683 14.524 6.377-6.367a6.006 6.006 0 0 1-1.066-.203c-1.395-.396-2.836-1.286-4.066-2.515a11.167 11.167 0 0 1-1.245-1.478v10.563Zm-1.5-14.196L9.023 8.236v14.262c.743.095 1.47-.035 1.995-.56l1.05-1.049V5.195Zm-8.902 8.89 4.357-4.351v12.304c-.895-.418-1.8-1.077-2.59-1.867-.96-.96-1.724-2.087-2.102-3.16-.36-1.028-.411-2.18.335-2.926Z"
      />
    </svg>
  );
};

export default IconArmaturaFilled24;
