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
    className: {
        description: string;
        control: {
            type: string;
        };
    };
    action: {
        description: string;
        control: {
            type: null;
        };
    };
    close: {
        description: string;
        action: string;
        control: {
            type: null;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map