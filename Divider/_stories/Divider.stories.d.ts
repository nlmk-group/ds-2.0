import { default as React, ReactNode } from '../../../../node_modules/react';
import { EDividerOrientation, EDividerType } from '../enums';
import { IDividerProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IDividerProps>;
    argTypes: {
        children: {
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
        dashed: {
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
        orientation: {
            description: string;
            table: {
                defaultValue: {
                    summary: EDividerOrientation;
                };
                type: {
                    summary: string;
                };
            };
            options: EDividerOrientation[];
            control: {
                type: string;
            };
        };
        orientationSpace: {
            description: string;
            control: {
                type: string;
            };
        };
        type: {
            description: string;
            table: {
                defaultValue: {
                    summary: EDividerType;
                };
                type: {
                    summary: string;
                };
            };
            options: EDividerType[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const DefaultDivider: {
    (argTypes: IDividerProps): ReactNode;
    storyName: string;
    args: {
        children: React.JSX.Element;
    };
};
export declare const DashedDivider: {
    (argTypes: IDividerProps): ReactNode;
    storyName: string;
    args: {
        children: React.JSX.Element;
        dashed: boolean;
    };
};
export declare const DividerOrientation: {
    (argTypes: IDividerProps): ReactNode;
    storyName: string;
    args: {
        children: React.JSX.Element;
    };
};
export declare const DividerOrientationWithCustomSpace: {
    (argTypes: IDividerProps): ReactNode;
    storyName: string;
    args: {
        children: React.JSX.Element;
    };
};
export declare const DividerVertical: {
    (argTypes: IDividerProps): ReactNode;
    storyName: string;
    args: {};
};
export declare const DividerCustomClassName: {
    (argTypes: IDividerProps): ReactNode;
    storyName: string;
    args: {
        children: string;
    };
};
export declare const DividerType: {
    (argTypes: IDividerProps): ReactNode;
    storyName: string;
    args: {};
};
//# sourceMappingURL=Divider.stories.d.ts.map