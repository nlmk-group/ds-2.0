import { customInputColors } from '../../declaration';
import { EPseudoInputSizes } from '../enums';

export declare const argsTypes: {
    label: {
        description: string;
        control: {
            type: string;
        };
    };
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
                summary: string;
            };
            type: {
                summary: string;
            };
        };
        options: EPseudoInputSizes[];
        control: {
            type: string;
        };
    };
    labelColor: {
        description: string;
        table: {
            defaultValue: {
                summary: customInputColors;
            };
        };
        options: customInputColors[];
        control: {
            type: string;
        };
    };
    variant: {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    color: {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    className: {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    suffix: {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    style: {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    badgeChildren: {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
};
//# sourceMappingURL=argsTypes.d.ts.map