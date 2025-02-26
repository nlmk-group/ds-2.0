import { EBadgeColors } from '@components/Badge/enums';

import { EStepState } from './enums';

export const StepStateToBadgeColor: Record<EStepState, EBadgeColors> = {
  [EStepState.filled]: EBadgeColors.brand,
  [EStepState.notFilled]: EBadgeColors.grey,
  [EStepState.disabled]: EBadgeColors.grey
};
