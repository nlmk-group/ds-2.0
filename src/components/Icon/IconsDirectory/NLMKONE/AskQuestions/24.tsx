import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAskQuestions24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4.072 5.072C4.781 4.363 5.756 4 6.833 4c2.102 0 3.834 1.442 3.834 3.267 0 .894-.23 1.589-.617 2.157-.351.515-.807.879-1.14 1.146l-.035.027c-.372.298-.605.493-.773.74-.144.21-.269.507-.269 1.03V13.5h-2v-1.133c0-.894.23-1.59.617-2.157.351-.515.807-.88 1.14-1.147l.035-.027c.372-.297.605-.493.773-.739.144-.211.269-.508.269-1.03C8.667 6.825 8.13 6 6.833 6c-.622 0-1.064.203-1.347.486C5.203 6.77 5 7.211 5 7.833H3c0-1.077.363-2.052 1.072-2.76ZM6.832 15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM20 15h-9.457a4 4 0 0 0 .29-1.5V13H20v2Zm0-4h-7.395c.398-.612.686-1.28.861-2H20v2Zm0 6H10v2h10v-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAskQuestions24;
