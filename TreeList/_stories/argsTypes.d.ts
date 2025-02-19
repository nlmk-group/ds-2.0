declare const argsTypes: {
    data: {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    onSelectedNode: {
        description: string;
        action: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    onDataAfterDrag: {
        description: string;
        action: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    checkable: {
        description: string;
        table: {
            defaultValue: {
                summary: boolean;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    draggable: {
        description: string;
        table: {
            defaultValue: {
                summary: boolean;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    checkableSimple: {
        description: string;
        table: {
            defaultValue: {
                summary: boolean;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    rowHeight: {
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
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map