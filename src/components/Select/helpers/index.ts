import { ReactElement } from 'react';

const handleGetLabel = (lbl: string | ReactElement): string | undefined => {
  if (typeof lbl === 'string') {
    return lbl.replace(/\n/g, ' ').replace(/\s\s+/g, ' ');
  }

  const children = (lbl?.props as any)?.children || undefined;

  if (children === undefined) return '';
  if (typeof children === 'string') return children;
  if (typeof children === 'object') return handleGetLabel(children);

  return undefined;
};

export const getLabel = (lbl: string | ReactElement): string => {
  return handleGetLabel(lbl) || '';
};
