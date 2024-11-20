import { default as React, ReactNode } from '../../../../node_modules/react';
import { ISidebarProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<ISidebarProps> & Record<"Avatar", React.FC<import('../../Avatar/types').IAvatarProps>> & Record<"MenuItem", React.FC<import('../types').IMenuItemProps>> & Record<"SubmenuItem", React.FC<import('../types').ISubmenuItemProps>>;
    decorators: ((Story: any) => React.JSX.Element)[];
    argTypes: {
        orientation: {
            description: string;
            table: {
                defaultValue: {
                    summary: import('../enums').ESidebarOrientationMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../enums').ESidebarOrientationMapping[];
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: import('../enums').ESidebarVariantMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../enums').ESidebarVariantMapping[];
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
    parameters: {
        layout: string;
    };
};
export default _default;
export declare const SidebarDefault: {
    (argTypes: ISidebarProps): JSX.Element;
    storyName: string;
    args: {
        userName: string;
        userSurname: string;
        systemName: string;
    };
};
export declare const VerticalBurgerSidebar: {
    (argTypes: ISidebarProps): ReactNode;
    storyName: string;
    args: {
        userName: string;
        userSurname: string;
        systemName: string;
    };
};
export declare const SidebarHorizontal: {
    (argTypes: ISidebarProps): ReactNode;
    storyName: string;
    args: {
        userName: string;
        userSurname: string;
        systemName: string;
    };
};
export declare const HorizontalBurgerSidebar: {
    (argTypes: ISidebarProps): ReactNode;
    storyName: string;
    args: {
        userName: string;
        userSurname: string;
        systemName: string;
    };
};
//# sourceMappingURL=Sidebar.stories.d.ts.map