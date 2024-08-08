import { EBadgeColors } from '../../../Badge/enums';
import { EButtonVariant } from '../../enums';
import { TButtonFill, TButtonSize, TButtonVariant } from '../../types';
import { variantsMapping } from '../../../declaration';

interface IBadgeProps {
    color: `${EBadgeColors}`;
    variant: variantsMapping;
}
export type TBadgeTypes = {
    [key: string | EButtonVariant]: IBadgeProps;
};
export interface IButtonBadge {
    size: TButtonSize;
    variant: TButtonVariant;
    fill: TButtonFill;
    badge: string | number;
}
export {};
//# sourceMappingURL=types.d.ts.map