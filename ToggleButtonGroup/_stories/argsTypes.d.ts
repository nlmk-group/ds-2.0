import { sizeMapping, statusMapping } from '../enums';

export declare const buttonGroupItemsArgsTypes: {
    label: {
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    active: {
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    disabled: {
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    status: {
        description: string;
        table: {
            defaultValue: {
                summary: statusMapping;
            };
            type: {
                summary: string;
            };
        };
        options: statusMapping[];
        control: {
            type: string;
        };
    };
    withIcon: {
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    customIcon: {
        description: string;
        control: {
            type: string;
        };
    };
    action: {
        description: string;
        control: {
            type: string;
        };
    };
    actionNumber: {
        description: string;
        control: {
            type: string;
        };
    };
};
export declare const argsTypes: {
    className: {
        description: string;
        control: {
            type: string;
        };
    };
    status: {
        description: string;
        table: {
            defaultValue: {
                summary: statusMapping;
            };
            type: {
                summary: string;
            };
        };
        options: statusMapping[];
        control: {
            type: string;
        };
    };
    size: {
        description: string;
        table: {
            defaultValue: {
                summary: sizeMapping;
            };
            type: {
                summary: string;
            };
        };
        options: sizeMapping[];
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
        };
        control: {
            type: string;
        };
    };
};
//# sourceMappingURL=argsTypes.d.ts.map