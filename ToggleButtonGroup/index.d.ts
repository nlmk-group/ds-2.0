import { default as React } from '../../../node_modules/react';
import { IButtonGroupProperties, IToggleButtonGroup, IToggleButtonGroupItemWithProps } from './types';

export declare const ButtonGroupProperties: React.Context<IButtonGroupProperties>;
declare const ToggleButtonGroup: {
    ({ className, size, status, disabled, children }: IToggleButtonGroup): React.JSX.Element;
    Button: {
        ({ className, onClick, status, disabled, active, children, isLast, toggleButton }: IToggleButtonGroupItemWithProps): React.JSX.Element;
        Label: React.FC<{
            children: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        }>;
        Tooltip: React.FC<import('../Tooltip/types').ITooltipProps>;
        Icon: React.FC<import('./types').IWithIcon>;
        Badge: React.FC<import('../Badge/types').IBadgeProps>;
    };
};
export default ToggleButtonGroup;
//# sourceMappingURL=index.d.ts.map