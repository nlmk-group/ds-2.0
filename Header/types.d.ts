import { CSSProperties, MouseEventHandler, ReactNode } from '../../../node_modules/react';

export interface IHeaderProps {
    title: string;
    showBack?: boolean;
    onBackClick?: MouseEventHandler<HTMLButtonElement>;
    showFavorite?: boolean;
    onFavoriteClick?: MouseEventHandler<HTMLButtonElement>;
    isFavorite?: boolean;
    showNotification?: boolean;
    onNotificationClick?: MouseEventHandler<HTMLButtonElement>;
    showVideo?: boolean;
    onVideoClick?: MouseEventHandler<HTMLButtonElement>;
    showPrint?: boolean;
    onPrintClick?: MouseEventHandler<HTMLButtonElement>;
    showMessage?: boolean;
    onMessageClick?: MouseEventHandler<HTMLButtonElement>;
    showDate?: boolean;
    notificationAmount?: number;
    breadcrumbs?: ReactNode;
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map