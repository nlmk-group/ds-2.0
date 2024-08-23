import { IUseIsTodayQuarterParams } from '@components/DatePicker/subcomponents/QuartersCalendar/types';

export const useIsTodayQuarter =
  ({ panelValue }: IUseIsTodayQuarterParams) =>
    (quarterNumber: number) => {
      return Boolean(
        Math.floor((new Date().getMonth() + 3) / 3) === quarterNumber + 1 &&
        new Date().getFullYear() === panelValue?.getFullYear()
      );
    };
