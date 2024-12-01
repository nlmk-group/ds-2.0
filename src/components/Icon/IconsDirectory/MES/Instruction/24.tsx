import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInstruction24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.111 6.09a.864.864 0 0 0-.418 1.676L8.75 8.782a.864.864 0 0 0 .418-1.676L5.11 6.09ZM5.111 9.646a.864.864 0 0 0-.418 1.676l4.056 1.016a.864.864 0 0 0 .418-1.676L5.11 9.646ZM5.111 13.202a.864.864 0 0 0-.418 1.676l4.056 1.016a.864.864 0 0 0 .418-1.676L5.11 13.202ZM19.305 7.766a.864.864 0 0 0-.418-1.676l-4.055 1.016a.864.864 0 0 0 .418 1.676l4.055-1.016ZM19.305 11.322a.864.864 0 0 0-.418-1.676l-4.055 1.016a.864.864 0 0 0 .418 1.676l4.055-1.016ZM19.305 14.878a.864.864 0 0 0-.418-1.676l-4.055 1.016a.864.864 0 0 0 .418 1.676l4.055-1.016Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M1.315 2.196A.864.864 0 0 0 1 2.864v15.24a.865.865 0 0 0 .872.864h.05l.165.001c.147.002.365.008.643.021.557.026 1.35.082 2.291.202 1.886.24 4.328.732 6.624 1.731a.86.86 0 0 0 .71 0c2.296-.999 4.738-1.49 6.624-1.731.94-.12 1.734-.176 2.29-.202a20.616 20.616 0 0 1 .81-.022h.05a.861.861 0 0 0 .871-.864V2.864a.865.865 0 0 0-1.03-.847L12 4.015 2.03 2.017a.86.86 0 0 0-.715.179Zm9.823 16.668V5.604L2.724 3.917v13.344l.087.004a30.8 30.8 0 0 1 2.428.213c1.663.212 3.78.615 5.9 1.386Zm7.623-1.386c-1.663.212-3.78.615-5.9 1.386V5.604l8.415-1.687v13.344l-.087.004a30.8 30.8 0 0 0-2.428.213Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInstruction24;
