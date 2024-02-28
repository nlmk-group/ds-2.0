import React from 'react';
import './Radio.stories.scss';
import { IRadioProps } from '../types';
declare const _default: {
    title: string;
    component: React.FC<IRadioProps>;
    decorators: ((Story: () => any) => JSX.Element)[];
    argTypes: {
        disabled: {
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
        value: {
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
        checked: {
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
        onChange: {
            description: string;
        };
    };
};
export default _default;
export declare const RadioDefault: {
    (argTypes: IRadioProps): JSX.Element;
    storyName: string;
    args: {
        value: string;
    };
};
//# sourceMappingURL=Radio.stories.d.ts.map