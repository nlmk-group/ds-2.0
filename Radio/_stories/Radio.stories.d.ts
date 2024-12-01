import { default as React } from '../../../../node_modules/react';
import { ERadioColors } from '../enums';
import { IRadioProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IRadioProps>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
    argTypes: {
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
        value: {
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
        label: {
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
        checked: {
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
        color: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            options: ERadioColors[];
            control: {
                type: string;
            };
        };
        onChange: {
            description: string;
        };
    };
};
export default _default;
export declare const RadioDefault: {
    ({ checked: initialChecked, ...args }: IRadioProps): JSX.Element;
    storyName: string;
    args: {
        value: string;
        label: string;
        checked: boolean;
    };
};
export declare const RadioColors: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
//# sourceMappingURL=Radio.stories.d.ts.map