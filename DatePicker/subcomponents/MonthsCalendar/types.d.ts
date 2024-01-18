export interface MonthsCalendarProps {
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
export interface useIsTodayMonthParams {
    panelValue?: Date | null;
}
export interface useIsSelectedMonthParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
    selectedDate?: Date | null;
    panelValue?: Date | null;
}
export interface useIsStartMonthParams {
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateCurrentHover?: Date | null;
}
export interface useIsMidMonthParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
export interface useIsEndMonthParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateTo?: Date | null;
    dateFrom?: Date | null;
}
//# sourceMappingURL=types.d.ts.map