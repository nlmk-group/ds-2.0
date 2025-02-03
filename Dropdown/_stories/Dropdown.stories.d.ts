import { default as React, ReactNode } from '../../../../node_modules/react';
import { EButtonSize } from '../../Button/enums';
import { IDropdownProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IDropdownProps>;
    decorators: ((Story: any) => React.JSX.Element)[];
    argTypes: {
        children: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
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
            options: EButtonSize[];
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
        className: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        buttonChildren: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        menuStyle: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        withPortal: {
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
        portalContainerId: {
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
};
export default _default;
export declare const DefaultDropdown: {
    (args: IDropdownProps): ReactNode;
    args: {
        buttonChildren: string;
        size: EButtonSize;
        menuStyle: {
            minWidth: string;
        };
    };
    storyName: string;
};
export declare const PortalDropdown: {
    (args: IDropdownProps): ReactNode;
    args: {
        buttonChildren: string;
        size: EButtonSize;
        menuStyle: {
            minWidth: string;
        };
        withPortal: boolean;
    };
    storyName: string;
};
export declare const DropdownWithCustomElements: {
    (args: IDropdownProps): ReactNode;
    storyName: string;
    args: {
        buttonChildren: string;
        size: EButtonSize;
        menuStyle: {
            minWidth: string;
        };
    };
};
export declare const SmallDropdown: {
    (args: IDropdownProps): ReactNode;
    args: {
        buttonChildren: string;
        size: EButtonSize;
        menuStyle: {
            minWidth: string;
        };
    };
    storyName: string;
};
//# sourceMappingURL=Dropdown.stories.d.ts.map