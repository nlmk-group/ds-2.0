import React from 'react';
import { IBox } from '../types';
declare const _default: {
    title: string;
    component: React.FC<IBox>;
    decorators: ((Story: () => any) => JSX.Element)[];
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
        background: {
            description: string;
            control: {
                type: string;
            };
        };
        paddingSpace: {
            description: string;
            table: {
                defaultValue: {
                    summary: import("../../declaration").sizesMappingInput;
                };
                type: {
                    summary: string;
                };
            };
            options: import("../../declaration").sizesMappingInput[];
            control: {
                type: string;
            };
        };
        height: {
            description: string;
            control: {
                type: string;
            };
        };
        width: {
            description: string;
            control: {
                type: string;
            };
        };
        gap: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
        };
        border: {
            description: string;
            control: {
                type: string;
            };
        };
        borderRadius: {
            description: string;
            control: {
                type: string;
            };
        };
        display: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
        flexDirection: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
        justifyContent: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
        alignItems: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
        flexWrap: {
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const BoxDefault: {
    (argTypes: IBox): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Box.stories.d.ts.map