import { EChipColors } from '../enums';
import { sizesMapping, variantsMapping } from '../../declaration/enums';

export declare const argsTypes: {
    children: {
        description: string;
        control: {
            type: string;
        };
    };
    size: {
        description: string;
        table: {
            defaultValue: {
                summary: sizesMapping;
            };
            type: {
                summary: string;
            };
        };
        options: sizesMapping[];
        control: {
            type: string;
        };
    };
    color: {
        description: string;
        table: {
            defaultValue: {
                summary: EChipColors;
            };
            type: {
                summary: string;
            };
        };
        options: EChipColors[];
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
    suffix: {
        description: string;
        control: {
            type: string;
        };
    };
    variant: {
        description: string;
        table: {
            defaultValue: {
                summary: variantsMapping;
            };
            type: {
                summary: string;
            };
        };
        options: variantsMapping[];
        control: {
            type: string;
        };
    };
};
//# sourceMappingURL=argsTypes.d.ts.map