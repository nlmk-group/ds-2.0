import { ReactNode } from 'react';
import { IDrawerProps } from '../types';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0fc72a6d").R, IDrawerProps>;
export default _default;
export declare const DrawerDefault: {
    (args: IDrawerProps): ReactNode;
    storyName: string;
};
export declare const DrawerLeft: {
    (args: IDrawerProps): ReactNode;
    storyName: string;
    args: {
        position: string;
    };
};
export declare const DrawerWithoutCloseButton: {
    (args: IDrawerProps): ReactNode;
    storyName: string;
    args: {
        isViewCloseButton: boolean;
    };
};
//# sourceMappingURL=Drawer.stories.d.ts.map