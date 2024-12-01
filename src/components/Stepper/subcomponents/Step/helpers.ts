import { EBadgeColors } from '@components/Badge/enums';

import { EStepState } from './types';

export const StepStateToBadgeColor: Record<EStepState, EBadgeColors> = {
  [EStepState.filled]: EBadgeColors.success,
  [EStepState.focused]: EBadgeColors.brand,
  [EStepState.inProgress]: EBadgeColors.grey,
  [EStepState.notFilled]: EBadgeColors.grey,
  [EStepState.disabled]: EBadgeColors.grey
};
