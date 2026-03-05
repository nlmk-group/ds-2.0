import React from 'react';

import Splitter from '@components/Splitter';
import { render, screen } from '@testing-library/react';

describe('Splitter Component', () => {
  const TopComponent = () => <div>Top Component</div>;
  const BottomComponent = () => <div>Bottom Component</div>;

  test('should render top and bottom components', () => {
    render(<Splitter topComponent={<TopComponent />} bottomComponent={<BottomComponent />} />);

    expect(screen.getByText(/Top Component/i)).toBeInTheDocument();
    expect(screen.getByText(/Bottom Component/i)).toBeInTheDocument();
  });

  test('should initialize top height to 48%', () => {
    const { container } = render(<Splitter topComponent={<TopComponent />} bottomComponent={<BottomComponent />} />);

    const topPane = container.querySelector('.topPane');
    expect(topPane).toHaveStyle('height: 48%');
  });

  test('should update top height when the splitter is moved', () => {
    render(<Splitter topComponent={<TopComponent />} bottomComponent={<BottomComponent />} />);
  });

  test('hides bottom component if isShowBottomComponent=false', () => {
    const { container } = render(
      <Splitter
        topComponent={<TopComponent />}
        bottomComponent={<BottomComponent />}
        isShowBottomComponent={false}
      />
    );

    const splitterBar = container.querySelector('.splitter') as HTMLElement;
    expect(splitterBar).toHaveStyle('display: none');

    const bottomPane = container.querySelector('.bottomPane') as HTMLElement;
    expect(bottomPane).toBeInTheDocument();
    expect(bottomPane).toHaveStyle('height: 0');
  });

  test('applies topComponentSize and bottomComponentSize as percent', () => {
    const { container } = render(
      <Splitter
        topComponent={<div>Top Component</div>}
        bottomComponent={<div>Bottom Component</div>}
        topComponentSize={40}
        bottomComponentSize={60}
      />
    );
    const topPane = container.querySelector('.topPane') as HTMLElement;
    const bottomPane = container.querySelector('.bottomPane') as HTMLElement;

    expect(
      topPane?.style.height || topPane?.style.flexBasis
    ).toBe('40%');

    expect(
      bottomPane?.style.height || bottomPane?.style.flexBasis
    ).toBe('60%');
  });

  test('handle dots rendered with visible bottom component', () => {
    render(
      <Splitter
        topComponent={<TopComponent />}
        bottomComponent={<BottomComponent />}
        isShowBottomComponent={true}
      />
    );
    expect(document.querySelectorAll('.dot')).toHaveLength(5);
  });

  test('handle dots not rendered if bottom is hidden', () => {
    render(
      <Splitter
        topComponent={<TopComponent />}
        bottomComponent={<BottomComponent />}
        isShowBottomComponent={false}
      />
    );
    expect(document.querySelectorAll('.dot')).toHaveLength(0);
  });
});
