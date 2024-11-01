import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSocialPolitics24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M8.49 9.15c-.57-.56-1.05-1.08-1.41-1.56-.37-.48-.65-.97-.83-1.45C6.08 5.68 6 5.19 6 4.7c0-1.03.36-1.93 1.09-2.64C7.81 1.35 8.72 1 9.75 1c.58 0 1.13.12 1.65.36.21.1.41.21.6.34.19-.13.39-.24.6-.34.52-.24 1.07-.36 1.65-.36 1.03 0 1.94.35 2.66 1.06.73.71 1.09 1.62 1.09 2.64 0 .49-.08.97-.23 1.44-.18.49-.47.97-.83 1.45s-.84 1-1.41 1.56-1.28 1.21-2.13 1.96l-.73.64c-.38.33-.94.33-1.32 0l-.73-.64c-.85-.75-1.56-1.4-2.13-1.96Zm2.08-5.97c-.26-.12-.53-.18-.82-.18-.28 0-.53.05-.74.14-.19.08-.37.2-.52.35C8.16 3.8 8 4.18 8 4.7c0 .26.04.51.13.76.09.24.26.54.54.92.29.38.69.82 1.22 1.34a36.838 36.838 0 0 0 1.165 1.102c.273.247.568.514.885.788l.06.06.06-.06c.59-.52 1.11-.99 1.55-1.41l.032-.03c.168-.159.327-.309.468-.45.44-.43.77-.8 1.04-1.13l.18-.21c.28-.38.45-.68.54-.91.09-.26.13-.51.13-.77 0-.52-.16-.9-.49-1.21-.32-.32-.72-.49-1.26-.49-.29 0-.56.06-.82.17-.26.12-.48.29-.67.51-.19.22-.47.35-.76.35-.29 0-.57-.13-.76-.35-.19-.22-.41-.38-.67-.5Zm9.46 9.87c.67.15 1.19.57 1.52 1.07.63.95.73 2.54-.6 3.45l-.525.35c-.474.317-1.067.714-1.695 1.13l-.64.425-.64.425c-1.35.9-2.53 1.69-2.83 1.93-.18.13-.4.21-.62.21H7.47l-1.67.85c-.44.22-.98.09-1.27-.32l-2.35-3.35c-.21-.3-.24-.69-.08-1.02.28-.56 1.03-1.8 2.04-2.91.51-.56 1.1-1.12 1.76-1.54.66-.42 1.43-.75 2.28-.75H14c.76 0 1.4.32 1.82.82.21.25.35.52.45.81l1.68-1.12c.67-.46 1.39-.61 2.08-.46Zm-2.39 4.32c.88-.58 1.69-1.12 2.19-1.46.12-.08.16-.17.16-.27a.61.61 0 0 0-.11-.41c-.09-.13-.2-.2-.29-.22-.08-.02-.24-.03-.52.16-.085.058-.403.269-.825.55-.379.25-.841.558-1.295.86l-1.88 1.25c-.23.15-.57.17-.73.17H9.5v-2H14c.18 0 .25-.06.29-.11a.62.62 0 0 0 .12-.39.62.62 0 0 0-.12-.39c-.04-.05-.11-.11-.29-.11H8.17c-.33 0-.73.13-1.19.43-.46.29-.93.72-1.36 1.2-.62.69-1.13 1.43-1.44 1.95l1.49 2.13 1.11-.56c.14-.07.29-.11.45-.11h6.44c.56-.4 1.6-1.1 2.67-1.81.43-.28.88-.58 1.3-.86Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSocialPolitics24;