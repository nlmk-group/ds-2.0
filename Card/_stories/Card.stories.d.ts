import { ReactNode } from '../../../../node_modules/react';
import { orientationMapping } from '../enums';
import { ICard } from '../types';

declare const _default: import('@storybook/csf').ComponentAnnotations<import('@storybook/react/dist/types-a5624094').R, ICard>;
export default _default;
export declare const CardDefault: {
    (argTypes: ICard): ReactNode;
    storyName: string;
    arg: {
        orientation: orientationMapping;
    };
};
export declare const CardVariant: {
    (argTypes: ICard): ReactNode;
    storyName: string;
    arg: {
        orientation: orientationMapping;
    };
};
export declare const CardOrientation: {
    (argTypes: ICard): ReactNode;
    storyName: string;
    args: {};
};
//# sourceMappingURL=Card.stories.d.ts.map