import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportInWorkFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13 15H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.044a1.248 1.248 0 0 1 1.081-.625h.625c0-.414.56-.75 1.25-.75s1.25.336 1.25.75h.625A1.249 1.249 0 0 1 10.956 2H13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1ZM5.75 3c.193.441.51.87 1.125.875h2.25c.627.004.932-.434 1.125-.875h-4.5Zm5.328 4.544c-.14-.398-.376-1.164-.52-1.6-.115-.349-.428-.258-.62.077l-.314.543a3.245 3.245 0 0 0-4.978 2.81l.999-.249c-.012-.403.082-.563.298-.938a2.25 2.25 0 0 1 3.074-.823c.037.021.073.04.108.062l-.316.549c-.182.314-.088.638.249.567.453-.094 1.227-.262 1.645-.349a.497.497 0 0 0 .375-.65Zm-.723 2.081c.012.403-.082.563-.298.938a2.25 2.25 0 0 1-3.074.823c-.037-.021-.073-.04-.108-.063l.316-.548c.182-.315.089-.638-.249-.568-.452.095-1.227.263-1.645.35a.496.496 0 0 0-.375.65c.14.397.376 1.163.52 1.599.115.35.428.259.62-.076l.314-.544c.036.023.07.045.107.066a3.244 3.244 0 0 0 4.871-2.877l-.999.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportInWorkFilled16;
