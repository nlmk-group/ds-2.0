import React from 'react';

import Splitter from '@components/Splitter';
import { render, screen } from '@testing-library/react';

describe('Splitter Component', () => {
  test('should render top and bottom components', () => {
    const TopComponent = () => <div>Top Component</div>;
    const BottomComponent = () => <div>Bottom Component</div>;

    render(<Splitter topComponent={<TopComponent />} bottomComponent={<BottomComponent />} />);

    expect(screen.getByText(/Top Component/i)).toBeInTheDocument();
    expect(screen.getByText(/Bottom Component/i)).toBeInTheDocument();
  });

  test('should initialize top height to 48%', () => {
    const TopComponent = () => <div>Top Component</div>;
    const BottomComponent = () => <div>Bottom Component</div>;

    const { container } = render(<Splitter topComponent={<TopComponent />} bottomComponent={<BottomComponent />} />);

    const topPane = container.querySelector('.topPane');
    expect(topPane).toHaveStyle('height: 48%');
  });

  test('should update top height when the splitter is moved', () => {
    const TopComponent = () => <div>Top Component</div>;
    const BottomComponent = () => <div>Bottom Component</div>;

    render(<Splitter topComponent={<TopComponent />} bottomComponent={<BottomComponent />} />);
  });
});
