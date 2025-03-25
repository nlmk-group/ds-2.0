import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconClaimsAnalysis16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.01 4.71v.447c0 .287.232.519.518.519h3.944a.518.518 0 0 0 .517-.519V4.71h.615c.371 0 .672.302.672.674v6.217a.673.673 0 0 1-.672.674H5.396a.673.673 0 0 1-.672-.674V5.384c0-.372.301-.674.672-.674h.615ZM8.5 3c.556 0 1.011.436 1.043.985h2.06c.772 0 1.397.627 1.397 1.4V11.6c0 .773-.625 1.399-1.396 1.399H5.396A1.398 1.398 0 0 1 4 11.601V5.384c0-.772.625-1.399 1.396-1.399h2.061C7.489 3.435 7.943 3 8.5 3Zm.42 1.046a.42.42 0 1 1-.841.001.42.42 0 0 1 .841 0Zm-.782 2.756h.724v2.882h-.724V6.802Zm0 3.957a.362.362 0 1 1 .724 0 .362.362 0 0 1-.724 0Z"
      />
    </svg>
  );
};

export default IconClaimsAnalysis16;
