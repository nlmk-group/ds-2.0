import { customInputColors, sizesMappingInput } from '../../declaration';

export declare const argsTypes: {
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
//# sourceMappingURL=argsTypes.d.ts.map