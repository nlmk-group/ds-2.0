import { PropsWithChildren, ReactNode } from 'react';

import { severityMapping } from './enums';

export interface IAlert extends PropsWithChildren {
  title: string;
  severity?: string;
  className?: string;
  action?: ReactNode;
  close?: ()=>void;
}

export type IIconSeverityColor = Record<severityMapping, string>;
