/// <reference types="react" />
export declare const errorImagesByCode: {
    readonly 404: () => import("react").JSX.Element;
    readonly 403: () => import("react").JSX.Element;
    readonly default: () => import("react").JSX.Element;
};
export interface ErrorPageProps {
    errorCode?: number;
    description?: string;
    hint?: string;
}
export type ErrorKeys = keyof typeof errorImagesByCode;
//# sourceMappingURL=types.d.ts.map