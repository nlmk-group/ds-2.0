import { variantsMapping } from '../../declaration';
import { ESnackbarColors } from '../enums';

declare const argsTypes: {
    children: {
        description: string;
        control: {
            type: string;
        };
    };
    color: {
        description: string;
        table: {
            defaultValue: {
                summary: ESnackbarColors;
            };
            type: {
                summary: string;
            };
        };
        options: ESnackbarColors[];
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
    close: {
        description: string;
        control: {
            type: string;
        };
    };
    actionButton: {
        description: string;
        control: {
            type: string;
        };
    };
    actionText: {
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
    autoHideDuration: {
        description: string;
        table: {
            defaultValue: {
                summary: number;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map