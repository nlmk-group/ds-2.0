import React, { FC, useContext, useMemo } from 'react';
import ReactDOM from 'react-dom';

import { MenuProps } from './types';

import { LegendContext } from '../../context';
import DropdownLegend from '../DropdownLegend';
import { DEFAULT_PORTAL_ID } from './constants';

export const Menu: FC<MenuProps> = ({ divRef, setIsOpen }) => {
  const { withPortal, portalContainerId = DEFAULT_PORTAL_ID } = useContext(LegendContext);
  // При использовании withPortal нужен будет DOM элемент, найденный по portalContainerId, для монтирования Menu
  const portalContainer = useMemo(() => document.getElementById(portalContainerId), [portalContainerId]);

  const menu = <DropdownLegend divRef={divRef} setIsOpen={setIsOpen} />;

  return withPortal && portalContainer ? ReactDOM.createPortal(menu, portalContainer) : menu;
};
