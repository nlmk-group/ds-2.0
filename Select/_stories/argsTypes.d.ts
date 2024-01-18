import { customInputColors, sizesMappingInput } from '../../declaration';
export declare const argsTypes: {
    id: {
        description: string;
        control: {
            type: string;
        };
    };
    options: {
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
    multiple: {
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
    scrollingItems: {
        description: string;
        control: {
            type: string;
        };
    };
    disabled: {
        description: string;
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
    isAllSelectView: {
        description: string;
        control: {
            type: string;
        };
    };
    allSelectText: {
        description: string;
        control: {
            type: string;
        };
    };
    isSearchable: {
        description: string;
        control: {
            type: string;
        };
    };
    isClearSearchOnBlur: {
        description: string;
        control: {
            type: string;
        };
    };
    selected: {
        description: string;
        control: {
            type: string;
        };
    };
    onSelectionChange: {
        description: string;
        action: string;
    };
    withPortal: {
        description: string;
        control: {
            type: string;
        };
    };
    onEnterPress: {
        description: string;
        action: string;
    };
    onBlur: {
        description: string;
        action: string;
    };
    onFocus: {
        description: string;
        action: string;
    };
};
//# sourceMappingURL=argsTypes.d.ts.map