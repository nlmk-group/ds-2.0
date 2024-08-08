import { EAlertSeverity } from '../enums';

export declare const argsTypes: {
    title: {
        description: string;
        control: {
            type: string;
        };
    };
    severity: {
        description: string;
        table: {
            defaultValue: {
                summary: EAlertSeverity;
            };
            type: {
                summary: string;
            };
        };
        options: EAlertSeverity[];
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
    action: {
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
    props: {
        description: string;
    };
    showChildren: {
        description: string;
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map