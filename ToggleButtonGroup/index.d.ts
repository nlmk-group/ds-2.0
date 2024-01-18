import React from 'react';
import { IButtonGroupProperties, IToggleButtonGroup, IToggleButtonGroupItemWithProps } from './types';
export declare const ButtonGroupProperties: React.Context<IButtonGroupProperties>;
declare const ToggleButtonGroup: {
    ({ className, size, status, children }: IToggleButtonGroup): JSX.Element;
    Button: {
        ({ className, onClick, status, disabled, active, children, isLast, toggleButton }: IToggleButtonGroupItemWithProps): JSX.Element;
        Label: React.FC<{
            children: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        }>;
        Tooltip: React.FC<import("../Tooltip/types").ITooltipProps>;
        Icon: React.FC<import("./types").IWithIcon>;
        Badge: React.FC<import("../Badge/types").IBadgeProps>;
    };
};
export default ToggleButtonGroup;
//# sourceMappingURL=index.d.ts.map