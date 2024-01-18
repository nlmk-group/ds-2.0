import { ReactNode } from 'react';
import { typeMapping } from '../enums';
import { IHeader } from '../types';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0fc72a6d").R, IHeader>;
export default _default;
export declare const DefaultHeader: {
    (argTypes: IHeader): ReactNode;
    storyName: string;
    args: {
        title: string;
    };
};
export declare const HeaderBack: {
    (argTypes: IHeader): ReactNode;
    storyName: string;
    args: {
        title: string;
        back: import("@storybook/addon-actions").HandlerFunction;
    };
};
export declare const HeaderDate: {
    (argTypes: IHeader): ReactNode;
    storyName: string;
    args: {
        title: string;
        back: import("@storybook/addon-actions").HandlerFunction;
        date: boolean;
    };
};
export declare const HeaderFavorite: {
    (argTypes: IHeader): ReactNode;
    storyName: string;
    args: {
        title: string;
        back: import("@storybook/addon-actions").HandlerFunction;
        date: boolean;
        favorite: import("@storybook/addon-actions").HandlerFunction;
    };
};
export declare const HeaderNotification: {
    (argTypes: IHeader): ReactNode;
    storyName: string;
    args: {
        title: string;
        back: import("@storybook/addon-actions").HandlerFunction;
        date: boolean;
        notification: import("@storybook/addon-actions").HandlerFunction;
        notificationAmount: number;
    };
};
export declare const HeaderBackground: {
    (argTypes: IHeader): ReactNode;
    storyName: string;
    args: {
        title: string;
        back: import("@storybook/addon-actions").HandlerFunction;
        date: boolean;
        favorite: import("@storybook/addon-actions").HandlerFunction;
        notification: import("@storybook/addon-actions").HandlerFunction;
        notificationAmount: number;
    };
};
export declare const HeaderSpacing: {
    (argTypes: IHeader): ReactNode;
    storyName: string;
    args: {
        title: string;
        back: import("@storybook/addon-actions").HandlerFunction;
        date: boolean;
        favorite: import("@storybook/addon-actions").HandlerFunction;
        notification: import("@storybook/addon-actions").HandlerFunction;
        notificationAmount: number;
    };
};
export declare const HeaderBreadcrumbs: {
    (argTypes: IHeader): ReactNode;
    storyName: string;
    args: {
        title: string;
        type: typeMapping;
        back: import("@storybook/addon-actions").HandlerFunction;
        date: boolean;
        favorite: import("@storybook/addon-actions").HandlerFunction;
        notification: import("@storybook/addon-actions").HandlerFunction;
        notificationAmount: number;
    };
};
//# sourceMappingURL=Header.stories.d.ts.map