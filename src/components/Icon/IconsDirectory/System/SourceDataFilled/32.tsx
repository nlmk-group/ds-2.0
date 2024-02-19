import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDataFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.691 5.472a10.605 10.605 0 0 0-2.572 2.17H2v-2.17h10.691Zm-5.012 7.283c.137-.754.352-1.48.635-2.17H2v2.17h5.679ZM2 15.698h5.515c.025.776.08 1.498.162 2.17H2v-2.17Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9.915 14.738c0 1.5.394 2.91 1.085 4.126v.027h.015c1.399 2.44 3.994 4.09 6.985 4.09 1.435 0 2.778-.38 3.942-1.044l5.485 5.61a1.5 1.5 0 0 0 2.145-2.098l-5.34-5.46a8.317 8.317 0 0 0 1.853-5.251c0-4.53-3.597-8.244-8.085-8.244-4.488 0-8.085 3.714-8.085 8.244Zm3.03-3.173h5.025v2.206h-5.814c.123-.616.282-1.079.79-2.206Zm-.531 5.17h5.556v2.206h-4.243c-.794-.915-1.082-1.535-1.313-2.206Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSourceDataFilled32;
