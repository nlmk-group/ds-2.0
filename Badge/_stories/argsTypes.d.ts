import { colorsMapping, variantsMapping } from '../../declaration/enums';
import { ESizesBadgeMapping } from '../types';
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
                summary: ESizesBadgeMapping;
            };
            type: {
                summary: string;
            };
        };
        options: ESizesBadgeMapping[];
        control: {
            type: string;
        };
    };
    color: {
        description: string;
        table: {
            defaultValue: {
                summary: colorsMapping;
            };
            type: {
                summary: string;
            };
        };
        options: colorsMapping[];
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