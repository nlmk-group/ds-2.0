import { FC } from '../../../node_modules/react';
import { IAvatarProps } from '../Avatar/types';
import { IMenuItemProps, ISidebarProps, ISubmenuItemProps } from './types';

declare const Sidebar: FC<ISidebarProps> & Record<'Avatar', FC<IAvatarProps>> & Record<'MenuItem', FC<IMenuItemProps>> & Record<'SubmenuItem', FC<ISubmenuItemProps>>;
export default Sidebar;
//# sourceMappingURL=index.d.ts.map