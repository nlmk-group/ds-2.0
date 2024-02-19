import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetalOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m17.008 5.951-2.792-1.987a.62.62 0 0 0-.348-.114h-.009a.603.603 0 0 0-.272.07l-5.6 2.99a.647.647 0 0 0-.289.325l-2.8 6.974a.678.678 0 0 0 .09.66l4.666 6.045.012.014a.601.601 0 0 0 .468.222h5.6c.238 0 .452-.14.554-.36l2.8-6.045.003-.005a.688.688 0 0 0 .04-.44l-1.865-7.964a.659.659 0 0 0-.258-.385Zm-5.884 5.345L9.132 7.753l4.118-2.198V8.27l-2.126 3.026Zm4.443-4.805-1.084.771V5.72l1.084.771Zm-3.46 5.587 2.193-3.12 1.98-1.409 1.41 6.018-5.582-1.49Zm-5.54 1.307 1.791-4.46 1.791 3.186-3.581 1.274Zm4.263 6.472.764-6.579 6.053 1.615-2.3 4.964H10.83Zm-1.133-.945-3.193-4.136 3.832-1.363-.639 5.499Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMetalOutlined24;
