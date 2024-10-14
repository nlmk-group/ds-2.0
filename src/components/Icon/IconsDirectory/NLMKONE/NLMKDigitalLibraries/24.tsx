import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNLMKDigitalLibraries24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="m21.67 7.26-.02-.01-.03-.02-.08-.07a6.696 6.696 0 0 0-1.38-.81c-.33-.16-.73-.3-1.16-.43V5c0-2.21-1.79-4-4-4H7C4.79 1 3 2.79 3 5v14c0 2.21 1.79 4 4 4h8c2.2 0 3.98-1.78 4-3.97.12.04.24.09.34.13.36.16.62.32.79.43l.17.13.03.03c.29.26.71.32 1.07.16.37-.16.6-.52.6-.91V8a1 1 0 0 0-.33-.74ZM5 5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v.55c-.32-.03-.65-.06-1-.06-1.82 0-3.21.41-4.16.84-.35.16-.61.31-.84.45-.23-.14-.49-.29-.84-.44C9.21 5.91 7.82 5.5 6 5.5c-.35 0-.68.02-1 .05V5Zm0 2.55c.31-.03.64-.05 1-.05 1.51 0 2.62.34 3.34.66.28.13.5.25.66.35v8.76c-.94-.4-2.28-.77-4-.77-.35 0-.68.02-1 .05v-9ZM17 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.45c.31-.03.64-.05 1-.05 1.51 0 2.62.34 3.34.66.36.16.62.32.79.43l.18.13.03.03c.29.26.71.32 1.07.16.12-.05.21-.13.3-.21l-.04.05.03-.02.18-.13c.17-.11.43-.27.79-.43.72-.32 1.83-.66 3.34-.66.36 0 .69.02 1 .05V19H17Zm3-9.74v8.01c-.94-.4-2.28-.77-4-.77-.7 0-1.32.07-1.89.17-.83.14-1.55.36-2.11.6V8.51c.16-.1.38-.22.66-.35.72-.32 1.83-.66 3.34-.66 1.51 0 2.62.34 3.34.66.28.12.5.25.66.35v.75Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNLMKDigitalLibraries24;
