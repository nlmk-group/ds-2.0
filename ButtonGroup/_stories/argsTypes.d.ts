import { orientationMapping } from '../enums';
import { EFill, ESizes, EVariant } from '../../Button/enums';
declare const argsTypes: {
    children: {
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
    disabled: {
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
    size: {
        description: string;
        table: {
            defaultValue: {
                summary: ESizes;
            };
            type: {
                summary: string;
            };
        };
        options: ESizes[];
        control: {
            type: string;
        };
    };
    variant: {
        description: string;
        table: {
            defaultValue: {
                summary: EVariant;
            };
            type: {
                summary: string;
            };
        };
        options: EVariant[];
        control: {
            type: string;
        };
    };
    fill: {
        description: string;
        table: {
            defaultValue: {
                summary: EVariant;
            };
            type: {
                summary: string;
            };
        };
        options: EFill[];
        control: {
            type: string;
        };
    };
    orientation: {
        description: string;
        table: {
            defaultValue: {
                summary: orientationMapping;
            };
            type: {
                summary: string;
            };
        };
        options: orientationMapping[];
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map