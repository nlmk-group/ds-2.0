import { default as React } from '../../../node_modules/react';
import { IButtonGroupPropertiesProps, IToggleButtonGroupItemWithProps, IToggleButtonGroupProps } from './types';

export declare const ButtonGroupProperties: React.Context<IButtonGroupPropertiesProps>;
declare const ToggleButtonGroup: {
    ({ className, size, disabled, children, style }: IToggleButtonGroupProps): React.JSX.Element;
    Button: {
        ({ className, onClick, disabled, active, children, isLast, onToggle }: IToggleButtonGroupItemWithProps): React.JSX.Element;
        Label: React.FC<{
            children: React.ReactNode;
        }>;
        Tooltip: React.FC<import('../Tooltip/types').ITooltipProps>;
        Icon: React.FC<import('./types').IToggleButtonIconProps>;
        Badge: React.FC<import('../Badge/types').IBadgeProps>;
    };
};
export default ToggleButtonGroup;
//# sourceMappingURL=index.d.ts.map