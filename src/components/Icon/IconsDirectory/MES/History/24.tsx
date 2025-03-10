import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHistory24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 14V2h17v6h-2V4H4v10h5v2H2v1c0 .551.449 1 1 1h6v2H3c-1.654 0-3-1.346-3-3v-3h2Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M6 8V6h2v2H6ZM10 8V6h5v2h-5ZM6 12v-2h2v2H6ZM15.551 15.095a1.947 1.947 0 0 1 2.147-.509c.25.098.477.247.669.438.192.19.345.42.45.674a2.108 2.108 0 0 1-.42 2.248 1.942 1.942 0 0 1-2.788.02 2.08 2.08 0 0 1-.597-1.423 2.087 2.087 0 0 1 .54-1.448Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.371 10.704c0-.929.75-1.704 1.647-1.704h1.975c.898 0 1.647.775 1.647 1.704v1.102l.887-.534c.78-.468 1.81-.18 2.256.631l.993 1.725.003.002c.455.804.184 1.868-.593 2.336l-.003.001-.901.536.85.527c.783.462 1.061 1.527.61 2.334l-.986 1.768c-.446.81-1.474 1.099-2.255.63l-.887-.533v1.067c0 .929-.749 1.704-1.646 1.704h-1.976c-.898 0-1.646-.775-1.646-1.704v-1.067l-.888.533h-.001c-.78.469-1.808.18-2.255-.63l-.985-1.768c-.452-.807-.174-1.872.61-2.334l.892-.53-.892-.53c-.784-.462-1.062-1.527-.61-2.334l.004-.007.989-1.716c.429-.833 1.473-1.15 2.269-.678h.002l.89.536v-1.067Zm1.976.341h1.317V12a1.72 1.72 0 0 0 .84 1.5c.105.06.19.11.246.15l.025.019.029.016a1.601 1.601 0 0 0 1.646 0h.001l.785-.472.668 1.157-.788.468a1.723 1.723 0 0 0-.824 1.5v.326a1.723 1.723 0 0 0 .823 1.5l.754.468-.663 1.19-.782-.47a1.602 1.602 0 0 0-1.647 0l-.027.016-.027.019c-.057.039-.14.089-.246.15-.521.304-.843.88-.839 1.5v.918h-1.317v-.918a1.72 1.72 0 0 0-.84-1.5 4.14 4.14 0 0 1-.245-.15l-.027-.019-.027-.016a1.602 1.602 0 0 0-1.647 0l-.783.47-.66-1.185.796-.473h.002c.515-.308.831-.885.823-1.5v-.326a1.723 1.723 0 0 0-.823-1.5h-.002l-.79-.47.681-1.188.782.47a1.602 1.602 0 0 0 1.646 0l.029-.016.025-.019c.057-.039.141-.09.246-.15a1.72 1.72 0 0 0 .84-1.5v-.918Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHistory24;
