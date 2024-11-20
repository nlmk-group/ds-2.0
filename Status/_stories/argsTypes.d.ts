import { EStatusColor, EStatusFill, EStatusSize } from '../enums';

export declare const argsTypes: {
    children: {
        description: string;
        control: {
            type: "text";
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
            type: "select";
        };
    };
    size: {
        description: string;
        table: {
            defaultValue: {
                summary: EStatusSize;
            };
            type: {
                summary: string;
            };
        };
        options: EStatusSize[];
        control: {
            type: "select";
        };
    };
    color: {
        description: string;
        table: {
            defaultValue: {
                summary: EStatusColor;
            };
            type: {
                summary: string;
            };
        };
        options: EStatusColor[];
        control: {
            type: "select";
        };
    };
    fill: {
        description: string;
        table: {
            defaultValue: {
                summary: EStatusFill;
            };
            type: {
                summary: string;
            };
        };
        options: EStatusFill[];
        control: {
            type: "select";
        };
    };
    className: {
        description: string;
        control: {
            type: "text";
        };
    };
};
//# sourceMappingURL=argsTypes.d.ts.map