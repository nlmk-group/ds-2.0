import React, { CSSProperties, forwardRef, ReactNode } from 'react';

interface ITheadProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Thead = forwardRef<HTMLTableSectionElement, ITheadProps>(({ children, className, style, ...props }, ref) => (
  <thead ref={ref} className={className} style={style} {...props}>
    {children}
  </thead>
));

Thead.displayName = 'Thead';

export default Thead;
