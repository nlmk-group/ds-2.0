import { ESwitchColors } from '../enums';

declare const argsTypes: {
    className: {
        description: string;
        control: {
            type: string;
        };
    };
    color: {
        description: string;
        table: {
            defaultValue: {
                summary: ESwitchColors;
            };
            type: {
                summary: string;
            };
        };
        options: ESwitchColors[];
        control: {
            type: string;
        };
    };
    checked: {
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
    onChange: {
        description: string;
        control: {
            type: string;
        };
    };
    label: {
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
    disabled: {
        description: string;
        control: {
            type: string;
        };
    };
    inactiveIcon: {
        description: string;
        control: {
            type: string;
        };
    };
    activeIcon: {
        description: string;
        control: {
            type: string;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map