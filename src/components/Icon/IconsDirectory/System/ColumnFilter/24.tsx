import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconColumnFilter24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m20.921 17.08-.923-.707c.017-.146.035-.285.035-.431 0-.147-.009-.285-.035-.431l.915-.708a.224.224 0 0 0 .051-.276l-.862-1.493c-.052-.112-.164-.112-.276-.112l-1.062.431a3.785 3.785 0 0 0-.733-.405l-.164-1.139a.204.204 0 0 0-.198-.181h-1.726a.224.224 0 0 0-.224.181l-.164 1.139c-.26.112-.51.25-.734.405l-1.07-.43c-.094 0-.207 0-.267.111l-.863 1.493a.214.214 0 0 0 .052.276l.915.707a3.607 3.607 0 0 0 0 .863l-.915.708a.224.224 0 0 0-.052.276l.863 1.492c.052.113.164.113.268.113l1.07-.432c.224.155.465.302.733.406l.164 1.139a.217.217 0 0 0 .224.18h1.726a.22.22 0 0 0 .207-.18l.164-1.14c.258-.111.491-.25.724-.405l1.062.432c.112 0 .224 0 .284-.113l.863-1.492a.224.224 0 0 0-.052-.276Zm-4.115.156a1.287 1.287 0 0 1-1.294-1.294c0-.716.578-1.294 1.294-1.294.716 0 1.294.578 1.294 1.294 0 .716-.578 1.294-1.294 1.294ZM16.478 3.19a.9.9 0 0 0-.535-.19H3.863a.9.9 0 0 0-.534.19.863.863 0 0 0-.147 1.208l4.133 5.289v4.417a.853.853 0 0 0 .25.716l3.46 3.46a.723.723 0 0 0 .302.19 6.026 6.026 0 0 1-.56-2.528c0-1.579.62-3.098 1.725-4.228V9.687l4.133-5.29a.863.863 0 0 0-.147-1.207Zm-5.712 5.893v6.496l-1.725-1.725V9.09L5.624 4.726h8.559l-3.417 4.357Z"
      />
    </svg>
  );
};

export default IconColumnFilter24;
