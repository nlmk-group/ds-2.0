import { ETooltipBehaviorType, ETooltipPlacementType } from '../enums';

export declare const argsTypes: {
    title: {
        description: string;
        control: {
            type: string;
        };
    };
    description: {
        description: string;
        control: {
            type: string;
        };
    };
    behavior: {
        description: string;
        table: {
            defaultValue: {
                summary: ETooltipBehaviorType;
            };
        };
        options: ETooltipBehaviorType[];
        control: {
            type: string;
        };
    };
    placement: {
        description: string;
        table: {
            defaultValue: {
                summary: ETooltipPlacementType;
            };
        };
        options: ETooltipPlacementType[];
        control: {
            type: string;
        };
    };
    clickable: {
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
    render: {
        description: string;
    };
    className: {
        description: string;
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map