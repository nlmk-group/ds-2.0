import React from 'react';
import { PropsWithChildren } from 'react';

import { severityMapping } from './enums';

export interface IAlert extends PropsWithChildren<any> {
  title: string;
  severity?: string;
  className?: string;
  action?: JSX.Element | React.ReactNode;
}

export type IIconSeverityColor = Record<severityMapping, string>;
