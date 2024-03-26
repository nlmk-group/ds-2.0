import { orientationMapping, variantMapping, submenuVersionMapping } from '../enums';
export declare const argsTypes: {
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
    variant: {
        description: string;
        table: {
            defaultValue: {
                summary: variantMapping;
            };
            type: {
                summary: string;
            };
        };
        options: variantMapping[];
        control: {
            type: string;
        };
    };
    submenuVersion: {
        description: string;
        table: {
            defaultValue: {
                summary: submenuVersionMapping;
            };
            type: {
                summary: string;
            };
        };
        options: submenuVersionMapping[];
        control: {
            type: string;
        };
    };
    allowFavorites: {
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
    systemName: {
        description: string;
        control: {
            type: string;
        };
    };
    userName: {
        description: string;
        control: {
            type: string;
        };
    };
    userSurname: {
        description: string;
        control: {
            type: string;
        };
    };
    isLoggedIn: {
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
};
//# sourceMappingURL=argsTypes.d.ts.map