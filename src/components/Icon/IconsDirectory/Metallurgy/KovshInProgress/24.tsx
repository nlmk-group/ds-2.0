import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovshInProgress24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.25 8.668a1.75 1.75 0 1 0 1.5 0V3.657L9.332 2.432l-.98 1.135.547.473-5.015 5.015a2.75 2.75 0 0 0 0 3.89l3.671 3.671a2.75 2.75 0 0 0 3.89 0L16.5 11.56l.384.384c.234.235.366.553.366.884v7.422h-1V16h-1.5v4.25H4v1.5h16v-1.5h-1.25v-7.422c0-.729-.29-1.428-.805-1.944L15.03 7.97l-1.06 1.06 1.47 1.47-5.056 5.055a1.25 1.25 0 0 1-1.768 0l-3.672-3.671a1.25 1.25 0 0 1 0-1.768L9.25 5.811v2.857Z"
      />
    </svg>
  );
};

export default IconKovshInProgress24;
