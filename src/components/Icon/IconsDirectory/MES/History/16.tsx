import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHistory16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || '#1952B6'}
        d="M2.167 9.09V2h9.916v3.545h-1.166V3.182H3.333V9.09H6.25v1.182H2.167v.59c0 .326.262.591.583.591h3.5v1.182h-3.5c-.965 0-1.75-.795-1.75-1.772V9.09h1.167Z"
      />
      <path
        fill={htmlColor || '#1952B6'}
        d="M4.5 5.545V4.364h1.167v1.181H4.5ZM6.833 5.545V4.364H9.75v1.181H6.833ZM4.5 7.91V6.726h1.167V7.91H4.5ZM10.072 9.738a1.13 1.13 0 0 1 1.252-.3c.145.057.278.145.39.258.112.113.201.248.262.398a1.258 1.258 0 0 1-.245 1.329 1.126 1.126 0 0 1-1.626.011 1.237 1.237 0 0 1-.348-.84 1.242 1.242 0 0 1 .315-.856Z"
      />
      <path
        fill={htmlColor || '#1952B6'}
        fillRule="evenodd"
        d="M9.383 7.144c0-.55.437-1.008.96-1.008h1.153c.524 0 .96.458.96 1.008v.65l.518-.315a.946.946 0 0 1 1.316.373l.58 1.019.001.001c.265.475.108 1.104-.346 1.38l-.001.001-.526.317.496.311c.457.274.619.902.355 1.38l-.575 1.044c-.26.48-.86.65-1.315.373l-.518-.316v.63c0 .55-.436 1.008-.96 1.008H10.33c-.524 0-.96-.458-.96-1.007v-.63l-.518.314-.001.001a.945.945 0 0 1-1.315-.373l-.575-1.044c-.264-.478-.101-1.106.356-1.38l.52-.313-.52-.313c-.457-.273-.62-.902-.356-1.38l.002-.003.577-1.014c.25-.492.86-.68 1.324-.401h.001l.52.317v-.63Zm1.153.201h.768v.563a1.02 1.02 0 0 0 .49.887c.061.036.11.065.143.088l.015.011.017.01c.296.18.664.18.96 0h.001l.458-.279.389.684-.46.276c-.3.182-.485.523-.48.887v.192c-.005.364.18.705.48.887l.44.276-.387.704-.456-.278a.924.924 0 0 0-.96 0l-.017.01-.015.01a2.456 2.456 0 0 1-.144.09c-.304.179-.492.52-.489.885v.543h-.768v-.543a1.02 1.02 0 0 0-.49-.886 2.403 2.403 0 0 1-.143-.089l-.016-.01-.016-.01a.924.924 0 0 0-.96 0h-.001l-.456.278-.385-.7.464-.28h.001c.3-.182.485-.523.48-.887v-.192a1.021 1.021 0 0 0-.48-.887l-.462-.277.397-.702.457.277c.296.18.664.18.96 0l.017-.009.015-.011c.032-.023.082-.053.143-.089.304-.18.493-.52.49-.886v-.543Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHistory16;
