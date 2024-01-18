export declare const dateFormat = "dd.MM.yyyy";
export declare const dateTimeFormat = "dd.MM.yyyy HH:mm";
export declare const dateTimeSecondsFormat = "dd.MM.yyyy HH:mm:ss";
export declare const dateFormatWithoutYear = "dd.MM";
export declare const dateTimeFormatWithoutYear = "dd.MM HH:mm";
export declare const dateTimeSecondsFormatWithoutYear = "dd.MM HH:mm:ss";
export declare const onlyYearFormat = "yyyy";
export declare const quarterFormat = "MM.yyyy";
export declare const monthAndYearFormat = "MM.yyyy";
export declare const onlyYearMask = "9999";
export declare const onlyYearInnerMask = "____";
export declare const monthAndYearMask = "99.9999";
export declare const monthAndYearInnerMask = "__.____";
export declare const quarterAndYearMask: (quarter: string) => string;
export declare const quarterAndYearInnerMask: (quarter: string) => string;
export declare const dateInnerMask = "__.__.____";
export declare const dateMask = "99.99.9999";
export declare const dateTimeMask = "99.99.9999 99:99";
export declare const dateTimeSecondsMask = "99.99.9999 99:99:99";
export declare const dateMaskWithoutYear = "99.99";
export declare const dateTimeMaskWithoutYear = "99.99 99:99";
export declare const dateTimeSecondsMaskWithoutYear = "99.99 99:99:99";
export declare const periodYearMask = "9999 \u2014 9999";
export declare const periodMonthMask = "99.9999 \u2014 99.9999";
export declare const periodQuarterMask: (quarter: string) => string;
export declare const periodDefaultMask = "99.99.9999 \u2014 99.99.9999";
export declare const periodWithShiftsMaskDefault = "99.99.9999/3 \u2014 99.99.9999/3";
export declare const periodWithShiftsMaskCustom = "99.99.9999/2 \u2014 99.99.9999/2";
export declare const dateFormatByLevel: {
    readonly day: "dd.MM.yyyy";
    readonly month: "MM.yyyy";
    readonly quarter: "MM.yyyy";
    readonly year: "yyyy";
};
export declare const periodMaskByLevel: (quarter: string) => {
    readonly day: "99.99.9999 — 99.99.9999";
    readonly month: "99.9999 — 99.9999";
    readonly quarter: string;
    readonly year: "9999 — 9999";
};
export declare const periodInnerMaskByLevel: (quarter: string) => {
    readonly day: "__.__.____";
    readonly month: "__.____";
    readonly quarter: string;
    readonly year: "____";
};
export declare const periodMaskByLeveWithOneDate: (quarter: string) => {
    readonly day: "99.99.9999";
    readonly month: "99.9999";
    readonly quarter: string;
    readonly year: "9999";
};
//# sourceMappingURL=dateFormat.d.ts.map