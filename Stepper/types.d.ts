import { EStepState } from './subcomponents/Step/types';

export interface IStepperProps {
    state: `${EStepState}`;
    stepName: string;
    className?: string;
    index: number;
    showStep: boolean;
    onClick?: (value: {
        state: `${EStepState}`;
        index: number;
    }) => void;
}
//# sourceMappingURL=types.d.ts.map