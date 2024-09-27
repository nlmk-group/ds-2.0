import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { EAlertSeverity } from './enums';

export interface IAlertProps extends PropsWithChildren {
    title: string;
    severity?: `${EAlertSeverity}`;
    className?: string;
    action?: ReactNode;
    close?: () => void;
}
//# sourceMappingURL=types.d.ts.map