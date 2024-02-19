import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTrolleyOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.314 7.338c.08-.08.208-.08.288 0l1.34 1.357a.205.205 0 0 1 0 .288l-.361.366a.202.202 0 0 1-.288 0l-.287-.291a.053.053 0 0 0-.09.038v1.495c0 .112-.09.204-.202.204h-.511A.204.204 0 0 1 6 10.591V9.096a.053.053 0 0 0-.09-.038l-.287.29a.202.202 0 0 1-.288 0l-.36-.365a.205.205 0 0 1 0-.288l1.34-1.357Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.452 1.925c.896 0 1.623.737 1.623 1.642v.622c0 .112-.09.204-.203.204h-.51a.203.203 0 0 1-.203-.204v-.622a.713.713 0 0 0-.707-.716.712.712 0 0 0-.707.716v7.135a.06.06 0 0 0 .044.057c.68.217 1.175.86 1.175 1.62 0 .934-.751 1.696-1.677 1.696a1.682 1.682 0 0 1-1.6-1.19c-.01-.028-.034-.044-.056-.044H2.128a.204.204 0 0 1-.203-.204v-.517c0-.112.09-.205.203-.205h.333a.053.053 0 0 0 .053-.054v-6.63c0-.113.09-.205.203-.205h7.318c.113 0 .203.092.203.204v5.685c0 .023.014.043.04.056a.082.082 0 0 0 .08-.005c.13-.088.273-.158.426-.207a.061.061 0 0 0 .044-.057V3.567c0-.905.728-1.642 1.624-1.642Zm-3.13 4.08a.054.054 0 0 0-.053-.053H3.483a.054.054 0 0 0-.053.054v5.855c0 .03.025.054.053.054H9.27a.053.053 0 0 0 .052-.054V6.006Zm2.726 6.373a.767.767 0 0 0-.761-.771.767.767 0 0 0-.761.771c0 .426.342.771.76.771a.767.767 0 0 0 .762-.77Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTrolleyOutlined16;
