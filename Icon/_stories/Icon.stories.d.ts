import { IIconUnitProps } from '../IconUnit/types';
import { TIconProps } from '../types';

declare const _default: import('@storybook/core/csf').ComponentAnnotations<import('@storybook/react/dist/types-5617c98e').R, TIconProps>;
export default _default;
export declare const IconComponent: {
    (argsTypes: TIconProps): JSX.Element;
    storyName: string;
    args: {
        name: string;
        color: string;
        containerSize: number;
    };
};
export declare const AllIcons: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        controls: {
            disable: boolean;
        };
    };
};
export declare const IconUnitComponent: {
    (argsTypes: IIconUnitProps): JSX.Element;
    storyName: string;
    args: {
        unit: string;
    };
    parameters: {
        controls: {
            include: string[];
        };
    };
    argTypes: {
        unit: {
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
    };
};
//# sourceMappingURL=Icon.stories.d.ts.map