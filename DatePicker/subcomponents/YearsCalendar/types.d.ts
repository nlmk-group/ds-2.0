export interface YearsCalendarProps {
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
export interface useIsSelectedYearParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
    selectedDate?: Date | null;
}
export interface useIsStartYearParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
}
export interface useIsMidYearParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
export interface useIsEndYearParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
//# sourceMappingURL=types.d.ts.map