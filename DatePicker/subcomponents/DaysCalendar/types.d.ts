export interface CalendarProps {
    selectedDate?: Date;
    panelValue?: Date;
    onSelect?: (date: Date) => void;
    enabledFrom?: Date;
    enabledTo?: Date;
    disableChange?: boolean;
    valueFrom?: Date;
    valueTo?: Date;
    withPeriod?: boolean;
    withTime?: boolean;
}
export interface useIsDaySelectedParams {
    selectedDate?: Date | null;
    dateCurrentHover?: Date | null;
    withTime?: boolean;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
export interface useIsStartDayParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
}
export interface useIsMidDayParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
export interface useIsEndDayParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
//# sourceMappingURL=types.d.ts.map