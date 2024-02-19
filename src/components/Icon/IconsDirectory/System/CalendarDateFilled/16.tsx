import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarDateFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.08 2.63h2.6a.65.65 0 0 1 .65.65v10.4a.65.65 0 0 1-.65.65H1.98a.65.65 0 0 1-.65-.65V3.28a.65.65 0 0 1 .65-.65h2.6v-1.3h1.3v1.3h3.9v-1.3h1.3v1.3Zm-5.67 9.176c.59 0 1.066-.148 1.425-.445.36-.298.54-.692.54-1.185 0-.305-.077-.569-.231-.792-.154-.224-.387-.391-.699-.503a1.51 1.51 0 0 0 .61-.491c.154-.213.232-.447.232-.701 0-.493-.167-.88-.5-1.16-.332-.28-.791-.42-1.378-.42-.338 0-.647.064-.927.194s-.5.309-.655.539c-.157.23-.235.489-.235.778h1.101c0-.185.071-.335.213-.45a.812.812 0 0 1 .53-.174c.233 0 .417.062.55.186.133.125.2.299.2.522 0 .231-.067.417-.202.556-.134.14-.341.21-.62.21h-.587v.86h.583c.609 0 .914.277.914.83a.717.717 0 0 1-.223.551c-.149.139-.354.208-.615.208a.863.863 0 0 1-.577-.198.638.638 0 0 1-.234-.51H3.524c0 .48.176.865.527 1.157.352.292.805.438 1.358.438Zm4.585 0c.612 0 1.076-.203 1.394-.61.317-.405.476-.992.476-1.759v-1.02c-.008-.744-.172-1.315-.492-1.712-.32-.398-.782-.597-1.386-.597-.604 0-1.067.201-1.388.602-.321.401-.482.99-.482 1.764v1.02c.008.744.171 1.316.491 1.714.32.399.782.598 1.387.598Zm0-.887c-.272 0-.47-.11-.593-.33-.123-.22-.184-.555-.184-1.007V8.234c.007-.424.073-.736.196-.935.123-.2.314-.3.573-.3.267 0 .463.105.588.315.126.21.189.544.189 1.003v1.318c-.005.434-.067.757-.187.968-.119.21-.313.316-.582.316ZM2.63 5.23v7.793h10.4V5.23H2.63Z"
      />
    </svg>
  );
};

export default IconCalendarDateFilled16;
