import { FC } from 'react';
import { TIconProps } from '../Icon/types';
import { ITooltipProps } from '../Tooltip/types';
import { ITab } from './components/Tab/types';
import { ITabs } from './types';
declare const Tabs: FC<ITabs> & Record<'Tab', FC<ITab>> & Record<'Tooltip', FC<ITooltipProps>> & Record<'Icon', FC<TIconProps>>;
export default Tabs;
//# sourceMappingURL=index.d.ts.map