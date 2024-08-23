import { IDayProps } from '../Day/types';

export type TValue = {
    value: number;
    label: string;
};
export interface IInfiniteContainerProps extends IDayProps {
    values: Array<TValue>;
    selectedTime?: Date;
    handleMinuteClick: (value: number) => void;
    container?: null | HTMLDivElement;
    getSelected?: (value: number, selectedTime?: Date) => boolean;
}
//# sourceMappingURL=types.d.ts.map