import { EBadgeColors } from '../../../Badge/enums';

export declare enum EStepState {
    filled = "filled",
    focused = "focused",
    inProgress = "inProgress",
    notFilled = "notFilled",
    disabled = "disabled"
}
type StepperColorsType = {
    [key in EStepState]: EBadgeColors;
};
export declare const StepperColors: StepperColorsType;
export interface IStepProps {
    stepName: string;
    index: number;
    state: `${EStepState}`;
}
export {};
//# sourceMappingURL=types.d.ts.map