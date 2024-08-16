import { default as React, ReactNode } from '../../../../node_modules/react';
import { EButtonSizes } from '../../Button/enums';
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
            options: EButtonSizes[];
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
    };
};
export default _default;
export declare const DropdownDefault: {
    (args: IDropdownProps): ReactNode;
    args: {
        buttonChildren: string;
        size: EButtonSizes;
        menuStyle: {
            width: string;
        };
    };
    storyName: string;
};
//# sourceMappingURL=Dropdown.stories.d.ts.map