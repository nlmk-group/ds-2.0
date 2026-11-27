export interface IArgType {
  description: string;
  action?: string;
  defaultValue?: unknown;
  table?: {
    defaultValue?: {
      summary: string | number | boolean | null | undefined;
      /** Исходное выражение, для которого summary содержит вычисленное значение. */
      expression?: string;
    };
    type?: {
      summary: string;
      catalog?: { href: string; label: string };
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
  args?: TArgsType;
}
