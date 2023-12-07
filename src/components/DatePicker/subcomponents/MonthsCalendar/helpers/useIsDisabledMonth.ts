import { useCallback } from 'react';

export const useIsDisabledMonth = (enabledFrom?: Date, enabledTo?: Date) => {
  return useCallback(
    (year?: number, month?: number) => {
      if (typeof year !== 'number' || typeof month !== 'number') {
        return false;
      }
      if (enabledFrom && year < enabledFrom.getFullYear()) {
        return true;
      }
      if (enabledTo && year > enabledTo.getFullYear()) {
        return true;
      }
      if (
        enabledFrom &&
        enabledFrom.getFullYear() === year &&
        enabledFrom.getMonth() > month
      ) {
        return true;
      }
      if (
        enabledTo &&
        enabledTo.getFullYear() === year &&
        enabledTo.getMonth() < month
      ) {
        return true;
      }
      return false;
    },
    [enabledFrom, enabledTo]
  );
};
