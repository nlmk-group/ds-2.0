import { ChangeEvent, CSSProperties } from '../../../node_modules/react';
import { ERadioColors } from './enums';

export type IRadioProps = {
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    color?: `${ERadioColors}`;
    className?: string;
    style?: CSSProperties;
};
//# sourceMappingURL=types.d.ts.map