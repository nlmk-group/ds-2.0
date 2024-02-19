import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKPEFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.887 15.75c-.49 0-.801-.526-.573-.995a.638.638 0 0 1 .806-.33c.363.16.519.585.34.954a.638.638 0 0 1-.573.37Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11.163 6.735v-2.5a9.257 9.257 0 0 0-5.362 2.332l1.772 1.772a.712.712 0 1 1-1.007 1.007l-1.75-1.75a9.253 9.253 0 0 0-2.101 5.481h2.438a.712.712 0 0 1 0 1.424H2.76a9.258 9.258 0 0 0 2.33 5.208l1.476-1.476a.712.712 0 1 1 1.007 1.007l-.96.96h10.524l-.96-.96a.712.712 0 1 1 1.007-1.007l1.606 1.606a9.261 9.261 0 0 0 2.45-5.338h-2.642a.712.712 0 0 1 0-1.424h2.687A9.254 9.254 0 0 0 19.07 7.46l-1.886 1.886a.712.712 0 1 1-1.007-1.007l1.889-1.889a9.255 9.255 0 0 0-5.479-2.233v2.518a.712.712 0 0 1-1.424 0Zm2.534 9.286c.348-.715.266-1.626-.24-2.354a1.059 1.059 0 0 0-.206-.217l1.352-3.53c.136-.353.001-.764-.383-.925a.685.685 0 0 0-.905.4l-1.364 3.561-.064-.001c-.772 0-1.464.447-1.81 1.157-.363.747-.265 1.629.24 2.356.175.25.442.426.72.54a2.3 2.3 0 0 0 .85.17c.771 0 1.464-.447 1.81-1.157Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconKPEFilled24;
