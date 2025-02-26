import { EStepState } from '../subcomponents/Step/enums';

export declare const argsTypes: {
    className: {
        description: string;
        control: {
            type: string;
        };
    };
    state: {
        description: string;
        table: {
            defaultValue: {
                summary: EStepState;
            };
            type: {
                summary: string;
            };
        };
        options: string[];
        control: {
            type: string;
        };
    };
    stepName: {
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
    index: {
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
    showStep: {
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
    onClick: {
        description: string;
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map