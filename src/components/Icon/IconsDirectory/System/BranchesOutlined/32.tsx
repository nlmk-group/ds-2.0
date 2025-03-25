import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBranchesOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.003 17.389H2V14.61h7c1.423 0 2.456-.231 3.098-.694.641-.463 1.3-1.065 1.977-1.806.887-.972 2.036-1.944 3.448-2.917 1.411-.972 3.785-1.481 7.122-1.527L22.44 5.444 24.4 3.5 30 9.056l-5.6 5.555-1.96-1.98 2.205-2.187c-2.683.047-4.562.429-5.635 1.146a15.92 15.92 0 0 0-2.835 2.396c-.327.347-.66.689-.998 1.024-.125.125-.259.25-.4.373h.003a11.644 11.644 0 0 1-.774.617 11.543 11.543 0 0 1 .774.616h-.002c.14.124.274.249.4.374.338.335.67.677.997 1.024a15.92 15.92 0 0 0 2.835 2.396c1.073.717 2.952 1.1 5.635 1.146l-2.205-2.188 1.96-1.98 5.6 5.556-5.6 5.556-1.96-1.944 2.205-2.223c-3.337-.046-5.71-.555-7.122-1.527-1.412-.973-2.561-1.945-3.448-2.917-.677-.74-1.336-1.343-1.977-1.806-.642-.462-1.673-.694-3.095-.694Z"
      />
    </svg>
  );
};

export default IconBranchesOutlined32;
