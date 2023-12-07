import { TLevel } from '@components/DatePicker/types';

export interface PeriodPickerProps {
  onLeftClick?: () => void;
  onRightClick?: () => void;
  onContentClick?: () => void;
  disableContent?: boolean;
  isHideYear: boolean;
  selectedPanel: TLevel;
}
