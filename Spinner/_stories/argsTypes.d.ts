import { ESizesSpinner } from '../enums';

declare const argsTypes: {
    size: {
        description: string;
        control: {
            type: string;
            options: ESizesSpinner[];
        };
        table: {
            defaultValue: {
                summary: ESizesSpinner;
            };
        };
    };
    color: {
        description: string;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    bgColor: {
        description: string;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    children: {
        description: string;
        control: {
            type: string;
        };
    };
    percent: {
        description: string;
        control: {
            type: string;
        };
    };
    progressPercentage: {
        description: string;
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map