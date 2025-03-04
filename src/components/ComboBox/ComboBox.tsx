import React from 'react';

import type { IComboBoxProps } from './types';

import { Provider } from './context';
import { ComboBoxDropdown } from './subcomponents';

const ComboBox = (props: IComboBoxProps) => (
  <Provider>
    <ComboBoxDropdown {...props} />
  </Provider>
);

export default ComboBox;