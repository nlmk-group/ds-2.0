import { MouseEventHandler, ReactNode } from '../../../node_modules/react';

export interface IHeader {
    title: string;
    type?: string;
    bg?: boolean;
    back?: MouseEventHandler<HTMLButtonElement>;
    favorite?: MouseEventHandler<HTMLButtonElement>;
    notification?: MouseEventHandler<HTMLButtonElement>;
    date?: boolean;
    notificationAmount?: number;
    breadcrumbs?: ReactNode;
    className?: string;
    children?: ReactNode;
}
export interface INotification {
    notification: MouseEventHandler<HTMLButtonElement>;
    notificationAmount?: number;
}
//# sourceMappingURL=types.d.ts.map