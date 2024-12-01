import { ESnackbarColors, ESnackbarTypes } from '../enums';

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
    type: {
        description: string;
        table: {
            defaultValue: {
                summary: ESnackbarTypes;
            };
            type: {
                summary: string;
            };
        };
        options: ESnackbarTypes[];
        control: {
            type: string;
        };
    };
    onClose: {
        description: string;
        control: {
            type: string;
        };
    };
    showCountdown: {
        description: string;
        control: {
            type: string;
        };
    };
    startIcon: {
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