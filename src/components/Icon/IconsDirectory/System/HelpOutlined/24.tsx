import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelpOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 22c5.47 0 10-4.53 10-10 0-5.46-4.54-10-10.01-10C6.53 2 2 6.54 2 12c0 5.47 4.54 10 10 10Zm0-1.667A8.293 8.293 0 0 1 3.676 12a8.291 8.291 0 0 1 8.314-8.333A8.322 8.322 0 0 1 20.333 12 8.295 8.295 0 0 1 12 20.333Zm-.206-6.304c.5 0 .794-.303.794-.696v-.117c0-.55.324-.893 1-1.343.951-.628 1.628-1.206 1.628-2.373 0-1.637-1.451-2.51-3.108-2.51-1.686 0-2.794.794-3.069 1.696a1.706 1.706 0 0 0-.078.49c0 .432.343.677.666.677.56 0 .647-.304.961-.667.324-.539.794-.862 1.451-.862.892 0 1.48.5 1.48 1.254 0 .667-.421.99-1.274 1.579-.706.49-1.225 1.01-1.225 1.97v.128c0 .52.274.774.774.774Zm-.02 2.932c.57 0 1.06-.451 1.06-1.02 0-.578-.481-1.02-1.06-1.02-.578 0-1.058.452-1.058 1.02 0 .559.49 1.02 1.059 1.02Z"
      />
    </svg>
  );
};

export default IconHelpOutlined24;
