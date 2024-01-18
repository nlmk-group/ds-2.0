export const dateFormat = 'dd.MM.yyyy';
export const dateTimeFormat = 'dd.MM.yyyy HH:mm';
export const dateTimeSecondsFormat = 'dd.MM.yyyy HH:mm:ss';
export const dateFormatWithoutYear = 'dd.MM';
export const dateTimeFormatWithoutYear = 'dd.MM HH:mm';
export const dateTimeSecondsFormatWithoutYear = 'dd.MM HH:mm:ss';
export const onlyYearFormat = 'yyyy';
export const quarterFormat = 'MM.yyyy';
export const monthAndYearFormat = 'MM.yyyy';
export const onlyYearMask = '9999';
export const onlyYearInnerMask = '____';
export const monthAndYearMask = '99.9999';
export const monthAndYearInnerMask = '__.____';
export const quarterAndYearMask = (quarter: string) => `9 ${quarter} 9999`;
export const quarterAndYearInnerMask = (quarter: string) => `_ ${quarter} ____`;
export const dateInnerMask = '__.__.____';
export const dateMask = '99.99.9999';
export const dateTimeMask = '99.99.9999 99:99';
export const dateTimeSecondsMask = '99.99.9999 99:99:99';
export const dateMaskWithoutYear = '99.99';
export const dateTimeMaskWithoutYear = '99.99 99:99';
export const dateTimeSecondsMaskWithoutYear = '99.99 99:99:99';
export const periodYearMask = '9999 — 9999';
export const periodMonthMask = '99.9999 — 99.9999';
export const periodQuarterMask = (quarter: string) => `9 ${quarter} 9999 — 9 ${quarter} 9999`;
export const periodDefaultMask = '99.99.9999 — 99.99.9999';
export const periodWithShiftsMaskDefault = '99.99.9999/3 — 99.99.9999/3';
export const periodWithShiftsMaskCustom = '99.99.9999/2 — 99.99.9999/2';

export const dateFormatByLevel = {
  day: dateFormat,
  month: monthAndYearFormat,
  quarter: quarterFormat,
  year: onlyYearFormat
} as const;

export const periodMaskByLevel = (quarter: string) =>
  ({
    day: periodDefaultMask,
    month: periodMonthMask,
    quarter: periodQuarterMask(quarter),
    year: periodYearMask
  } as const);

export const periodInnerMaskByLevel = (quarter: string) =>
  ({
    day: dateInnerMask,
    month: monthAndYearInnerMask,
    quarter: quarterAndYearInnerMask(quarter),
    year: onlyYearInnerMask
  } as const);

export const periodMaskByLeveWithOneDate = (quarter: string) =>
  ({
    day: dateMask,
    month: monthAndYearMask,
    quarter: quarterAndYearMask(quarter),
    year: onlyYearMask
  } as const);
