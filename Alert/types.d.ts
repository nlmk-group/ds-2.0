import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { EAlertSeverity } from './enums';

export interface IAlertProps extends PropsWithChildren {
    title: string;
    severity?: `${EAlertSeverity}`;
    className?: string;
    action?: ReactNode;
    close?: () => void;
}
export type IIconSeverityColor = Record<EAlertSeverity, string>;
//# sourceMappingURL=types.d.ts.map