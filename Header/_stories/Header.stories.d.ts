import { ReactNode } from '../../../../node_modules/react';
import { IHeaderProps } from '../types';

declare const _default: import('@storybook/csf').ComponentAnnotations<import('@storybook/react/dist/types-a5624094').R, IHeaderProps>;
export default _default;
export declare const DefaultHeader: {
    (argTypes: IHeaderProps): ReactNode;
    storyName: string;
    args: {
        title: string;
        showBack: boolean;
        showFavorite: boolean;
        showNotification: boolean;
        showPrint: boolean;
        showVideo: boolean;
        showMessage: boolean;
        showDate: boolean;
        notificationAmount: number;
        onBackClick: import('@storybook/addon-actions').HandlerFunction;
        onFavoriteClick: import('@storybook/addon-actions').HandlerFunction;
        onNotificationClick: import('@storybook/addon-actions').HandlerFunction;
        onPrintClick: import('@storybook/addon-actions').HandlerFunction;
        onVideoClick: import('@storybook/addon-actions').HandlerFunction;
        onMessageClick: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const HeaderBack: {
    (argTypes: IHeaderProps): ReactNode;
    storyName: string;
    args: {
        title: string;
        showBack: boolean;
        onBackClick: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const HeaderDate: {
    (): ReactNode;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const HeaderFavorite: {
    (): ReactNode;
    storyName: string;
};
export declare const HeaderNotification: {
    (): ReactNode;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const HeaderWithDropdown: {
    (): ReactNode;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const HeaderBreadcrumbs: {
    (): ReactNode;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const HeaderBreadcrumbsHasChildren: {
    (): ReactNode;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
//# sourceMappingURL=Header.stories.d.ts.map