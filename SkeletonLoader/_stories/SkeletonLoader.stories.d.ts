import { default as React } from '../../../../node_modules/react';
import { ESkeletonAnimation, ISkeletonLoadingProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<ISkeletonLoadingProps>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
    argTypes: {
        id: {
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
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        count: {
            description: string;
            control: {
                type: string;
                default: number;
            };
            table: {
                defaultValue: {
                    summary: number;
                };
            };
        };
        width: {
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
        height: {
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
        animation: {
            description: string;
            table: {
                defaultValue: {
                    summary: ESkeletonAnimation;
                };
                type: {
                    summary: string;
                };
            };
            options: ESkeletonAnimation[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const SkeletonLoaderDefault: {
    (argTypes: ISkeletonLoadingProps): JSX.Element;
    storyName: string;
};
export declare const SkeletonLoaderPulseAnimation: {
    (argsTypes: ISkeletonLoadingProps): JSX.Element;
    storyName: string;
    args: {
        animation: string;
    };
};
export declare const SkeletonLoaderMulti: {
    (argTypes: ISkeletonLoadingProps): JSX.Element;
    storyName: string;
};
export declare const SkeletonLoaderMultiPulseAnimation: {
    (argTypes: ISkeletonLoadingProps): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=SkeletonLoader.stories.d.ts.map