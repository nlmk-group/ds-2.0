import React from 'react';

import { IFooterProps } from './types';

const Tfooter = ({ children, className, style, ...rest }: IFooterProps) => {
  return (
    <tfoot className={className} style={style} {...rest}>
      {children}
    </tfoot>
  );
};

export default Tfooter;
