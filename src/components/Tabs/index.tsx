import React, { FC } from 'react';

import { TIconProps } from '@components/Icon/types';
import { Icon, Tooltip } from '@components/index';
import { ITooltipProps } from '@components/Tooltip/types';
import clsx from 'clsx';

import Tab from './components/Tab';
import { ITab } from './components/Tab/types';

import { ITabs } from './types';

import styles from './Tabs.module.scss';

const Tabs: FC<ITabs> &
  Record<'Tab', FC<ITab>> &
  Record<'Tooltip', FC<ITooltipProps>> &
  Record<'Icon', FC<TIconProps>> = ({ children, className }) => {
    return <div className={clsx(styles['tabs-wrapper'], className)}>{children}</div>;
  };

Tabs.Tab = Tab;
Tabs.Tooltip = Tooltip;
Tabs.Icon = Icon;

export default Tabs;
