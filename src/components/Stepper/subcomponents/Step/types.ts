import { EBadgeColors } from '@components/Badge/enums';

export enum EStepState {
  filled = 'filled',
  focused = 'focused',
  inProgress = 'inProgress',
  notFilled = 'notFilled',
  disabled = 'disabled'
}

type StepperColorsType = {
  [key in EStepState]: EBadgeColors;
};

export const StepperColors: StepperColorsType = {
  [EStepState.filled]: EBadgeColors.success,
  [EStepState.focused]: EBadgeColors.brand,
  [EStepState.inProgress]: EBadgeColors.grey,
  [EStepState.notFilled]: EBadgeColors.grey,
  [EStepState.disabled]: EBadgeColors.grey
};

export interface IStepProps {
  stepName: string;
  index: number;
  state: `${EStepState}`;
}
