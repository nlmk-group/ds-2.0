import React, { CSSProperties, forwardRef, ReactNode } from 'react';

interface IRowProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Row = forwardRef<HTMLTableRowElement, IRowProps>(({ children, className, style, ...props }, ref) => (
  <tr ref={ref} className={className} style={style} {...props}>
    {children}
  </tr>
));

Row.displayName = 'Row';

export default Row;
