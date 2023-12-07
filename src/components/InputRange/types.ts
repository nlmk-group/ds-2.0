export interface IInputRangeProps {
  min: number;
  max: number;
  step?: number;
  value: { min: number; max: number };
  onChange?: (value: { min: number; max: number }) => void;
  disabled?: boolean;
}
