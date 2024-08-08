import { default as React, ReactNode } from '../../../../node_modules/react';
import { IAlertProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IAlertProps>;
    decorators: ((Story: any) => React.JSX.Element)[];
    argTypes: {
        showChildren: {
            description: string;
            control: {
                type: string;
            };
        };
        title: {
            description: string;
            control: {
                type: string;
            };
        };
        severity: {
            description: string;
            table: {
                defaultValue: {
                    summary: import('../enums').EAlertSeverity;
                };
                type: {
                    summary: string;
                };
            };
            options: import('../enums').EAlertSeverity[];
            control: {
                type: string;
            };
        };
        close: {
            description: string;
            control: {
                type: string;
            };
        };
        action: {
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
        props: {
            description: string;
        };
    };
};
export default _default;
interface IAlertStoryProps extends IAlertProps {
    showChildren?: boolean;
}
export declare const AlertDefault: {
    ({ showChildren, ...argTypes }: IAlertStoryProps): ReactNode;
    storyName: string;
    args: {
        title: string;
        showChildren: boolean;
    };
};
//# sourceMappingURL=Alert.stories.d.ts.map