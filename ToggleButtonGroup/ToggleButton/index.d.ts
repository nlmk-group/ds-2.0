import { default as React } from '../../../../node_modules/react';
import { IButtonProperties, IToggleButtonGroupItemWithProps } from '../types';

export declare const ButtonProperties: React.Context<IButtonProperties>;
declare const ToggleButton: {
    ({ className, onClick, status, disabled, active, children, isLast, toggleButton }: IToggleButtonGroupItemWithProps): React.JSX.Element;
    Label: React.FC<{
        children: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    }>;
    Tooltip: React.FC<import('../../Tooltip/types').ITooltipProps>;
    Icon: React.FC<import('../types').IWithIcon>;
    Badge: React.FC<import('../../Badge/types').IBadgeProps>;
};
export default ToggleButton;
//# sourceMappingURL=index.d.ts.map