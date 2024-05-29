import React from 'react';

import Button from '@components/Button/index';
import { ClickAwayListener } from '@components/index';
import Menu from '@components/Select/subcomponents/Menu';
import MenuItem from '@components/Select/subcomponents/MenuItem';

export const Dropdown = () => {
  return (
    <ClickAwayListener onClickAway={}>
      <div>
        <Button onClick={() => {}}></Button>
        <Menu>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </Menu>
      </div>
    </ClickAwayListener>
  );
};
