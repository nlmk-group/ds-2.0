import { customInputColors, sizesMappingInput } from '../../declaration';
import { default as React } from '../../../../node_modules/react';

declare const argsTypes: {
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
            IconArticleOutlined32: React.JSX.Element;
            IconArticleOutlined24: React.JSX.Element;
            IconArticleOutlined16: React.JSX.Element;
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
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map