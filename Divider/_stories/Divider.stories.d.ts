import React, { ReactNode } from 'react';
import { orientationMapping, typeMapping } from '../enums';
import { IDivider } from '../types';
declare const _default: {
    title: string;
    component: React.FC<IDivider>;
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
                    summary: typeMapping;
                };
                type: {
                    summary: string;
                };
            };
            options: typeMapping[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const DefaultDivider: {
    (argTypes: IDivider): ReactNode;
    storyName: string;
    args: {
        children: JSX.Element;
    };
};
export declare const DashedDivider: {
    (argTypes: IDivider): ReactNode;
    storyName: string;
    args: {
        children: JSX.Element;
        dashed: boolean;
    };
};
export declare const DividerOrientation: {
    (argTypes: IDivider): ReactNode;
    storyName: string;
    args: {
        children: JSX.Element;
    };
};
export declare const DividerOrientationWithCustomSpace: {
    (argTypes: IDivider): ReactNode;
    storyName: string;
    args: {
        children: JSX.Element;
    };
};
export declare const DividerVertical: {
    (argTypes: IDivider): ReactNode;
    storyName: string;
    args: {};
};
export declare const DividerCustomClassName: {
    (argTypes: IDivider): ReactNode;
    storyName: string;
    args: {
        children: string;
    };
};
export declare const DividerType: {
    (argTypes: IDivider): ReactNode;
    storyName: string;
    args: {};
};
//# sourceMappingURL=Divider.stories.d.ts.map