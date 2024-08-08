import { ReactNode } from '../../../../node_modules/react';
import { ISwitch } from '../types';

declare const _default: import('@storybook/csf').ComponentAnnotations<import('@storybook/react/dist/types-a5624094').R, ISwitch>;
export default _default;
export declare const DefaultSwitch: {
    (argTypes: ISwitch): ReactNode;
    storyName: string;
    args: {
        checked: boolean;
        onChange: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const DisabledSwitch: {
    (argTypes: ISwitch): ReactNode;
    storyName: string;
    args: {
        checked: boolean;
        onChange: import('@storybook/addon-actions').HandlerFunction;
        disabled: boolean;
    };
};
export declare const SwitchWithLabel: {
    (argTypes: ISwitch): ReactNode;
    storyName: string;
    args: {
        onChange: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const IconsSwitch: {
    (argTypes: ISwitch): ReactNode;
    storyName: string;
    args: {
        checked: boolean;
        onChange: import('@storybook/addon-actions').HandlerFunction;
    };
};
//# sourceMappingURL=Switch.stories.d.ts.map