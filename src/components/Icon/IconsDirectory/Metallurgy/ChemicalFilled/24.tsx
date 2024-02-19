import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChemicalFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.75 4.25H6.5v-1.5h11v1.5h-2.25V9.5c0 .734.247 1.393.63 2.058.194.334.416.661.653 1l.175.246c.181.256.37.522.542.784.123.187.251.377.382.57 1.204 1.789 2.618 3.89 2.618 7.342v.75H3.75v-.75c0-3.453 1.414-5.553 2.618-7.341.13-.194.259-.384.382-.571a28 28 0 0 1 .542-.784l.175-.247c.237-.338.46-.665.652-1 .384-.664.631-1.323.631-2.057V4.25Zm1.5 0V9.5c0 1.093-.374 2.014-.832 2.807-.19.331-.4.646-.606.943h6.376a13.49 13.49 0 0 1-.607-.943c-.457-.793-.831-1.714-.831-2.807V4.25h-3.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconChemicalFilled24;
