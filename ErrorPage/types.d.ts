export declare const errorImagesByCode: {
    readonly 404: () => JSX.Element;
    readonly 403: () => JSX.Element;
    readonly default: () => JSX.Element;
};
export interface ErrorPageProps {
    errorCode?: number;
    description?: string;
    hint?: string;
}
export type ErrorKeys = keyof typeof errorImagesByCode;
//# sourceMappingURL=types.d.ts.map