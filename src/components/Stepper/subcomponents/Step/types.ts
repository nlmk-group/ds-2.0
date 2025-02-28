import { EStepState } from './enums';

export interface IStepProps {
  stepName: string;
  index: number;
  state: `${EStepState}`;
  active?: boolean;
}
