import React, { useState } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import FilterTip from '.';

describe('FilterTip Component', () => {
  it('renders correctly', () => {
    render(<FilterTip text="Filter Tip 1" />);
    expect(screen.getByText('Filter Tip 1')).toBeInTheDocument();

    render(<FilterTip isActive text="Filter Tip 2" />);
    const filterTipSecond = screen.getByText('Filter Tip 2');
    expect(filterTipSecond).toHaveStyle({ backgroundColor: 'var(--steel-10)' });
    expect(screen.getByText('Filter Tip 2')).toBeInTheDocument();

    render(<FilterTip isActive text="Filter Tip 3" />);
    const filterTipThird = screen.getByText('Filter Tip 3');
    expect(filterTipThird).toHaveStyle({ backgroundColor: 'var(--spectrum-sky-20)' });
    expect(screen.getByText('Filter Tip 3')).toBeInTheDocument();
  });

  it('onClick work correctly', () => {
    const FilterTipComponent = () => {
      const [isActive, setIsActive] = useState(false);

      const onClick = () => {
        setIsActive(prev => !prev);
      };

      return <FilterTip isActive={isActive} onClick={onClick} text="Filter Tip 1" />;
    };

    render(<FilterTipComponent />);
    const filterTip = screen.getByText('Filter Tip 1');
    expect(filterTip).toBeInTheDocument();
    expect(filterTip).toHaveStyle({ backgroundColor: 'var(--steel-10)' });
    fireEvent.click(filterTip);
    expect(filterTip).toHaveStyle({ backgroundColor: 'var(--spectrum-sky-20)' });
  });

  it('isDisabled work correctly', () => {
    const FilterTipComponent = () => {
      const [isActive, setIsActive] = useState(false);

      const onClick = () => {
        setIsActive(prev => !prev);
      };

      return <FilterTip isDisabled isActive={isActive} onClick={onClick} text="Filter Tip 1" />;
    };

    render(<FilterTipComponent />);
    const filterTip = screen.getByText('Filter Tip 1');
    expect(filterTip).toBeInTheDocument();
    expect(filterTip).toHaveStyle({ backgroundColor: 'var(--steel-10)' });
    fireEvent.click(filterTip);
    expect(filterTip).toHaveStyle({ backgroundColor: 'var(--steel-10)' });
  });

  it('onDelete work correctly', () => {
    const FilterTipComponent = () => {
      const [isDeleted, setIsDeleted] = useState(false);

      const onDelete = () => {
        setIsDeleted(true);
      };

      return isDeleted ? null : <FilterTip id="test" onDelete={onDelete} text="Filter Tip 1" />;
    };

    render(<FilterTipComponent />);
    const filterTip = screen.getByTestId(`test_filter_tip`);
    const filterTipButton = screen.getByTestId(`test_filter_tip_cancel`);
    expect(filterTip).toBeInTheDocument();
    filterTipButton && fireEvent.click(filterTipButton);
    expect(filterTip).not.toBeInTheDocument();
  });
});
