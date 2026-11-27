import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';

interface IRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

const Row = forwardRef<HTMLTableRowElement, IRowProps>(({ children, className, style, ...props }, ref) => (
  <tr ref={ref} className={className} style={style} {...props}>
    {children}
  </tr>
));

Row.displayName = 'Row';

export default Row;
