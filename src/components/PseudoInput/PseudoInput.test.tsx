import React from 'react';

import { customInputColors } from '@components/declaration';
import { render } from '@testing-library/react';

import { IPseudoInputProps } from './types';

import PseudoInput from '.';

const labelColorClassNames: IPseudoInputProps['labelColor'][] = [
  customInputColors.default,
  customInputColors.error,
  customInputColors.warning,
  customInputColors.success
];

const label = 'Label';
const children = <div>Sample text</div>;

describe('src/components/PseudoInput', () => {
  // тесты для разных состояний pseudo input по пропсу color
  test('It should render different pseudo input color states', () => {
    labelColorClassNames.map(color => {
      const { container } = render(<PseudoInput label={label} children={children} labelColor={color} />);
      const pseudoInput = container.getElementsByClassName(color as string)[0];
      expect(pseudoInput).toBeInTheDocument();
    });
  });
});
