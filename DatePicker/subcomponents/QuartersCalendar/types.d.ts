export interface IQuartersCalendarProps {
    panelValue?: Date;
    enabledFrom?: Date;
    enabledTo?: Date;
    currentDate?: Date;
    selectedDate?: Date;
    onSelect?: (date: Date) => void;
    valueFrom?: Date;
    valueTo?: Date;
    disableChange?: boolean;
    withPeriod?: boolean;
}
export interface IUseIsTodayQuarterParams {
    panelValue?: Date | null;
}
export interface IUseIsSelectedQuarterParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
    selectedDate?: Date | null;
    panelValue?: Date | null;
}
export interface IUseIsStartQuarterParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
}
export interface IUseIsMidQuarterParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
export interface IUseIsEndQuarterParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
export interface IQuarterParams {
    month: number;
    name: string;
    values: number[];
}
//# sourceMappingURL=types.d.ts.map