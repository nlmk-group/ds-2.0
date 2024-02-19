import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDataOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.53 11.937H3v2.034h3.69a14.446 14.446 0 0 1-.16-2.034Zm.668-3.165a6.596 6.596 0 0 0-.608 2H3v-2h4.198ZM10.49 5.59a6.751 6.751 0 0 0-2.552 2H3v-2h7.49Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.263 6.227c-3.025 0-5.49 2.435-5.49 5.455s2.465 5.454 5.49 5.454c.987 0 1.915-.26 2.717-.714l3.315 3.288a1 1 0 0 0 1.408-1.42l-3.186-3.16a5.407 5.407 0 0 0 1.236-3.448c0-3.02-2.465-5.455-5.49-5.455Zm-3.49 5.455c0-.092.003-.183.01-.273h3.48v-2h-2.628a3.494 3.494 0 0 1 2.628-1.182c1.935 0 3.49 1.554 3.49 3.455 0 1.9-1.555 3.454-3.49 3.454-.695 0-1.34-.2-1.883-.545h1.883v-2H9.895a3.422 3.422 0 0 1-.122-.91Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSourceDataOutlined24;
