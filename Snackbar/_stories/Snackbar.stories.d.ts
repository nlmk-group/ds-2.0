import { ReactNode } from 'react';
import { colorMapping } from '../enums';
import { ISnackbar } from '../types';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0fc72a6d").R, ISnackbar>;
export default _default;
export declare const DefaultSnackbar: {
    (argTypes: ISnackbar): ReactNode;
    storyName: string;
    args: {
        children: string;
    };
};
export declare const SnackbarClose: {
    (argTypes: ISnackbar): ReactNode;
    storyName: string;
    args: {
        children: string;
        close: import("@storybook/addon-actions").HandlerFunction;
    };
};
export declare const SnackbarAction: {
    (argTypes: ISnackbar): ReactNode;
    storyName: string;
    args: {
        children: string;
        actionButton: import("@storybook/addon-actions").HandlerFunction;
    };
};
export declare const SnackbarColor: {
    (argTypes: ISnackbar): ReactNode;
    storyName: string;
    args: {
        children: string;
        close: import("@storybook/addon-actions").HandlerFunction;
        actionButton: import("@storybook/addon-actions").HandlerFunction;
    };
};
export declare const SnackbarIcon: {
    (argTypes: ISnackbar): ReactNode;
    storyName: string;
    args: {
        children: string;
        close: import("@storybook/addon-actions").HandlerFunction;
        actionButton: import("@storybook/addon-actions").HandlerFunction;
    };
};
export declare const SnackbarCustomIcon: {
    (argTypes: ISnackbar): ReactNode;
    storyName: string;
    args: {
        withIcon: boolean;
        children: string;
        color: colorMapping;
        close: import("@storybook/addon-actions").HandlerFunction;
        actionButton: import("@storybook/addon-actions").HandlerFunction;
    };
};
export declare const SnackbarOpacity: {
    (argTypes: ISnackbar): ReactNode;
    storyName: string;
    args: {
        children: string;
        close: import("@storybook/addon-actions").HandlerFunction;
        actionButton: import("@storybook/addon-actions").HandlerFunction;
    };
};
//# sourceMappingURL=Snackbar.stories.d.ts.map