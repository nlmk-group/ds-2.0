import { default as React } from '../../../../node_modules/react';

export declare const getCellProps: (cell: any) => {
    text: string;
    number?: undefined;
    children?: undefined;
} | {
    number: number;
    text?: undefined;
    children?: undefined;
} | {
    children: React.JSX.Element;
    text?: undefined;
    number?: undefined;
};
//# sourceMappingURL=utils.d.ts.map