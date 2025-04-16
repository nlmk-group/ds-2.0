import { ReactNode } from '../../../../node_modules/react';
import { IDrawerProps } from '../types';

declare const _default: import('@storybook/csf').ComponentAnnotations<import('@storybook/react/dist/types-a5624094').R, IDrawerProps>;
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
export declare const DrawerWithProfile: {
    (args: IDrawerProps): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Drawer.stories.d.ts.map