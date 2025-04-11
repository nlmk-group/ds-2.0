import { default as React } from '../../../../node_modules/react';
import { customInputColors, sizesMappingInput } from '../../declaration';

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
            IconSearchOutlined32: React.JSX.Element;
            IconSearchOutlined24: React.JSX.Element;
            IconSearchOutlined16: React.JSX.Element;
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
    required: {
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
    placeholder: {
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