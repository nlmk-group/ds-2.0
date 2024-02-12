import { severityMapping } from '../enums';
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
                summary: severityMapping;
            };
            type: {
                summary: string;
            };
        };
        options: severityMapping[];
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
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map