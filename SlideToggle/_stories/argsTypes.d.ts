import { ESizeMapping } from '../enum';

declare const argsTypes: {
    isShow: {
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    onToggle: {
        description: string;
    };
    size: {
        description: string;
        table: {
            defaultValue: {
                summary: ESizeMapping;
            };
        };
        options: ESizeMapping[];
        control: {
            type: string;
        };
    };
    toggleContainerShadow: {
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    children: {
        description: string;
        control: {
            type: string;
        };
    };
    title: {
        description: string;
        control: {
            type: string;
        };
    };
    after: {
        description: string;
        control: {
            type: string;
        };
    };
    iconWrapperId: {
        description: string;
        control: {
            type: string;
        };
    };
    titleWrapperId: {
        description: string;
        control: {
            type: string;
        };
    };
    afterWrapperId: {
        description: string;
        control: {
            type: string;
        };
    };
    contentWrapperId: {
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
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map