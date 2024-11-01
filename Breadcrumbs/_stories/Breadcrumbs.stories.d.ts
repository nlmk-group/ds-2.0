import { default as React, ReactNode } from '../../../../node_modules/react';
import { IBreadcrumbsProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IBreadcrumbsProps> & {
        Crumb: React.FC<import('../types').ICrumbProps>;
    };
    argTypes: {
        width: {
            description: string;
            control: {
                type: string;
            };
        };
        className: {
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
    };
};
export default _default;
export declare const BreadcrumbsDefault: {
    (argsTypes: IBreadcrumbsProps): ReactNode;
    storyName: string;
    args: {
        width: string;
    } | {
        width: string;
    };
};
export declare const BreadcrumbsTarget: {
    (argsTypes: IBreadcrumbsProps): ReactNode;
    storyName: string;
};
//# sourceMappingURL=Breadcrumbs.stories.d.ts.map