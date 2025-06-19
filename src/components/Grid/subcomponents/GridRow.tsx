import React from 'react';

import Box from '@components/Box';
import { IGrid } from '@components/Grid/types';

export const GridRow = ({ children, ...props }: IGrid) => {
  return (
    <Box data-testid="grid-row" display="flex" flexWrap="wrap" width="100%" {...props}>
      {children}
    </Box>
  );
};
