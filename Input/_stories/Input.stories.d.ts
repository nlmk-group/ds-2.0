import { default as React } from '../../../../node_modules/react';
import { customInputColors } from '../../declaration';
import { TInputProps } from '../types';

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
            table: {
                type: {
                    summary: string;
                };
            };
        };
        helperText: {
            description: string;
            control: {
                type: string;
            };
        };
        icon: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
            mapping: {
                IconSearchOutlined32: React.JSX.Element;
                IconSearchOutlined24: React.JSX.Element;
                IconSearchOutlined16: React.JSX.Element;
            };
        };
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: import('../../declaration').sizesMappingInput;
                };
            };
            options: import('../../declaration').sizesMappingInput[];
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
        inputRef: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        name: {
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
        className: {
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
    };
};
export default _default;
export declare const InputDefault: {
    (argTypes: TInputProps): JSX.Element;
    storyName: string;
    args: {};
};
export declare const InputWithLabelHelperTextElement: {
    (): React.JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const InputMultilineDefault: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const InputMultilineWithLabelAndHelperText: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const InputMultilineResize: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const InputMultilineDisabled: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const InputWithColored: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
};
export declare const InputPseudoDefaultChecking: {
    (): JSX.Element;
    args: {
        onChange: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
        previewTabs: {
            controls: {
                hidden: boolean;
            };
        };
    };
    play({ args, canvasElement }: {
        args: any;
        canvasElement: any;
    }): Promise<void>;
};
//# sourceMappingURL=Input.stories.d.ts.map