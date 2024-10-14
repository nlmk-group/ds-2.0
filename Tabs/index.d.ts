import { FC } from '../../../node_modules/react';
import { TIconProps } from '../Icon/types';
import { ITooltipProps } from '../Tooltip/types';
import { ITabsProps } from './types';
import { ITabProps } from './subcomponents/Tab/types';

declare const Tabs: FC<ITabsProps> & Record<'Tab', FC<ITabProps>> & Record<'Tooltip', FC<ITooltipProps>> & Record<'Icon', FC<TIconProps>>;
export default Tabs;
//# sourceMappingURL=index.d.ts.map