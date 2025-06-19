import React from 'react';

import Box from '@components/Box';
import { IGrid } from '@components/Grid/types';

export const GridColumn = ({ children, ...props }: IGrid) => {
  return (
    <Box data-testid="grid-column" flexDirection="column" maxWidth="100%" {...props}>
      {children}
    </Box>
  );
};
