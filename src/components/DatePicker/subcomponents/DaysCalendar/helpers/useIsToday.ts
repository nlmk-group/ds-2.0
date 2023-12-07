import { useCallback, useMemo } from 'react';

export const useIsToday = () => {
  const today = useMemo(() => new Date(), []);
  return useCallback(
    (date: Date) =>
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate(),
    [today]
  );
};
