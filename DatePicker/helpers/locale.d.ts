type Quarter = {
    month: number;
    name: string;
    values: number[];
};
type LocaleInfo = {
    months: string[];
    quarters: Quarter[];
    weekdays: string[];
    quarterTranslation: string;
    label: {
        default: string;
        showtime: string;
    };
    shiftDescription: string;
    buttons: {
        accept: string;
        decline: string;
    };
};
type LocaleStrings = {
    [key: string]: LocaleInfo;
};
export declare const locale: LocaleStrings;
export {};
//# sourceMappingURL=locale.d.ts.map