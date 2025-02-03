import { ESidebarOrientationMapping, ESidebarPositionMapping, ESidebarVariantMapping } from '../enums';

export declare const argsTypes: {
    orientation: {
        description: string;
        table: {
            defaultValue: {
                summary: ESidebarOrientationMapping;
            };
            type: {
                summary: string;
            };
        };
        options: ESidebarOrientationMapping[];
        control: {
            type: string;
        };
    };
    variant: {
        description: string;
        table: {
            defaultValue: {
                summary: ESidebarVariantMapping;
            };
            type: {
                summary: string;
            };
        };
        options: ESidebarVariantMapping[];
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
    defaultMenuOpen: {
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
    overlay: {
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
    onChangeFavorites: {
        description: string;
        action: string;
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
        options: ESidebarPositionMapping[];
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