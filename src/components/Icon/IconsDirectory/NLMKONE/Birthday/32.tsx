import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBirthday32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11 5.667c0-.92-1.667-3-1.667-3s-1.666 2.08-1.666 3a1.667 1.667 0 0 0 3.333 0ZM24.333 5.667c0-.92-1.666-3-1.666-3S21 4.747 21 5.667a1.667 1.667 0 0 0 3.333 0ZM16 2.667s1.667 2.08 1.667 3a1.667 1.667 0 0 1-3.334 0c0-.92 1.667-3 1.667-3Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 14.835c-2.3.592-4 2.68-4 5.165v9.333h24V20c0-2.485-1.7-4.573-4-5.165V9.333h-2.667v5.334h-4V9.333h-2.666v5.334h-4V9.333H8v5.502ZM25.333 20v.69c-.78-.341-1.711-.69-3.333-.69-1.769 0-2.717.415-3.541.782l-.023.01c-.665.295-1.219.541-2.436.541-1.217 0-1.77-.246-2.436-.541l-.023-.01C12.717 20.415 11.77 20 10 20c-1.622 0-2.554.349-3.333.69V20a2.667 2.667 0 0 1 2.666-2.667h13.334A2.667 2.667 0 0 1 25.333 20ZM6.667 26.667v-3.089c.32-.114.604-.24.875-.36l.022-.01c.665-.295 1.219-.541 2.436-.541 1.217 0 1.77.246 2.436.541l.023.01c.824.367 1.772.782 3.541.782s2.717-.415 3.541-.782l.023-.01c.665-.295 1.219-.541 2.436-.541 1.217 0 1.77.246 2.436.541l.023.01c.27.12.553.246.874.36v3.089H6.667Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBirthday32;
