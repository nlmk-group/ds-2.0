import { EInputSliderValuePosition } from './enums';

export interface IInputSliderProps {
    min: number;
    max: number;
    label?: string;
    step?: number;
    value: number;
    showValue?: boolean;
    valuePosition?: `${EInputSliderValuePosition}`;
    onChange?: (value: number) => void;
    disabled?: boolean;
}
//# sourceMappingURL=types.d.ts.map