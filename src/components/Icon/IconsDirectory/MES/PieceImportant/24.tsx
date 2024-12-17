import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPieceImportant24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.36 2.023C5.665 1.22 6.287-.017 7.378 0l1.118.018c.416.007.743.34.729.743a.758.758 0 0 1-.779.717l-.673-.01c.483 1.124-.706 2.447-2.017 1.93l-.148-.06a1.953 1.953 0 0 1-.41 1.52A6.292 6.292 0 0 0 4.133 6.78a10.72 10.72 0 0 1 6.277-3.404c4.441-.715 8.659 1.391 10.766 4.98l1.14-.636c.368-.205.826-.042 1.023.365.197.406.058.903-.31 1.108l-1.142.636c.181.469.329.955.44 1.458l.914.019c.418.008.758.385.76.84.002.456-.336.819-.754.81l-.692-.014c.025.435.02.867-.01 1.294-.456-.3-.954-.54-1.483-.707 0-.206-.007-.412-.022-.619l-1.518-.032c.011.127.019.254.023.38a6.04 6.04 0 0 0-1.506.12 5.69 5.69 0 0 0-.04-.531l-1.656-.035c-.348-.007-.652-.272-.737-.641-.085-.37.07-.75.377-.92l1.224-.683c-1.213-1.974-3.592-3.123-6.1-2.719-3 .483-5.15 3.02-5.138 5.873l1.484-.154a.754.754 0 0 1 .776.475.776.776 0 0 1-.231.891l-1.482 1.192c1.09 2.294 3.663 3.687 6.387 3.248.107-.017.213-.037.318-.06v.079c0 .474.052.935.152 1.378-.082.016-.163.03-.246.044-3.27.526-6.364-1.058-7.812-3.723l-1.204.968c1.795 3.11 5.43 4.942 9.261 4.325.187-.03.372-.066.555-.106.248.472.554.907.91 1.295-.402.114-.815.206-1.237.274-4.38.705-8.542-1.334-10.677-4.832l-.361.29a.747.747 0 0 1-1.061-.125.776.776 0 0 1 .123-1.078l.592-.476a10.138 10.138 0 0 1-.58-1.913l-.803.083a.758.758 0 0 1-.828-.685.765.765 0 0 1 .675-.842l.77-.08a10.16 10.16 0 0 1 .289-2.925.702.702 0 0 1-.07-.477c.143-.688.241-1.22.325-1.67.208-1.128.321-1.744.793-3.01a7.77 7.77 0 0 1 1.227-2.137c.07-.088.11-.2.11-.305a.286.286 0 0 0-.079-.213c-.878-.853.112-2.275 1.267-1.818l1.034.408a.114.114 0 0 0 .009.003.055.055 0 0 0 .013-.016.104.104 0 0 0-.006-.008ZM3.147 15.559c.08.368.182.727.305 1.074l1.266-1.018a7.05 7.05 0 0 1-.056-.213l-1.515.157Zm1.315-1.68-1.507.156C2.784 9.583 6.04 5.58 10.637 4.84c3.8-.612 7.41 1.187 9.219 4.253l-1.333.743c-1.51-2.485-4.495-3.932-7.641-3.426-3.796.611-6.503 3.853-6.42 7.47Zm16.301-2.624a8.708 8.708 0 0 0-.211-.68l-1.168.651 1.38.03Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.73 19.394c0-2.542 2.025-4.606 4.527-4.606 2.506 0 4.536 2.064 4.536 4.606 0 2.543-2.03 4.606-4.536 4.606-2.502 0-4.527-2.064-4.527-4.606Zm4.078-2.303h.906v2.763h-.906V17.09Zm0 3.684h.906v.922h-.906v-.922Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPieceImportant24;