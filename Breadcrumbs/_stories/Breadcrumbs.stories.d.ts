import { default as React, ReactNode } from '../../../../node_modules/react';
import { targetMapping } from '../enums';
import { IBreadcrumbsProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IBreadcrumbsProps>;
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
    (argTypes: IBreadcrumbsProps): ReactNode;
    storyName: string;
    args: {
        crumbs: import('../types').IBreadcrumbProps[];
        width: number;
    };
};
export declare const BreadcrumbsWidth: {
    (argTypes: IBreadcrumbsProps): ReactNode;
    storyName: string;
    args: {
        width: number;
        crumbs: import('../types').IBreadcrumbProps[];
    };
};
export declare const BreadcrumbsTarget: {
    (argTypes: IBreadcrumbsProps): ReactNode;
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