export interface IArgType {
    description: string;
    action?: string;
    table?: {
        defaultValue?: {
            summary: string | number | boolean | null | undefined;
        };
        type?: {
            summary: string;
        };
    };
    options?: Array<string | number>;
    control?: {
        type?: string | boolean | null | undefined;
    };
}
export type TArgsType = {
    [key: string]: IArgType;
};
export interface IArgumentsTableProps {
    args: TArgsType;
}
//# sourceMappingURL=types.d.ts.map