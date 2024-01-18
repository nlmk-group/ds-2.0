import React, { ReactNode } from 'react';
import { targetMapping } from '../enums';
import { BreadcrumbsProps } from '../types';
declare const _default: {
    title: string;
    component: React.FC<BreadcrumbsProps>;
    argTypes: {
        crumbs: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        width: {
            description: string;
            table: {
                defaultValue: {
                    summary: number;
                };
            };
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const BreadcrumbsDefault: {
    (argTypes: BreadcrumbsProps): ReactNode;
    storyName: string;
    args: {
        crumbs: import("../types").Breadcrumb[];
        width: number;
    };
};
export declare const BreadcrumbsWidth: {
    (argTypes: BreadcrumbsProps): ReactNode;
    storyName: string;
    args: {
        width: number;
        crumbs: import("../types").Breadcrumb[];
    };
};
export declare const BreadcrumbsTarget: {
    (argTypes: BreadcrumbsProps): ReactNode;
    storyName: string;
    args: {
        width: number;
        crumbs: {
            href: string;
            label: string;
            target: targetMapping;
        }[];
    };
};
//# sourceMappingURL=Breadcrumbs.stories.d.ts.map