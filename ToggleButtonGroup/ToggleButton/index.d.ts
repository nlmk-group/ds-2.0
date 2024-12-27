import { default as React } from '../../../../node_modules/react';
import { IButtonPropertiesProps, IToggleButtonGroupItemWithProps } from '../types';

export declare const ButtonProperties: React.Context<IButtonPropertiesProps>;
declare const ToggleButton: {
    ({ className, onClick, disabled, active, children, isLast, onToggle }: IToggleButtonGroupItemWithProps): React.JSX.Element;
    Label: React.FC<{
        children: React.ReactNode;
    }>;
    Tooltip: React.FC<import('../../Tooltip/types').ITooltipProps>;
    Icon: React.FC<import('../types').IToggleButtonIconProps>;
    Badge: React.FC<import('../../Badge/types').IBadgeProps>;
};
export default ToggleButton;
//# sourceMappingURL=index.d.ts.map