import { default as React } from '../../../../node_modules/react';
import { IPaginationProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IPaginationProps>;
    argTypes: {
        currentPage: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: number;
                };
            };
            control: {
                type: string;
            };
        };
        setCurrentPage: {
            description: string;
        };
        onPageChange: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        elementsPerPage: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: number;
                };
            };
            control: {
                type: string;
            };
        };
        setElementsPerPage: {
            description: string;
        };
        withSelect: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        maxPageCount: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: number;
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
        };
    };
    decorators: ((Story: any) => React.JSX.Element)[];
};
export default _default;
export declare const PaginationDefault: {
    (argsTypes: IPaginationProps): JSX.Element;
    storyName: string;
};
export declare const PaginationWithGap: {
    (argsTypes: IPaginationProps): JSX.Element;
    storyName: string;
};
export declare const PaginationWithLeftGap: {
    (argsTypes: IPaginationProps): JSX.Element;
    storyName: string;
};
export declare const PaginationWithRightGap: {
    (argsTypes: IPaginationProps): JSX.Element;
    storyName: string;
};
export declare const PaginationWithSelect: {
    (argsTypes: IPaginationProps): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Pagination.stories.d.ts.map