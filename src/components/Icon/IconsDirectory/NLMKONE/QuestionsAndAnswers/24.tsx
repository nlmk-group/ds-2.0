import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconQuestionsAndAnswers24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M5 4h1.874a6.153 6.153 0 0 0-.962 2H5a1 1 0 0 0-1 1v11.495l1.484-1.561A3 3 0 0 1 7.659 16h1.1a3.235 3.235 0 0 0 .501 2h-1.6a1 1 0 0 0-.725.311l-2.346 2.47C3.654 21.763 2 21.103 2 19.748V7a3 3 0 0 1 3-3Zm12.242 0c.44.58.77 1.25.947 2H19a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3.76a3.235 3.235 0 0 1-.501 2H19a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1.758ZM9.239 5.072C9.947 4.363 10.923 4 11.999 4c2.103 0 3.834 1.442 3.834 3.267 0 .894-.23 1.589-.616 2.157-.351.515-.807.879-1.141 1.146l-.035.027c-.371.298-.604.493-.772.74-.144.21-.27.507-.27 1.03V13.5h-2v-1.133c0-.894.23-1.59.617-2.157.351-.515.807-.88 1.141-1.147l.035-.027c.371-.297.604-.493.772-.739.144-.211.27-.508.27-1.03C13.833 6.825 13.297 6 12 6c-.623 0-1.064.203-1.347.486-.283.283-.487.725-.487 1.347h-2c0-1.077.364-2.052 1.073-2.76ZM12 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconQuestionsAndAnswers24;
