export enum sizes {
    LARGE = 'l',
    MEDIUM = 'm'
}

export interface ISpinner {
    size?: `${sizes}`;
    color?: string;
    bgColor?: string;
    children?: JSX.Element;
}