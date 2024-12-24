import { default as React } from '../../../../node_modules/react';
import { IInputRangeProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IInputRangeProps>;
    decorators: ((Story: any) => React.JSX.Element)[];
    argTypes: {
        onChange: {
            description: string;
            action: string;
        };
        value: {
            description: string;
        };
        step: {
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        min: {
            description: string;
            control: {
                type: string;
            };
        };
        max: {
            description: string;
            control: {
                type: string;
            };
        };
        disabled: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        thumbValuePosition: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../../Slider/subcomponents/Control/enums').ESliderThumbValuePosition[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const InputRangeDefault: {
    (argsTypes: IInputRangeProps): JSX.Element;
    storyName: string;
    args: {
        min: number;
        max: number;
        step: number;
    };
};
export declare const InputRangeDisabled: {
    (argsTypes: IInputRangeProps): JSX.Element;
    args: {
        min: number;
        max: number;
        step: number;
    };
    storyName: string;
};
//# sourceMappingURL=InputRange.stories.d.ts.map