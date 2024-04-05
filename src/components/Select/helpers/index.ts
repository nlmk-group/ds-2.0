import { ReactElement } from 'react';

const handleGetLabel = (lbl: string | ReactElement): string | undefined => {
  if (typeof lbl === 'string') {
    return lbl
  } else {
    const children = lbl?.props?.children || undefined
    if (children === undefined) {
      return '';
    }
    if (typeof children === 'object') {
      // Found direct child
      return handleGetLabel(children);
    }
    if (typeof children === 'string') {
      // Found searchable string
      return children;
    }
  }
}

export const getLabel = (lbl: string | ReactElement): string => {
  return handleGetLabel(lbl) || ''
}
