import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArmatura32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M19.006 2.78 3.37 18.392c-.972.972-.932 2.504-.425 3.945.525 1.492 1.595 3.074 2.945 4.424 1.35 1.351 2.932 2.421 4.425 2.946 1.44.506 2.972.547 3.945-.425l15.647-15.625c1.005-1.005.91-2.568.425-3.945-.506-1.442-1.538-3.018-2.945-4.425-1.407-1.407-2.983-2.438-4.425-2.945-1.377-.485-2.94-.58-3.944.425l-.012.011Zm3.734 7.155c-1.268-1.268-2.138-2.634-2.543-3.787-.425-1.208-.258-1.89.017-2.172l.006-.006c.278-.278.962-.451 2.178-.024 1.153.406 2.52 1.276 3.787 2.544 1.268 1.268 2.139 2.634 2.544 3.787.428 1.216.255 1.9-.024 2.178-.278.278-.961.452-2.178.024-1.153-.406-2.519-1.276-3.787-2.544Zm-4.072 12.543V6.918c.53 1.385 1.53 2.878 2.87 4.22 1.407 1.406 2.983 2.438 4.425 2.944.284.1.576.184.869.244l-8.164 8.152Zm-5.61 5.603 3.91-3.905V7.217l-4.783 4.776v16.368c.444-.003.725-.132.872-.28Zm-2.573-.13V13.69l-5.913 5.904c-.26.26-.462.932-.023 2.179.42 1.196 1.325 2.568 2.543 3.786 1.087 1.087 2.296 1.924 3.393 2.39Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArmatura32;
