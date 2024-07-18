import { colorMapping, indicatorMapping } from '../enums';
declare const argsTypes: {
    children: {
        description: string;
        control: {
            type: string;
        };
    };
    color: {
        description: string;
        table: {
            defaultValue: {
                summary: colorMapping;
            };
            type: {
                summary: string;
            };
        };
        options: colorMapping[];
        control: {
            type: string;
        };
    };
    indicator: {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
        options: indicatorMapping[];
        control: {
            type: string;
        };
    };
    bgOpacity: {
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
    withIcon: {
        description: string;
        control: {
            type: string;
        };
    };
    customIcon: {
        description: string;
        control: {
            type: string;
        };
    };
    close: {
        description: string;
        control: {
            type: string;
        };
    };
    actionButton: {
        description: string;
        control: {
            type: string;
        };
    };
    actionButtonText: {
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