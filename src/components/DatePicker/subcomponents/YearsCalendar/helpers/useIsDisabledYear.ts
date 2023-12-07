import { useCallback } from 'react';

export const useIsDisabledYear = (enabledFrom?: Date, enabledTo?: Date) => {
  return useCallback(
    (currentYear: number) => {
      if (enabledFrom && enabledFrom.getFullYear() > currentYear) {
        return true;
      }
      return enabledTo && enabledTo.getFullYear() < currentYear;
    },
    [enabledFrom, enabledTo]
  );
};
