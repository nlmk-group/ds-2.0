export interface IInputSliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
}
