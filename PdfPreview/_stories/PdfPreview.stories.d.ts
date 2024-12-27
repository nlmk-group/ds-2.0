import { default as React } from '../../../../node_modules/react';
import { TPdfPreviewProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<TPdfPreviewProps>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
    argTypes: {
        data: {
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
        loading: {
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
        style: {
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
        errorMessage: {
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
export declare const PdfPreviewWithAttachFiles: {
    (args: TPdfPreviewProps): JSX.Element;
    storyName: string;
    args: {
        errorMessage: string;
    };
};
//# sourceMappingURL=PdfPreview.stories.d.ts.map