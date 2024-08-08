import { EBadgeColors } from '@components/Badge/enums';

import { EStepState } from './types';

export const StepStateToBadgeColor: Record<EStepState, EBadgeColors> = {
  [EStepState.filled]: EBadgeColors.success,
  [EStepState.focused]: EBadgeColors.primary,
  [EStepState.inProgress]: EBadgeColors.secondary,
  [EStepState.notFilled]: EBadgeColors['light-grey'],
  [EStepState.disabled]: EBadgeColors['light-grey']
};
