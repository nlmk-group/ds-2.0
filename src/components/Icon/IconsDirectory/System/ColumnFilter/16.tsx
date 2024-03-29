import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconColumnFilter16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m13.947 11.387-.615-.472c.012-.097.023-.19.023-.287 0-.098-.006-.19-.023-.288l.61-.471a.15.15 0 0 0 .034-.184l-.575-.995c-.034-.075-.11-.075-.184-.075l-.707.287a2.53 2.53 0 0 0-.49-.27l-.109-.76a.136.136 0 0 0-.132-.12h-1.15a.15.15 0 0 0-.15.12l-.11.76a2.956 2.956 0 0 0-.488.27l-.713-.287c-.064 0-.138 0-.179.075l-.575.995a.142.142 0 0 0 .035.184l.61.471a2.41 2.41 0 0 0 0 .575l-.61.472a.15.15 0 0 0-.035.184l.575.995c.035.075.11.075.179.075l.713-.287c.15.103.31.2.489.27l.11.76c.01.068.068.12.149.12h1.15a.146.146 0 0 0 .138-.12l.11-.76c.172-.075.327-.167.483-.27l.707.287c.075 0 .15 0 .19-.075l.575-.995a.15.15 0 0 0-.034-.184Zm-2.743.104a.858.858 0 0 1-.863-.863.862.862 0 1 1 1.726 0 .862.862 0 0 1-.863.863Zm-.219-9.364A.6.6 0 0 0 10.63 2H2.576a.6.6 0 0 0-.357.127.576.576 0 0 0-.097.805l2.755 3.526v2.945a.569.569 0 0 0 .167.477l2.306 2.307a.482.482 0 0 0 .201.126 4.017 4.017 0 0 1-.373-1.685c0-1.053.414-2.065 1.15-2.819V6.458l2.755-3.526a.576.576 0 0 0-.098-.805ZM7.178 6.055v4.331l-1.15-1.15V6.06l-2.28-2.91h5.706L7.178 6.054Z"
      />
    </svg>
  );
};

export default IconColumnFilter16;
