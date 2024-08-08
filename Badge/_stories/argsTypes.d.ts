import { variantsMapping } from '../../declaration/enums';
import { EBadgeColors, EBadgeSizes } from '../enums';

export declare const argsTypes: {
    children: {
        description: string;
        table: {
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
                summary: EBadgeSizes;
            };
            type: {
                summary: string;
            };
        };
        options: EBadgeSizes[];
        control: {
            type: string;
        };
    };
    color: {
        description: string;
        table: {
            defaultValue: {
                summary: EBadgeColors;
            };
            type: {
                summary: string;
            };
        };
        options: EBadgeColors[];
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