export interface IYearsCalendarProps {
    innerValue?: Date;
    selectedDate?: Date;
    onSelect?: (date: Date) => void;
    enabledFrom?: Date;
    enabledTo?: Date;
    disableChange?: boolean;
    valueFrom?: Date;
    valueTo?: Date;
    withPeriod?: boolean;
    panelValue?: Date;
}
export interface IUseIsSelectedYearParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
    selectedDate?: Date | null;
}
export interface IUseIsStartYearParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
}
export interface IUseIsMidYearParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
export interface IUseIsEndYearParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
//# sourceMappingURL=types.d.ts.map