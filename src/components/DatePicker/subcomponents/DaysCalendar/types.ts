export interface ICalendarProps {
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
  withoutWeekdays: boolean;
}

export interface IUseIsDaySelectedParams {
  selectedDate?: Date | null;
  dateCurrentHover?: Date | null;
  withTime?: boolean;
  withPeriod?: boolean;
  dateFrom?: Date | null;
  dateTo?: Date | null;
}

export interface IUseIsStartDayParams {
  dateCurrentHover?: Date | null;
  withPeriod?: boolean;
  dateFrom?: Date | null;
}

export interface IUseIsMidDayParams {
  dateCurrentHover?: Date | null;
  withPeriod?: boolean;
  dateFrom?: Date | null;
  dateTo?: Date | null;
}

export interface IUseIsEndDayParams {
  dateCurrentHover?: Date | null;
  withPeriod?: boolean;
  dateFrom?: Date | null;
  dateTo?: Date | null;
}
