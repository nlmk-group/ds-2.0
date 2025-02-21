import React, { FC } from 'react';

import Typography from '@components/Typography';

import { ISuffixProps } from './types';

export const Suffix: FC<ISuffixProps> = ({ className, style, children }) => {
  return (
    <Typography variant="Body1-Medium" color="var(--steel-70)" className={className} style={style}>
      {children}
    </Typography>
  );
};
