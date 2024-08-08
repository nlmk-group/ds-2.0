import { orientationMapping, variantMapping, positionMapping } from '../enums';

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
    currentPath: {
        description: string;
        control: {
            type: string;
        };
    };
};
export declare const menuItemArgsTypes: {
    position: {
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
        options: positionMapping[];
        control: {
            type: string;
        };
    };
    label: {
        description: string;
        control: {
            type: string;
        };
    };
    icon: {
        description: string;
    };
    path: {
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
};
export declare const submenuItemArgsTypes: {
    label: {
        description: string;
        control: {
            type: string;
        };
    };
    image: {
        description: string;
        control: {
            type: string;
        };
    };
    depth: {
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
    path: {
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
};
//# sourceMappingURL=argsTypes.d.ts.map