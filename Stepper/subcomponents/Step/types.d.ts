import { EStepColor, EStepState } from './enums';

export interface IStepProps {
    stepName: string;
    index: number;
    state: `${EStepState}`;
    color: `${EStepColor}`;
    active?: boolean;
}
//# sourceMappingURL=types.d.ts.map