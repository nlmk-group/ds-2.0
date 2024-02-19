import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFactory32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.101 1.418a.938.938 0 0 1-.26 1.3l-1.22.814A2.093 2.093 0 0 1 9.98 3.27a.218.218 0 0 0-.275-.027l-1.22.814a.938.938 0 0 1-1.04-1.56l1.22-.814a2.093 2.093 0 0 1 2.64.261.218.218 0 0 0 .275.028l1.221-.814a.938.938 0 0 1 1.3.26Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.688 19.482c0-.591.48-1.071 1.07-1.071h3.75c.593 0 1.072.48 1.072 1.071v7.098c0 .592-.48 1.072-1.071 1.072h-3.75c-.592 0-1.072-.48-1.072-1.072v-7.098Zm1.875.804v5.49h2.142v-5.49H7.562Zm6.562-1.876c-.592 0-1.071.48-1.071 1.072v7.098c0 .592.48 1.072 1.071 1.072h3.75c.592 0 1.071-.48 1.071-1.072v-7.098c0-.591-.48-1.071-1.071-1.071h-3.75Zm.804 7.367v-5.491h2.142v5.49H14.93Zm6.562-7.367c-.592 0-1.071.48-1.071 1.072v7.098c0 .592.48 1.072 1.071 1.072h3.75c.592 0 1.072-.48 1.072-1.072v-7.098c0-.591-.48-1.071-1.072-1.071h-3.75Zm.804 7.367v-5.491h2.142v5.49h-2.142Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m1.95 15.09 1.724-9.198a1.071 1.071 0 0 1 1.053-.874h3.796c.515 0 .958.367 1.053.874l1.72 9.17h18.499c.665 0 1.205.54 1.205 1.206v13.527C31 30.46 30.46 31 29.795 31H2.205C1.54 31 1 30.46 1 29.795V16.268c0-.578.407-1.06.95-1.178Zm1.912-.027 1.532-8.17h2.462l1.532 8.17H3.862Zm-.987 14.062V16.938h26.25v12.187H2.875Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFactory32;
