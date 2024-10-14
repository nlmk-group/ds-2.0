import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportInWorkFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M19.5 22.5h-15A1.5 1.5 0 0 1 3 21V4.5A1.5 1.5 0 0 1 4.5 3h3.065a1.873 1.873 0 0 1 1.622-.938h.938c0-.62.84-1.124 1.875-1.124 1.036 0 1.875.503 1.875 1.125h.938A1.873 1.873 0 0 1 16.434 3H19.5A1.5 1.5 0 0 1 21 4.5V21a1.5 1.5 0 0 1-1.5 1.5ZM8.625 4.5c.29.662.766 1.306 1.688 1.313h3.374c.94.006 1.399-.65 1.688-1.313h-6.75Zm7.992 6.815c-.21-.596-.564-1.745-.78-2.398-.173-.524-.642-.389-.93.114l-.471.816a4.867 4.867 0 0 0-7.467 4.216l1.498-.375c-.017-.604.123-.844.448-1.407a3.375 3.375 0 0 1 4.61-1.235c.056.032.11.059.162.094l-.473.822c-.274.472-.133.957.373.852.679-.142 1.84-.394 2.468-.524a.745.745 0 0 0 .562-.975Zm-1.084 3.123c.017.603-.123.843-.448 1.406a3.375 3.375 0 0 1-4.61 1.235c-.056-.032-.11-.059-.162-.094l.474-.823c.273-.471.132-.956-.374-.85-.679.14-1.84.393-2.467.523a.746.746 0 0 0-.563.975c.21.596.564 1.746.78 2.399.173.524.642.388.931-.115l.47-.815c.054.034.106.068.161.1a4.868 4.868 0 0 0 7.307-4.317l-1.5.376Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportInWorkFilled24;
