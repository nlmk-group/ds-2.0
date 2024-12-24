import { default as React } from '../../../../node_modules/react';
import { IInputSliderProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IInputSliderProps>;
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
        showValue: {
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
        valuePosition: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../enums').EInputSliderValuePosition[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const InputSliderDefault: {
    (argsTypes: IInputSliderProps): JSX.Element;
    storyName: string;
    args: {
        min: number;
        max: number;
        step: number;
        label: string;
    };
};
export declare const InputSliderDisabled: {
    (argsTypes: IInputSliderProps): JSX.Element;
    storyName: string;
    args: {
        min: number;
        max: number;
        step: number;
        label: string;
    };
};
//# sourceMappingURL=InputSlider.stories.d.ts.map