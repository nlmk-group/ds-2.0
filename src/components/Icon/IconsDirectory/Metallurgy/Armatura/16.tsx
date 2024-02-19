import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArmatura16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m15.232 7.08-7.546 7.534c-.57.57-1.43.516-2.154.262-.762-.268-1.556-.808-2.226-1.48-.671-.67-1.211-1.463-1.48-2.226-.254-.723-.308-1.584.262-2.154L9.646 1.47c.587-.588 1.466-.504 2.153-.262.737.259 1.528.78 2.228 1.479.65.65 1.146 1.38 1.421 2.073l.045.12.012.034-.273 2.166Zm-3.45-2.149c-.592-.592-.99-1.223-1.172-1.738-.198-.566-.077-.772-.045-.804.032-.032.238-.153.803.045.516.182 1.147.58 1.74 1.172.592.593.99 1.223 1.171 1.74a2.3 2.3 0 0 1 .08.275c.077.359-.008.501-.035.527l-.002.003c-.038.035-.248.147-.801-.048-.516-.181-1.146-.579-1.739-1.172Zm1.346 2.412-.038-.013c-.737-.26-1.528-.78-2.227-1.48a7.087 7.087 0 0 1-.977-1.211v5.942l3.242-3.238ZM8.586 4.366v7.513l-1.819 1.816a.096.096 0 0 1-.013.01V6.194l1.832-1.828ZM5.454 7.492v5.926a5.585 5.585 0 0 1-1.23-.94c-.57-.57-.983-1.204-1.171-1.74-.202-.574-.071-.777-.045-.803l2.446-2.443Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="m15.232 7.08.274-2.166c.03.086.058.175.082.266.17.637.17 1.373-.344 1.888l-.012.012Z"
      />
    </svg>
  );
};

export default IconArmatura16;
