import { default as React } from '../../../../node_modules/react';
import { customInputColors, sizesMappingInput } from '../../declaration';
import { TInputProps } from '../types';

import * as test from '@storybook/test';
declare const _default: {
    title: string;
    component: React.FC<TInputProps>;
    decorators: ((Story: any) => React.JSX.Element)[];
    argTypes: {
        onBlur: {
            description: string;
            action: string;
        };
        onChange: {
            description: string;
            action: string;
        };
        onReset: {
            description: string;
            action: string;
        };
        reset: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        value: {
            description: string;
            control: {
                type: string;
            };
        };
        helperText: {
            description: string;
            control: {
                type: string;
            };
        };
        label: {
            description: string;
            control: {
                type: string;
            };
        };
        icon: {
            description: string;
            control: {
                type: string;
            };
        };
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: sizesMappingInput;
                };
            };
            options: sizesMappingInput[];
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
        color: {
            description: string;
            table: {
                defaultValue: {
                    summary: customInputColors;
                };
            };
            options: customInputColors[];
            control: {
                type: string;
            };
        };
        multiline: {
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
        resize: {
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
        id: {
            description: string;
            control: {
                type: string;
            };
        };
        pseudo: {
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
        colored: {
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
    };
};
export default _default;
export declare const InputDefault: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputWithLabel: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputWithLabelAndHelperText: {
    (argTypes: TInputProps): React.JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputWithLabelHelperTextAndTextIcon: {
    (argTypes: TInputProps): React.JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputWithLabelHelperTextElement: {
    (argTypes: TInputProps): React.JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputDisabled: {
    (argTypes: TInputProps): React.JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputError: {
    (argTypes: TInputProps): React.JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputWarning: {
    (argTypes: TInputProps): React.JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputSuccess: {
    (argTypes: TInputProps): React.JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputCompact: {
    (argTypes: TInputProps): React.JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputMultilineDefault: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputMultilineWithLabel: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputMultilineWithLabelAndHelperText: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputMultilineResize: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputMultilineDisabled: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
};
export declare const InputWithColored: {
    (): JSX.Element;
    storyName: string;
};
export declare const InputMultilineError: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputMultilineWarning: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputMultilineSuccess: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputPseudoDefaultChecking: {
    (argTypes: TInputProps): JSX.Element;
    args: {
        onChange: test.Mock<any, any>;
    };
    play({ args, canvasElement }: {
        args: any;
        canvasElement: any;
    }): Promise<void>;
};
//# sourceMappingURL=Input.stories.d.ts.map