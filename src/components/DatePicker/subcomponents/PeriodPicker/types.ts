import { TLevel } from '@components/DatePicker/types';

export interface IPeriodPickerProps {
  onLeftClick?: () => void;
  onRightClick?: () => void;
  onContentClick?: () => void;
  disableContent?: boolean;
  isHideYear: boolean;
  selectedPanel: TLevel;
}
