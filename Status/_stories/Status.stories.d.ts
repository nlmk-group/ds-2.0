import { IStatusProps } from '../types';
import { Meta } from '@storybook/react';

declare const meta: Meta<IStatusProps>;
export default meta;
export declare const StatusDefault: {
    (props: IStatusProps): JSX.Element;
    storyName: string;
    args: {
        children: string;
        icon: string;
    };
};
export declare const StatusColors: {
    (props: IStatusProps): JSX.Element;
    storyName: string;
};
export declare const StatusFills: {
    (props: IStatusProps): JSX.Element;
    storyName: string;
    args: {
        children: string;
        icon: string;
        color: string;
    };
};
export declare const StatusSizes: {
    (props: IStatusProps): JSX.Element;
    storyName: string;
    args: {
        color: string;
    };
};
export declare const StatusCustomIcon: {
    (props: IStatusProps): JSX.Element;
    storyName: string;
    args: {
        children: string;
        color: string;
        fill: string;
    };
};
//# sourceMappingURL=Status.stories.d.ts.map