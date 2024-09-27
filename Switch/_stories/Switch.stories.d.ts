import { ReactNode } from '../../../../node_modules/react';
import { ISwitchProps } from '../types';

declare const _default: import('@storybook/csf').ComponentAnnotations<import('@storybook/react/dist/types-a5624094').R, ISwitchProps>;
export default _default;
export declare const DefaultSwitch: {
    (argTypes: ISwitchProps): ReactNode;
    storyName: string;
    args: {
        checked: boolean;
        onChange: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const DisabledSwitch: {
    (argTypes: ISwitchProps): ReactNode;
    storyName: string;
    args: {
        checked: boolean;
        onChange: import('@storybook/addon-actions').HandlerFunction;
        disabled: boolean;
    };
};
export declare const SwitchWithLabel: {
    (argTypes: ISwitchProps): ReactNode;
    storyName: string;
    args: {
        onChange: import('@storybook/addon-actions').HandlerFunction;
    };
};
export declare const IconsSwitch: {
    (argTypes: ISwitchProps): ReactNode;
    storyName: string;
    args: {
        checked: boolean;
        onChange: import('@storybook/addon-actions').HandlerFunction;
    };
};
//# sourceMappingURL=Switch.stories.d.ts.map