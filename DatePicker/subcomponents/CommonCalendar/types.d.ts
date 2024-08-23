import { ReactNode } from '../../../../../node_modules/react';
import { IFooterProps } from '../Footer/types';
import { IPeriodPickerProps } from '../PeriodPicker/types';
import { TLevel } from '../../types';

export interface ICommonCalendarProps extends IPeriodPickerProps, Omit<IFooterProps, 'className'> {
    period?: ReactNode;
    level: TLevel;
    timeSlot?: ReactNode;
    showFooter?: boolean;
    disableContentOfPeriodPicker?: boolean;
    children?: ReactNode;
    showShiftsSelector?: boolean;
    shiftFrom?: number;
    shiftTo?: number;
    shiftLength?: 2 | 3;
    disableChange?: boolean;
    withSeconds?: boolean;
    onChangeShiftFrom: (value: number) => void;
    onChangeShiftTo: (value: number) => void;
    isHideYear: boolean;
    selectedPanel: TLevel;
    [key: string]: any;
}
//# sourceMappingURL=types.d.ts.map