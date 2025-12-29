import React, { useState } from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import { ILegendColor } from './types';

import Legend from '.';
import { ELegendType } from './enums';

const mockColor: ILegendColor = { default: 'red' };
const mockColorList: ILegendColor[] = [{ default: 'red' }, { default: 'green' }];
const mockContextValue = {
  color: mockColor,
  onColorChange: jest.fn()
};

describe('Legend Component', () => {
  it('renders correctly in VIEW mode', () => {
    render(<Legend type={ELegendType.VIEW} label="My Legend" {...mockContextValue} />);

    expect(screen.getByText('My Legend')).toBeInTheDocument();
    const colorDiv = screen.getByTestId('legend-view-color');
    expect(colorDiv).toHaveStyle({ backgroundColor: 'red' });
  });

  it('renders correctly in VIEW mode without label', () => {
    render(<Legend type={ELegendType.VIEW} label="My Legend" {...mockContextValue} />);

    expect(screen.getByTestId('legend-view')).toBeInTheDocument();
  });

  it('renders correctly in EDIT mode', () => {
    render(<Legend type={ELegendType.EDIT} label="My Legend" {...mockContextValue} />);

    expect(screen.getByText('My Legend')).toBeInTheDocument();
    const colorDiv = screen.getByTestId('legend-edit-color');
    expect(colorDiv).toHaveStyle({ backgroundColor: 'red' });
  });

  it('correctly change color in EDIT mode', () => {
    const LegendComponent = () => {
      const [currentColor, setCurrentColor] = useState<ILegendColor>(mockColor);

      const onChange = (val: ILegendColor) => {
        setCurrentColor(val);
      };

      return (
        <Legend
          color={currentColor}
          type={ELegendType.EDIT}
          colorList={mockColorList}
          label="My Legend"
          onColorChange={onChange}
        />
      );
    };

    render(<LegendComponent />);

    expect(screen.getByText('My Legend')).toBeInTheDocument();
    const colorDiv = screen.getByTestId('legend-edit-color');
    expect(colorDiv).toHaveStyle({ backgroundColor: 'red' });
    fireEvent.click(colorDiv);
    const greenColorDiv = screen.getAllByTestId('legend-view-color')[1];
    expect(greenColorDiv).toHaveStyle({ backgroundColor: 'green' });
    fireEvent.click(greenColorDiv);
    const newColorDiv = screen.getByTestId('legend-edit-color');
    expect(newColorDiv).toHaveStyle({ backgroundColor: 'green' });
  });
});
