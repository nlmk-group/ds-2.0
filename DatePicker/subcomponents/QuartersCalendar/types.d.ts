export interface QuartersCalendarProps {
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
export interface useIsTodayQuarterParams {
    panelValue?: Date | null;
}
export interface useIsSelectedQuarterParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
    selectedDate?: Date | null;
    panelValue?: Date | null;
}
export interface useIsStartQuarterParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
}
export interface useIsMidQuarterParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
export interface useIsEndQuarterParams {
    dateCurrentHover?: Date | null;
    withPeriod?: boolean;
    dateFrom?: Date | null;
    dateTo?: Date | null;
}
export interface quarterParams {
    month: number;
    name: string;
    values: number[];
}
//# sourceMappingURL=types.d.ts.map