declare const argsTypes: {
    name: {
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
        options: string[];
        control: {
            type: string;
        };
    };
    color: {
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
        options: string[];
        control: {
            type: string;
        };
    };
    htmlColor: {
        description: string;
        table: {
            defaultValue: {
                summary: undefined;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    containerSize: {
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
        options: number[];
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
        options: number[];
        control: {
            type: string;
        };
    };
    badge: {
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
        mapping: {
            false: string;
            true: JSX.Element;
        };
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map