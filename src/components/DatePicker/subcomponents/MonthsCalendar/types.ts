export interface IMonthsCalendarProps {
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

export interface IUseIsTodayMonthParams {
  panelValue?: Date | null;
}

export interface IUseIsSelectedMonthParams {
  dateCurrentHover?: Date | null;
  withPeriod?: boolean;
  dateFrom?: Date | null;
  dateTo?: Date | null;
  selectedDate?: Date | null;
  panelValue?: Date | null;
}

export interface IUseIsStartMonthParams {
  withPeriod?: boolean;
  dateFrom?: Date | null;
  dateCurrentHover?: Date | null;
}

export interface IUseIsMidMonthParams {
  dateCurrentHover?: Date | null;
  withPeriod?: boolean;
  dateFrom?: Date | null;
  dateTo?: Date | null;
}

export interface IUseIsEndMonthParams {
  dateCurrentHover?: Date | null;
  withPeriod?: boolean;
  dateTo?: Date | null;
  dateFrom?: Date | null;
}
