import { EBadgeColors } from '../../Badge/enums';

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
    scrollable: {
        description: string;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: boolean;
            };
        };
    };
    label: {
        description: string;
        control: {
            type: string;
        };
    };
    active: {
        description: string;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: boolean;
            };
        };
    };
    hasBadge: {
        description: string;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: boolean;
            };
        };
    };
    badgeChildren: {
        description: string;
        control: {
            type: string;
        };
    };
    badgeColor: {
        description: string;
        options: EBadgeColors[];
        control: {
            type: string;
        };
    };
    hasIcon: {
        description: string;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: boolean;
            };
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map